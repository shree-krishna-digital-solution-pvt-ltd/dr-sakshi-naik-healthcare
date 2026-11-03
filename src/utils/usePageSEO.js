import { useEffect } from 'react';
import { pageSeoData, treatmentsSeoMap, getStructuredSchema } from '../data/seoData.js';
import { clinicInfo } from '../data/clinicInfo.js';

function setMetaTag(attrName, attrValue, content) {
  if (!content) return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(href) {
  if (!href) return;
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  const fullUrl = `${window.location.origin}${href}`;
  element.setAttribute('href', fullUrl);
}

function setJsonLdSchema(schemas) {
  let script = document.getElementById('seo-json-ld');
  if (!script) {
    script = document.createElement('script');
    script.id = 'seo-json-ld';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemas);
}

/**
 * Custom React Hook to dynamically synchronize document title, meta tags, and structured data
 */
export function usePageSEO(route) {
  useEffect(() => {
    let seo = pageSeoData.home;

    if (route.page === 'treatment') {
      // Find by slug or legacy slug
      const found = Object.values(treatmentsSeoMap).find(
        (t) => t.slug === route.slug || t.legacySlug === route.slug
      );
      if (found) {
        seo = {
          title: found.title,
          description: found.description,
          keyword: found.keyword,
          canonical: `/#/treatments/${found.slug}`,
        };
      }
    } else if (pageSeoData[route.page]) {
      seo = pageSeoData[route.page];
    }

    // 1. Update Title
    if (seo.title) {
      document.title = seo.title;
    }

    // 2. Update Standard Meta Tags
    setMetaTag('name', 'description', seo.description);
    setMetaTag('name', 'keywords', seo.keyword);
    setMetaTag('name', 'author', clinicInfo.doctorName);

    // 3. Update Open Graph Tags
    const currentUrl = window.location.href;
    setMetaTag('property', 'og:title', seo.title);
    setMetaTag('property', 'og:description', seo.description);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', clinicInfo.clinicName);
    setMetaTag('property', 'og:image', `${window.location.origin}/images/logo/logo.png`);

    // 4. Update Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', seo.title);
    setMetaTag('name', 'twitter:description', seo.description);
    setMetaTag('name', 'twitter:image', `${window.location.origin}/images/logo/logo.png`);

    // 5. Update Canonical Link
    setCanonical(seo.canonical || window.location.pathname);

    // 6. Structured Schema
    const schemas = getStructuredSchema(route);
    setJsonLdSchema(schemas);
  }, [route.page, route.slug]);
}

export default usePageSEO;

