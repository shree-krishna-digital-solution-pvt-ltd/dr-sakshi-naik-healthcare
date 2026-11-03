/**
 * Navigation Routes & Menu Configuration
 */
import { treatmentsData, dropdownLeftTreatments, dropdownRightTreatments } from './treatmentsData.js';

export const navLinks = [
  { label: 'Home', href: '#/', page: 'home', isDirectLink: true },
  { label: 'About', href: '#/womens-healthcare-specialist-goregaon', page: 'about', isDirectLink: true },
  { label: 'Treatments', href: '#treatments', isDropdown: true },
  { label: 'FAQ', href: '#/pregnancy-care-faqs', isDirectLink: true },
  { label: 'Contact', href: '#/gynaecologist-clinic-near-goregaon', isDirectLink: true },
];

export const treatmentDropdownItems = treatmentsData.map((item) => ({
  name: item.title,
  slug: item.slug,
  legacySlug: item.legacySlug,
  href: `#/treatments/${item.slug}`,
  category: item.category,
}));

export { dropdownLeftTreatments, dropdownRightTreatments };

export default {
  navLinks,
  treatmentDropdownItems,
  dropdownLeftTreatments,
  dropdownRightTreatments,
};
