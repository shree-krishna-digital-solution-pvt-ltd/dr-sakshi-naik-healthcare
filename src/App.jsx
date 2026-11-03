import React, { useState, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/locomotive-scroll.css';
import { MainLayout } from './layouts/index.js';
import { HomePage, AboutPage, TreatmentDetailPage, FaqPage, ContactPage } from './pages/index.js';
import { treatmentsData } from './data/treatmentsData.js';
import { usePageSEO } from './utils/usePageSEO.js';

export default function App() {
  const parseCurrentRoute = () => {
    if (typeof window === 'undefined') return { page: 'home', slug: 'pregnancy-care-goregaon' };
    const hash = window.location.hash || '';
    const pathname = window.location.pathname || '';
    const cleanHash = hash.replace(/^#\/?/, '').toLowerCase();
    const cleanPath = pathname.replace(/^\//, '').toLowerCase();
    const currentPath = cleanHash || cleanPath;

    // Check for treatments route: treatments/:slug or /treatments/:slug
    if (currentPath.includes('treatments/')) {
      const rawSlug = currentPath.split('treatments/')[1]?.replace(/[^a-zA-Z0-9_-]/g, '') || 'pregnancy-care-goregaon';
      const matched = treatmentsData.find((t) => t.slug === rawSlug || t.legacySlug === rawSlug);
      return { page: 'treatment', slug: matched ? matched.slug : rawSlug };
    }

    // Check for direct treatment slug without 'treatments/' prefix
    const directMatch = treatmentsData.find((t) => t.slug === currentPath || t.legacySlug === currentPath);
    if (directMatch) {
      return { page: 'treatment', slug: directMatch.slug };
    }

    // About page: SEO slug or legacy alias
    if (currentPath === 'womens-healthcare-specialist-goregaon' || currentPath === 'about') {
      return { page: 'about', slug: 'pregnancy-care-goregaon' };
    }

    // FAQ page: SEO slug or legacy alias
    if (currentPath === 'pregnancy-care-faqs' || currentPath === 'faq') {
      return { page: 'faq', slug: 'pregnancy-care-goregaon' };
    }

    // Contact page: SEO slug or legacy alias
    if (currentPath === 'gynaecologist-clinic-near-goregaon' || currentPath === 'contact') {
      return { page: 'contact', slug: 'pregnancy-care-goregaon' };
    }

    return { page: 'home', slug: 'pregnancy-care-goregaon' };
  };

  const [route, setRoute] = useState(parseCurrentRoute);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const locomotiveScrollRef = useRef(null);

  // Synchronize document <title>, dynamic meta tags, and Google JSON-LD schema
  usePageSEO(route);

  // Initialize Locomotive Scroll for smooth scrolling
  useEffect(() => {
    try {
      locomotiveScrollRef.current = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.1,
          duration: 1.2,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        },
      });
    } catch (err) {
      console.warn('LocomotiveScroll init error:', err);
    }

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, []);

  const scrollToTop = () => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
    setTimeout(() => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    }, 50);
  };

  // Scroll to top whenever route or slug changes
  useEffect(() => {
    scrollToTop();
  }, [route.page, route.slug]);

  useEffect(() => {
    const handleRouteChange = () => {
      const parsed = parseCurrentRoute();
      setRoute(parsed);
      scrollToTop();
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const navigateTo = (page, slug = 'pregnancy-care-goregaon') => {
    if (page === 'treatment') {
      const matched = treatmentsData.find((t) => t.slug === slug || t.legacySlug === slug);
      const targetSlug = matched ? matched.slug : slug;
      setRoute({ page: 'treatment', slug: targetSlug });
      window.location.hash = `#/treatments/${targetSlug}`;
    } else if (page === 'about') {
      setRoute({ page: 'about', slug: 'pregnancy-care-goregaon' });
      window.location.hash = '#/womens-healthcare-specialist-goregaon';
    } else if (page === 'faq') {
      setRoute({ page: 'faq', slug: 'pregnancy-care-goregaon' });
      window.location.hash = '#/pregnancy-care-faqs';
    } else if (page === 'contact') {
      setRoute({ page: 'contact', slug: 'pregnancy-care-goregaon' });
      window.location.hash = '#/gynaecologist-clinic-near-goregaon';
    } else {
      setRoute({ page: 'home', slug: 'pregnancy-care-goregaon' });
      window.location.hash = '#/';
    }
    scrollToTop();
  };

  // Scroll-triggered smooth and visible directional edge reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed', 'is-arrived', 'section-arrived');
            // Trigger all nested directional elements
            const children = entry.target.querySelectorAll(
              '.reveal-left, .reveal-right, .reveal-up, .reveal-scale, .reveal-fade, .arrive-heading-right, .arrive-image-left, .arrive-content-bottom'
            );
            children.forEach((child) => child.classList.add('is-revealed', 'is-arrived'));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.08,
      }
    );

    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach((sec, sIdx) => {
        sec.classList.add('section-arrive');

        // 1. Section Headings - Alternate coming from Left & Right for rich visual dynamics
        const headings = sec.querySelectorAll('h1, h2, h3');
        headings.forEach((h, hIdx) => {
          if (!h.classList.contains('reveal-left') && !h.classList.contains('reveal-right')) {
            if ((sIdx + hIdx) % 2 === 0) {
              h.classList.add('reveal-left');
            } else {
              h.classList.add('reveal-right');
            }
          }
        });

        // 2. 2-Column Split Sections: Left column from left edge, Right column from right edge
        const splitCols = sec.querySelectorAll('.flex-col.lg\\:flex-row > div, .flex-col.md\\:flex-row > div');
        if (splitCols.length >= 2) {
          splitCols.forEach((col, cIdx) => {
            if (!col.classList.contains('reveal-left') && !col.classList.contains('reveal-right')) {
              if (cIdx % 2 === 0) {
                col.classList.add('reveal-left');
              } else {
                col.classList.add('reveal-right', 'reveal-delay-1');
              }
            }
          });
        }

        // 3. Grid Cards - Alternate entering from Left and Right with stagger delays
        const gridItems = sec.querySelectorAll('.grid > div, .grid > article, form');
        gridItems.forEach((item, gIdx) => {
          if (!item.classList.contains('reveal-left') && !item.classList.contains('reveal-right') && !item.classList.contains('reveal-up')) {
            if (gIdx % 2 === 0) {
              item.classList.add('reveal-left');
            } else {
              item.classList.add('reveal-right');
            }
            const delayClass = `reveal-delay-${Math.min((gIdx % 4) + 1, 4)}`;
            item.classList.add(delayClass);
          }
        });

        // Check if already in viewport
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          sec.classList.add('is-revealed', 'is-arrived', 'section-arrived');
          sec
            .querySelectorAll(
              '.reveal-left, .reveal-right, .reveal-up, .reveal-scale, .reveal-fade, .arrive-heading-right, .arrive-image-left, .arrive-content-bottom'
            )
            .forEach((el) => el.classList.add('is-revealed', 'is-arrived'));
        } else {
          observer.observe(sec);
        }
      });
    }, 80);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [route.page, route.slug]);

  return (
    <MainLayout
      currentPage={route.page}
      onNavigate={navigateTo}
      isAppointmentModalOpen={appointmentModalOpen}
      onOpenAppointmentModal={() => setAppointmentModalOpen(true)}
      onCloseAppointmentModal={() => setAppointmentModalOpen(false)}
    >
      <div key={`${route.page}-${route.slug || ''}`} className="page-arrival">
        {route.page === 'treatment' ? (
          <TreatmentDetailPage
            slug={route.slug}
            onNavigateHome={() => navigateTo('home')}
            onNavigateTreatment={(slug) => navigateTo('treatment', slug)}
            onBookAppointment={() => setAppointmentModalOpen(true)}
          />
        ) : route.page === 'about' ? (
          <AboutPage
            onNavigateHome={() => navigateTo('home')}
            onBookAppointment={() => setAppointmentModalOpen(true)}
          />
        ) : route.page === 'faq' ? (
          <FaqPage
            onNavigateHome={() => navigateTo('home')}
            onBookAppointment={() => setAppointmentModalOpen(true)}
          />
        ) : route.page === 'contact' ? (
          <ContactPage
            onNavigateHome={() => navigateTo('home')}
            onBookAppointment={() => setAppointmentModalOpen(true)}
          />
        ) : (
          <HomePage
            onBookAppointment={() => setAppointmentModalOpen(true)}
          />
        )}
      </div>
    </MainLayout>
  );
}
