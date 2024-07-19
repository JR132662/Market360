import { Paintbrush } from "lucide-react";
import { Hammer } from "lucide-react";
import { House } from "lucide-react";
import { Waves } from "lucide-react";
import { Key } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Services", href: "/Services" },
  { label: "Contact", href: "/Contact" },
];

export const testimonials = [
  {
    user: "Dennis Rodham",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the cleaning services provided upon moving into our new law firm office. The team was responsive, professional, and delivered results beyond my expectations, leaving our new space spotless and ready for business.",
  },
  {
    user: "Suhem Lopez",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Working with this stucco repair company was a pleasure. Their attention to detail and commitment to excellence in repairing cracks and damages are commendable. I would highly recommend them to anyone looking for top-notch stucco repair services.",
  },
  {
    user: "David Aguiar",
    company: "Quantum Innovations",
    image: user3,
    text: "I used Market360 for our office. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch cleaning service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "I am extremely satisfied with the painting services provided. The team was responsive, professional, and delivered a beautifully painted office beyond my expectations.",
  },
  {
    user: "Michael Lyon",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results. We hired the for pressure washing our business and the results were outstanding",
  },
  {
    user: "Emily Rodriguez",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our Airbnb was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future. Theyre always on time and clean so my next rental is ready",
  },
];

export const features = [
  {
    icon: <Paintbrush />,
    text: "Exterior Painting Services",
    description:
      "Transform the exterior of your property with our professional exterior painting services. At Market360 Solutions LLC, we use high-quality paints and materials to ensure a long-lasting and beautiful finish ",
  },
  {
    icon: <Paintbrush />,
    text: "Interior Painting Services",
    description:
      "Refresh and renew the interior of your home or business with Market 360 Solutions LLC's expert interior painting services. Our team is skilled in working with various surfaces and can handle any project, from a single room to an entire building.",
  },
  {
    icon: <Hammer />,
    text: "Stucco Repair Services",
    description:
      "Maintain the beauty and integrity of your property with our professional stucco repair services. Cracks, chips, and other damage to your stucco can lead to more significant issues if not addressed promptly.",
  },
  {
    icon: <House />,
    text: "Professional Cleaning Services: Move-In/Move-Out",
    description:
      "Moving can be a stressful time, but Market 360 Solutions LLC is here to help with our comprehensive move-in and move-out cleaning services. We provide thorough cleaning to ensure your property is spotless and ready for the next occupant.",
  },
  {
    icon: <Waves />,
    text: "Pressure Washing Services",
    description:
      "Keep your property looking its best with Market 360 Solutions LLC's professional pressure washing services. Our team uses advanced equipment to remove dirt, grime, mold, and stains from various surfaces, including driveways, sidewalks, decks, and building exteriors.",
  },
  {
    icon: <Key />,
    text: "Short-Term Rental Cleaning",
    description:
      "Refresh and renew the interior of your home or business with Market 360 Solutions LLC's expert interior painting services. Our team is skilled in working with various surfaces and can handle any project, from a single room to an entire building.",
  },
];

export const checklistItems = [
  {
    title: "Fully Trained Team",
    description:
      "Our team receives training on the best sanitation practices monthly, ensuring the best quality deliveries",
  },
  {
    title: "Background Checked Staff",
    description:
      "We run a background check on all of our employees to ensure we have great citizens on our staff",
  },
  {
    title: "Speedy Processes, Immaculate Delivery ",
    description:
      "Our team works diligently to ensure we deliver high quality services within a timely manner",
  },
  {
    title: "Availability and Reliability personified",
    description:
      "Our management team is trained to stay reliable and available around the clock for our service partners",
  },
];

export const pricingOptions = [
  {
    title: "Short Term Rental Cleaning",
    price: "$0",
    features: [
      "Trained on call Staff",
      "Attention to detail",
      "Bilingual Staff",
      "Check In/Check out notification",
    ],
  },
  {
    title: "Commercial Office Cleaning",
    price: "$10",
    features: [
      "Trained on call Staff",
      "Detailed Office Cleaning",
      "Bilingual Staff",
      "Check In/Check out notification",
    ],
  },
  {
    title: "Move In/Move Out Cleaning",
    price: "$200",
    features: [
      "Trained on call staff",
      "Detailed Moving Cleaning",
      "Bilingual Staff",
      "Check In/Check out notification",
    ],
  },
];

export const pricingOptions2 = [
  {
    title: "Stucco Repair Services",
    price: "$0",
    features: [
      "Trained on call Staff",
      "Excellent Craftmanship",
      "Bilingual Staff",
      "Check In/Check out notification",
    ],
  },
  {
    title: "Pressure Washing Services",
    price: "$10",
    features: [
      "Trained on call Staff",
      "Industry Standard Equipment",
      "Bilingual Staff",
      "Check In/Check out notification",
    ],
  },
  {
    title: "Commercial Painting Servies",
    price: "$200",
    features: [
      "Trained on call staff",
      "Detailed Painting Services",
      "Bilingual Staff",
      "Check In/Check out notification",
    ],
  },
];


