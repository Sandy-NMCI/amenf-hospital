import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/hospital-services.jpg";
import lab1 from "../assets/lab1.jpg";
import lab2 from "../assets/lab2.jpg";
import lab3 from "../assets/lab3.jpg";
import lab4 from "../assets/lab4.jpg";
import lab5 from "../assets/lab5.jpg";
import lab6 from "../assets/lab6.jpg";
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";
import doctor5 from "../assets/doctor5.jpg";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";
import proDetail1 from "../assets/program-details4.jpg";
import proDetail2 from "../assets/program-details2.jpg";
import proDetail3 from "../assets/program-details3.jpg";
import hospital from "../assets/hospital.png";
import stethoscope from "../assets/stethoscope.png";
import heart from "../assets/heart.png";
import hospital2 from "../assets/hospital2.png";
import location from "../assets/location.png";
import medicine from "../assets/medicine.png";
export const cardDetails = [
  {
    id: 1,
    title: "Title 1",
    img: f1,
  },
  {
    id: 2,
    title: "Title 2",
    img: f2,
  },
  {
    id: 3,
    title: "Title 3",
    img: f3,
  },
  {
    id: 4,
    title: "Title 4",
    img: lab1,
  },
  {
    id: 5,
    title: "Title 5",
    img: lab2,
  },
  {
    id: 6,
    title: "Title 6",
    img: lab3,
  },
  {
    id: 7,
    title: "Title 7",
    img: lab4,
  },
  {
    id: 8,
    title: "Title 8",
    img: lab5,
  },
  {
    id: 9,
    title: "Title 9",
    img: lab6,
  },
];

export const partnersDetails = [
  {
    id: 1,
    title: "Title 1",
    img: client1,
  },
  {
    id: 2,
    title: "Title 2",
    img: client2,
  },
  {
    id: 3,
    title: "Title 3",
    img: client3,
  },
  {
    id: 4,
    title: "Title 4",
    img: client4,
  },
  {
    id: 1,
    title: "Title 1",
    img: client1,
  },
  {
    id: 2,
    title: "Title 2",
    img: client2,
  },
  {
    id: 3,
    title: "Title 3",
    img: client3,
  },
  {
    id: 4,
    title: "Title 4",
    img: client4,
  },
];
export const clinicsDetails = [
  {
    id: 1,
    title: "Top",
    title2: "Hospitals",
    img: hospital,
    desc: "India’s Largest Private Hospital Network, Delivering Advanced Healthcare.",
  },
  {
    id: 2,
    title: "13000+",
    title2: "Doctors",
    img: stethoscope,
    desc: "Leading Medical Experts Providing Exceptional Care Across India.",
  },
  {
    id: 3,
    title: "2,300+",
    title2: "Diagnostic centers",
    img: heart,
    desc: "Precision Diagnostics Accessible Across India.",
  },
  {
    id: 4,
    title: "700+",
    title2: "Clinics",
    img: hospital2,
    desc: "Largest Clinic Network in India, Bringing Quality Care Closer to You.",
  },
  {
    id: 4,
    title: "10,000+",
    title2: "Pincodes",
    img: location,
    desc: "Expanding Healthcare Services Across India’s Pin Codes.",
  },
  {
    id: 4,
    title: "68,00+",
    title2: "Pharmacies",
    img: medicine,
    desc: "Ensuring Seamless Access to Medicines Across the Nation.",
  },
];

export const mockData = {
  foundation: {
    name: "African Medical Education Network Foundation",
    acronym: "AMENF",
    established: "2021",
    mission:
      "To address the severe shortage of healthcare professionals in sub-Saharan Africa by providing tuition-free medical education through innovative curriculum integrating primary care, community medicine, telemedicine, and AI diagnostics.",
    vision:
      "To prevent Africa from becoming a medical wasteland and safeguard global health through expanded medical education.",
  },

  statistics: {
    currentDoctors: "2 per 10,000 people",
    deficit: "2.4 million doctors",
    mauritiusDoctors: "27.13 per 10,000 people",
    mauritiusNurses: "35.5 per 10,000 people",
    healthExpenditure: "5.8% of GDP",
  },

  programs: {
    scholarships: {
      annual: 3000,
      total: 15000,
      duration: "5 years",
      alliedHealth: 125,
      countries: 45,
    },
    training: {
      doctors: 500,
      focus: "Primary Healthcare",
      serviceCommitment: "2 years in underserved areas",
    },
  },

  services: [
    {
      id: 1,
      title: "Tuition-Free Medical Education",
      description:
        "Comprehensive medical education program with innovative curriculum integrating primary care, telemedicine, and AI diagnostics.",
      icon: "GraduationCap",
    },
    {
      id: 2,
      title: "Scholarship Programs",
      description:
        "Annual scholarships for medical students and allied health professionals across sub-Saharan Africa.",
      icon: "Award",
    },
    {
      id: 3,
      title: "Clinical Training",
      description:
        "Comprehensive clinical training plan within Mauritius and beyond, emphasizing practical healthcare delivery.",
      icon: "Stethoscope",
    },
    {
      id: 4,
      title: "Telemedicine & AI Diagnostics",
      description:
        "Advanced training in virtual care, nursing informatics, and device technology with focus on health apps and data analytics.",
      icon: "Monitor",
    },
    {
      id: 5,
      title: "Community Medicine",
      description:
        "Specialized training in community-based healthcare delivery and primary care for underserved populations.",
      icon: "Users",
    },
    {
      id: 6,
      title: "Research & Development",
      description:
        "Development of healthcare solutions tailored for African healthcare challenges and global health impact.",
      icon: "FlaskConical",
    },
  ],

  aboutContent: {
    transformingHealthcare:
      "Transforming Healthcare in Sub-Saharan Africa: The African Medical Education Network Foundation (AMENF), registered in 2021, is built on a unique model designed to expand human resources in the medical sector in sub-Saharan Africa.",
    challenge:
      "Sub-Saharan Africa faces a severe shortage of healthcare professionals, a crisis that affects not only the continent but also global health. With just two medical doctors per 10,000 people, official estimates indicate a current deficit of 2.4 million doctors—a ticking time bomb for the world.",
    solution:
      "AMENF's mission is to address this shortage by offering tuition-free medical education through an innovative curriculum integrating primary care, community medicine, telemedicine, and AI diagnostics.",
    mauritiusAdvantage:
      "Mauritius was chosen for its sub-Saharan African identity, democratic stability, and peaceful environment. It boasts 27.13 doctors per 10,000 people—the highest in Africa—compared to the regional average of 2.",
    sustainability:
      "We have developed an economic rationale and a strategic plan to ensure the project's financial sustainability and autonomy. Establishing a medical facility in Mauritius entails significantly lower costs compared to similar ventures in the United States and Europe.",
    quote:
      "Education is the most potent weapon with which we can reshape the world. - Nelson Mandela",
  },

  contact: {
    address: "Medical Education Complex, Mauritius",
    phone: "+230 XXX XXXX",
    email: "info@amenf.com",
    website: "www.amenf.com",
    socialMedia: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
};

export const aboutData = {
  title: "About AMENF",
  subtitle: "African Medical Education Network Foundation",
  description:
    "The African Medical Education Network Foundation (AMENF), registered in 2021, is built on a unique model designed to expand human resources in the medical sector in sub-Saharan Africa.",
  mission:
    "To address the severe shortage of healthcare professionals in sub-Saharan Africa by providing tuition-free medical education through innovative curriculum integrating primary care, community medicine, telemedicine, and AI diagnostics.",
  keyPoints: [
    "Sub-Saharan Africa has just 2 medical doctors per 10,000 people",
    "Current deficit of 2.4 million doctors in the region",
    "Tuition-free medical education with innovative curriculum",
    "Integration of telemedicine and AI diagnostics",
    "Emphasis on virtual care and nursing informatics",
  ],
};

export const mauritiusData = {
  title: "Why Mauritius?",
  description:
    "Mauritius was chosen for its sub-Saharan African identity, democratic stability, and peaceful environment.",
  stats: [
    {
      value: "27.13",
      label: "Doctors per 10,000 people",
      note: "Highest in Africa (regional average: 2)",
    },
    {
      value: "35.5",
      label: "Nurses per 10,000 people",
      note: "Well above sub-Saharan benchmark of <20",
    },
    {
      value: "5.8%",
      label: "Health expenditure of GDP",
      note: "Exceeds WHO's recommended 5%",
    },
  ],
  advantages: [
    "Sub-Saharan African identity",
    "Democratic stability",
    "Peaceful environment",
    "Lower establishment costs vs US/Europe",
    "Excellent healthcare infrastructure",
    "Strategic location for Pan-African reach",
  ],
};

export const doctors = [
  {
    name: "Dr. Sarah",
    specialty: "Chief of Cardiology",
    experience: "15+ years",
    image: doctor1,
    rating: 4.9,
    qualifications: "MD, FACC, Board Certified",
    email: "sarah@amenf.com",
  },
  {
    name: "Dr. Naresh",
    specialty: "Emergency Medicine",
    experience: "12+ years",
    image: doctor2,
    rating: 4.8,
    qualifications: "MD, PhD, Board Certified",
    email: "naresh@amenf.com",
  },
  {
    name: "Dr. Anandi Gopal",
    specialty: "Neurologist",
    experience: "10+ years",
    image: doctor3,
    rating: 4.9,
    qualifications: "MD, PhD, Board Certified",
    email: "anandi@amenf.com",
  },
  {
    name: "Dr. Natalie",
    specialty: "General Surgery",
    experience: "10+ years",
    image: doctor5,
    rating: 4.9,
    qualifications: "MD, PhD, Board Certified",
    email: "natalie@amenf.com",
  },
];

// export const programHighlights = [
//   {
//     icon: "GraduationCap",
//     title: "Medical Scholarships",
//     value: 3000,
//     description: "Annual scholarships for medical students",
//     color: "from-teal-500 to-cyan-600",
//   },
//   {
//     icon: "Heart",
//     title: "Allied Health",
//     value: 125,
//     description: "Scholarships in allied health fields ........",
//     color: "from-cyan-500 to-blue-600",
//   },
//   {
//     icon: "Users",
//     title: "Primary Care Training",
//     value: 500,
//     description: "Doctors trained annually in primary healthcare",
//     color: "from-blue-500 to-indigo-600",
//   },
//   {
//     icon: "Globe",
//     title: "Global Reach",
//     value: 45 + "+",
//     description: "Countries across sub-Saharan Africa .........",
//     color: "from-indigo-500 to-purple-600",
//   },
// ];

export const programsData = [
  {
    id: 1,
    title: "Medical Doctor Scholarships",
    description:
      "Full tuition-free medical education with innovative curriculum integrating primary care, community medicine, telemedicine, and AI diagnostics.",
    duration: "6 years",
    scholarships: "3,000 annually",
    commitment: "2 years service in underserved areas",
    features: [
      "Tuition-free education",
      "AI diagnostics training",
      "Telemedicine curriculum",
      "Community medicine focus",
      "Clinical training in Mauritius and beyond",
    ],
    image: proDetail1,
  },
  {
    id: 2,
    title: "Allied Health Programs",
    description:
      "Comprehensive training programs for nurses, midwives, and paramedics with emphasis on virtual care and nursing informatics.",
    duration: "3-4 years",
    scholarships: "125 annually",
    commitment: "2 years service in underserved areas",
    features: [
      "Nursing informatics",
      "Virtual care training",
      "Device technology",
      "Health apps development",
      "Data analytics utilization",
    ],
    image: proDetail2,
  },
  {
    id: 3,
    title: "Primary Healthcare Training",
    description:
      "Specialized training for doctors in primary healthcare delivery across multiple countries in the region.",
    duration: "1-2 years",
    capacity: "500 doctors annually",
    commitment: "Service in underserved communities",
    features: [
      "Primary care specialization",
      "Community health focus",
      "Rural medicine training",
      "Public health emphasis",
      "Preventive care methods",
    ],
    image: proDetail3,
  },
];
export const requirements = [
  "Be a citizen of a sub-Saharan African country",
  "Demonstrate academic excellence and leadership potential",
  "Commit to serving underserved communities for 2 years post-graduation",
  "Pass comprehensive entrance examinations",
  "Provide proof of English proficiency",
  "Submit letters of recommendation",
];

export const doctorsDetails = [
  {
    id: 1,
    title: "Expertise & Experience",
    description:
      "Each of our doctors is a leader in their field, trained in advanced medical practices and committed to continuous learning.",
  },
  {
    id: 2,
    title: "Compassionate Care",
    description:
      "Beyond treatment, our doctors listen, guide, and support patients with empathy.",
  },
  {
    id: 3,
    title: "Patient-Centered Approach",
    description:
      "Every patient is unique, and our doctors create personalized care plans tailored to individual needs.",
  },
  {
    id: 4,
    title: "Commitment to Excellence",
    description:
      "From preventive care to complex procedures, our doctors strive to deliver the highest standards of healthcare.",
  },
];

export const faqs = [
  {
    question: "What is the difference between lease and licence agreement?",
    answer:
      "A Lease Agreement gives a party exclusive possession of hospital space for a fixed term and creates a legal interest in the property. It is usually long-term and harder to terminate, with rent paid regularly. \n A Licence Agreement only gives permission to use hospital space or facilities without transferring ownership or interest. It is usually short-term, easier to revoke, and a licence fee is paid instead of rent.",
  },
  {
    question: "How ownership of property is acquired by a person?",
    answer:
      "Ownership of a property can be acquired through various legal methods such as purchasing it via a registered sale deed, receiving it as a gift through a registered gift deed, inheriting it under a Will or succession laws, getting it allotted or auctioned by the government, or by transfer through a trust, society or company. Proper registration and compliance with land-use and healthcare regulations are essential to make the ownership valid.",
  },
  {
    question: "Can a registered will be rectified or changed?",
    answer:
      "Yes. A person can change or cancel their registered Will at any time during their lifetime, as long as they are mentally competent. This is done by making a new Will or by executing a Codicil (an official amendment) and getting it registered. The latest valid Will automatically overrides earlier Wills.",
  },
  {
    question:
      "Is the certified copy of a registered will available to anybody?",
    answer:
      "No. A certified copy of a registered Will is not available to the public during the testator’s lifetime. Only after the testator’s death, and upon submission of the death certificate, can legal heirs or interested parties apply to the Sub-Registrar’s office to obtain a certified copy.",
  },
  {
    question: "What are the hospital’s visiting hours?",
    answer:
      "Visiting hours are from 10:00 AM to 12:00 PM and 5:00 PM to 7:00 PM. (Subject to ward rules and patient condition.)",
  },

  {
    question: "What documents should I bring for admission?",
    answer:
      "Please bring a valid ID proof, medical history records, doctor’s prescription, and insurance details (if applicable).",
  },
];

export const features = [
  {
    icon: "FaRegHospital",
    title: "Great Infrastructure",
    desc: "Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.",
  },
  {
    icon: "Ambulance",
    title: "24/7 Ambulance Services",
    desc: "Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.",
  },
  {
    icon: "Hospital",
    title: "Cutting Edge Technology",
    desc: "Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.",
  },
  {
    icon: "BriefcaseMedical",
    title: "Advanced Medical Facilities",
    desc: "Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.",
  },
  {
    icon: "Stethoscope",
    title: "Excellent Ancillary Services",
    desc: "Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.",
  },
  {
    icon: "Accessibility",
    title: "Social Services",
    desc: "Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.",
  },
];
