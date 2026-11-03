/**
 * Selected Essential FAQ Data for Dr. Sakshi Naik Clinic
 * Curated to 6 high-value questions covering pregnancy, fertility, gynecology, and surgical care.
 */

export const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'pregnancy', label: 'Pregnancy & Maternity' },
  { id: 'fertility', label: 'Fertility & Conception' },
  { id: 'gynecology', label: 'Period & Hormones' },
  { id: 'surgery', label: 'Surgeries & Keyhole' },
];

export const faqsData = [
  // 1. Pregnancy & Maternity
  {
    id: 'faq-preg-1',
    category: 'pregnancy',
    question: 'How often do I need to visit for pregnancy checkups?',
    answer:
      'In the first few months, visits are usually once every 4 weeks. As your due date gets closer (around weeks 28 to 36), we see you every two weeks. In the final month, we meet every week to monitor your baby’s position, heartbeat, and ensure you feel calm and ready for delivery. Regular pregnancy care helps monitor your baby’s growth, check your blood pressure, and address concerns. However, your schedule may vary depending on your health and pregnancy risks. Always follow your doctor’s advice.',
  },
  {
    id: 'faq-preg-2',
    category: 'pregnancy',
    question: 'When Should I have my Ultrasound scans done?',
    answer:
      'During pregnancy, ultrasound scans are usually scheduled around 6–9 weeks to confirm the pregnancy, 11–14 weeks for the first-trimester screening, and 18–22 weeks for the detailed anatomy scan. Additional scans may be recommended to monitor your baby’s growth or address specific concerns. Proper pregnancy care includes following your doctor’s recommended ultrasound schedule for your health and your baby’s well-being.',
  },

  // 2. Fertility & Conception
  {
    id: 'faq-fert-1',
    category: 'fertility',
    question: 'When Should a couple seek help for getting Pregnant?',
    answer:
      'Couples should consider seeking medical advice if pregnancy hasn’t occurred after 12 months of regular, unprotected intercourse. Women aged 35 or older should consult a specialist after six months. Seek help sooner if you have irregular periods, known reproductive conditions, or previous fertility concerns. Early evaluation helps identify causes and explore suitable options.',
  },
  {
    id: 'faq-fert-2',
    category: 'fertility',
    question: 'Does having PCOS mean I cannot get pregnant naturally?',
    answer:
      'No, having PCOS does not mean you cannot get pregnant naturally. Many women with PCOS conceive successfully with appropriate lifestyle changes, cycle monitoring, and medical guidance. Since PCOS can affect ovulation, consult a gynaecologist if your periods are irregular or you’re struggling to conceive. Treatment depends on your individual health needs.',
  },

  // 3. Period & Hormones (General Gynecology)
  {
    id: 'faq-gyn-1',
    category: 'gynecology',
    question: 'Are very painful period cramps normal?',
    answer:
      'Mild period cramps are common, but severe pain that disrupts daily activities is not something you should ignore. It may indicate conditions such as endometriosis, fibroids, or adenomyosis. Consult a gynaecologist if your cramps are intense, worsening, or accompanied by heavy bleeding, dizziness, or persistent pelvic pain. Proper pregnancy care and timely medical evaluation can help address reproductive health concerns and guide appropriate treatment.',
  },

  // 4. Surgeries & Keyhole (Laparoscopy & Hysteroscopy)
  {
    id: 'faq-surg-1',
    category: 'surgery',
    question: 'What is the recovery time after Laparoscopic (Keyhole) surgery?',
    answer:
      'Recovery after laparoscopic (keyhole) surgery usually takes one to two weeks, depending on the procedure and your overall health. You may experience mild pain, bloating, or fatigue initially. Follow your doctor\'s instructions, avoid heavy lifting, and attend follow-up appointments. More complex surgeries may require additional recovery time and rest.',
  },
];

export default faqsData;
