/**
 * Comprehensive SEO Metadata & Schema Specification
 * Curated for Google On-Page & Local SEO standards
 */
import { clinicInfo } from './clinicInfo.js';
import { faqsData } from './faqsData.js';

export const pageSeoData = {
  home: {
    page: 'home',
    slug: '',
    keyword: 'Best Gynaecologist in Goregaon',
    title: 'Best Gynaecologist In Goregaon | Dr.Sakshi Naik',
    description:
      'Dr. Sakshi Naik, the Best Gynaecologist in Goregaon, provides compassionate women’s healthcare, expert guidance, and personalized care for every stage of life.',
    canonical: '/',
  },
  about: {
    page: 'about',
    slug: 'womens-healthcare-specialist-goregaon',
    aliases: ['about', 'womens-healthcare-specialist-goregaon'],
    keyword: "Women's Healthcare Specialist in Goregaon",
    title: "Women's Healthcare Specialist In Goregaon | Dr.Sakshi Naik",
    description:
      "Dr. Sakshi Naik, a Women's Healthcare Specialist in Goregaon, offers compassionate care, expert guidance, and personalized treatment for women's health and wellness.",
    canonical: '/#/womens-healthcare-specialist-goregaon',
  },
  faq: {
    page: 'faq',
    slug: 'pregnancy-care-faqs',
    aliases: ['faq', 'pregnancy-care-faqs'],
    keyword: 'Pregnancy Care FAQs',
    title: 'Pregnancy Care FAQs | Dr.Sakshi Naik',
    description:
      'Dr. Sakshi Naik answers common pregnancy care FAQs, offering expert guidance on prenatal checkups, nutrition, pregnancy symptoms, fetal development, and maternal health.',
    canonical: '/#/pregnancy-care-faqs',
  },
  contact: {
    page: 'contact',
    slug: 'gynaecologist-clinic-near-goregaon',
    aliases: ['contact', 'gynaecologist-clinic-near-goregaon'],
    keyword: 'Gynaecologist Clinic near Goregaon',
    title: 'Gynaecologist Clinic Near Goregaon | Dr.Sakshi Naik',
    description:
      "Visit Dr. Sakshi Naik, a trusted gynaecologist near Goregaon, for expert women's healthcare, pregnancy care, fertility guidance, and personalized treatment.",
    canonical: '/#/gynaecologist-clinic-near-goregaon',
  },
};

export const treatmentsSeoMap = {
  'pregnancy-care-goregaon': {
    treatmentId: 1,
    legacySlug: 'maternity-care',
    slug: 'pregnancy-care-goregaon',
    keyword: 'Pregnancy Care in Goregaon',
    title: 'Pregnancy Care In Goregaon | Dr.Sakshi Naik',
    description:
      'Dr. Sakshi Naik provides expert pregnancy care in Goregaon, offering personalized prenatal consultations, regular health monitoring, and compassionate support for a healthy pregnancy.',
  },
  'labour-and-delivery-hospital-goregaon': {
    treatmentId: 2,
    legacySlug: 'labour-and-delivery',
    slug: 'labour-and-delivery-hospital-goregaon',
    keyword: 'Labour and Delivery Hospital in Goregaon',
    title: 'Labour And Delivery Hospital In Goregaon | Dr.Sakshi Naik',
    description:
      'Dr. Sakshi Naik offers expert maternity care in Goregaon, providing personalized labour guidance, delivery support, and compassionate care for mothers and newborns.',
  },
  'high-risk-pregnancy-care-goregaon': {
    treatmentId: 3,
    legacySlug: 'high-risk-pregnancy-care',
    slug: 'high-risk-pregnancy-care-goregaon',
    keyword: 'High Risk Pregnancy Care in Goregaon',
    title: 'High Risk Pregnancy Care In Goregaon | Dr.Sakshi Naik',
    description:
      'Dr. Sakshi Naik provides high-risk pregnancy care in Goregaon, offering specialized monitoring, personalized medical guidance, and compassionate support for mothers and babies.',
  },
  'pregnancy-planning-doctor-goregaon': {
    treatmentId: 4,
    legacySlug: 'preconception-counselling',
    slug: 'pregnancy-planning-doctor-goregaon',
    keyword: 'Pregnancy Planning Doctor in Goregaon',
    title: 'Pregnancy Planning Doctor In Goregaon | Dr.Sakshi Naik',
    description:
      'Dr. Sakshi Naik, a Pregnancy Planning Doctor in Goregaon, offers personalized preconception counselling, fertility guidance, and expert care for a healthy pregnancy journey.',
  },
  'menopause-treatment-goregaon': {
    treatmentId: 5,
    legacySlug: 'adolescence-and-menopause-care',
    slug: 'menopause-treatment-goregaon',
    keyword: 'Menopause Treatment in Goregaon',
    title: 'Menopause Treatment In Goregaon | Dr.Sakshi Naik',
    description:
      'Dr. Sakshi Naik offers menopause treatment in Goregaon, providing personalized care, symptom management, and expert guidance to support women’s health and well-being.',
  },
  'fertility-counselling-goregaon': {
    treatmentId: 6,
    legacySlug: 'fertility-care-and-counselling',
    slug: 'fertility-counselling-goregaon',
    keyword: 'Fertility Counselling in Goregaon',
    title: 'Fertility Counselling In Goregaon | Dr.Sakshi Naik',
    description:
      'Dr. Sakshi Naik offers fertility counselling in Goregaon, providing personalized guidance, reproductive health assessments, and expert support to help couples plan their parenthood journey.',
  },
  'iui-ivf-treatment-goregaon': {
    treatmentId: 7,
    legacySlug: 'iui-ivf-icsi-tesa',
    slug: 'iui-ivf-treatment-goregaon',
    keyword: 'IUI/IVF Treatment in Goregaon',
    title: 'IUI/IVF Treatment In Goregaon | Dr.Sakshi Naik',
    description:
      'Dr. Sakshi Naik provides IUI/IVF treatment in Goregaon, offering personalized fertility guidance, reproductive health consultations, and compassionate support for couples pursuing parenthood.',
  },
  'laparoscopic-gynaecologist-goregaon': {
    treatmentId: 8,
    legacySlug: 'advanced-laparoscopy-and-hysteroscopy',
    slug: 'laparoscopic-gynaecologist-goregaon',
    keyword: 'Laparoscopic Gynaecologist in Goregaon',
    title: 'Laparoscopic Gynaecologist In Goregaon | Dr.Sakshi Naik',
    description:
      "Dr. Sakshi Naik, a Laparoscopic Gynaecologist in Goregaon, offers expert consultations, minimally invasive treatment guidance, and personalized care for women's reproductive health.",
  },
  'gynaecological-treatment-goregaon': {
    treatmentId: 9,
    legacySlug: 'gynaecological-care',
    slug: 'gynaecological-treatment-goregaon',
    keyword: 'Gynaecological Treatment in Goregaon',
    title: 'Gynaecological Treatment In Goregaon | Dr.Sakshi Naik',
    description:
      "Dr. Sakshi Naik provides gynaecological treatment in Goregaon, offering expert consultations, personalized care, and support for women's reproductive health and wellness.",
  },
  'urogynaecologist-goregaon': {
    treatmentId: 10,
    legacySlug: 'urogynaecology',
    slug: 'urogynaecologist-goregaon',
    keyword: 'Urogynaecologist in Goregaon',
    title: 'Urogynaecologist In Goregaon | Dr.Sakshi Naik',
    description:
      'Dr. Sakshi Naik offers urogynaecology care in Goregaon, providing expert consultations and personalized treatment guidance for bladder, pelvic floor, and urinary health concerns.',
  },
  'gynaecological-cancer-treatment-goregaon': {
    treatmentId: 11,
    legacySlug: 'gynae-oncology',
    slug: 'gynaecological-cancer-treatment-goregaon',
    keyword: 'Gynaecological Cancer Treatment in Goregaon',
    title: 'Gynaecological Cancer Treatment In Goregaon | Dr.Sakshi Naik',
    description:
      "Dr. Sakshi Naik provides gynaecological cancer care in Goregaon, offering expert consultations, early detection guidance, and personalized treatment support for women's health.",
  },
};

/**
 * Returns JSON-LD structured data for Google Rich Results
 */
export function getStructuredSchema(route) {
  const baseClinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: clinicInfo.doctorName,
    alternateName: clinicInfo.clinicName,
    description: pageSeoData.home.description,
    medicalSpecialty: [
      'Obstetrics and Gynecology',
      'Reproductive Endocrinology',
      'Gynecologic Surgery',
    ],
    telephone: clinicInfo.phones.primary,
    email: clinicInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinicInfo.address.line2,
      addressLocality: clinicInfo.address.city,
      addressRegion: clinicInfo.address.state,
      postalCode: clinicInfo.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.1678',
      longitude: '72.8687',
    },
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
    ],
  };

  if (route.page === 'faq') {
    return [
      baseClinicSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqsData.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      },
    ];
  }

  return [baseClinicSchema];
}

