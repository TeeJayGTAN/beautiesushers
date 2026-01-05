
import { slugify } from "../utils/slugify";


const eventWorks = [
  {
    eventName: "9th Annual Middle East Water Week Conference Exhibition 2025",
    eventLocation: "Kempinski Al Othman Hotel, Alkobar",
    eventImage: "h1.jpeg",
    seoDescription:
      "Professional ushering and guest management services provided by Beauties Ushers for the 9th Annual Middle East Water Week Conference Exhibition at Kempinski Al Othman Hotel, Alkobar.",
  },
  {
    eventName: "The Solar Week 2023",
    eventLocation: "Raddison Blu Cairo, Egypt",
    eventImage: "h2.jpeg",
    seoDescription:
      "Beauties Ushers delivered expert ushering services and event coordination for The Solar Week 2023 held at Radisson Blu Cairo, Egypt.",
  },
  {
    eventName: "IDC CIO Summit 2024",
    eventLocation: "Safari Park Hotel & Casino, Nairobi",
    eventImage: "h3.jpeg",
    seoDescription:
      "Professional event ushers and on-ground guest coordination services by Beauties Ushers for the IDC CIO Summit 2024 at Safari Park Hotel & Casino, Nairobi.",
  },
  {
    eventName:
      "5th Edition Connected Africa Summit & 12 Edition Connected Banking Summit 2024",
    eventLocation: "Maslow Hotel Johannesburg, South Africa",
    eventImage: "h4.jpeg",
    seoDescription:
      "Beauties Ushers provided premium ushering and crowd control services for the Connected Africa and Connected Banking Summits 2024 in Johannesburg, South Africa.",
  },
  {
    eventName: "No Code Innovation Summit 2025",
    eventLocation: "Narcissus The Royal Hotel Riyadh, Saudi Arabia",
    eventImage: "h5.jpeg",
    seoDescription:
      "End-to-end professional ushering services by Beauties Ushers for the No Code Innovation Summit 2025 at Narcissus The Royal Hotel, Riyadh.",
  },
  {
    eventName: "Global Government Cloud Summit 2025",
    eventLocation: "Museum of the Future, Dubai",
    eventImage: "h6.jpeg",
    seoDescription:
      "Beauties Ushers delivered elite ushering and guest experience services for the Global Government Cloud Summit 2025 at the Museum of the Future, Dubai.",
  },
  {
    eventName: "Global Aeronautical Information Management Conference 2025",
    eventLocation: "Transcorp Hilton, Abuja",
    eventImage: "h7.jpeg",
    seoDescription:
      "Professional conference ushering and attendee management services by Beauties Ushers for the Global Aeronautical Information Management Conference 2025 in Abuja.",
  },
  {
    eventName: "India Nuclear Business Platform 2023",
    eventLocation: "Hilton, Mumbai",
    eventImage: "h8.jpeg",
    seoDescription:
      "Beauties Ushers provided professional ushering services and event support for the India Nuclear Business Platform 2023 held in Mumbai.",
  },
  {
    eventName: "African Bible Leadership initiative",
    eventLocation: "Naf conference center abuja",
    eventImage: "h9.jpeg",
    seoDescription:
      "Professional ushering and event coordination services by Beauties Ushers for the African Bible Leadership Initiative held in Abuja.",
  },
  {
    eventName:
      "48th AGM and 47th Scientific Conference of Ophthalmological Society of Nigeria",
    eventLocation: "Radisson Blu Lagos",
    eventImage: "h10.jpeg",
    seoDescription:
      "Beauties Ushers delivered professional ushering services for the Ophthalmological Society of Nigeria AGM and Scientific Conference at Radisson Blu Lagos.",
  },
  {
    eventName: "ACL'S Afri-Caribbean Investment Summit, 2025",
    eventLocation: "Transcorp Hilton, Abuja",
    eventImage: "h11.jpeg",
    seoDescription:
      "Premium ushering and guest reception services by Beauties Ushers for the Afri-Caribbean Investment Summit 2025 in Abuja.",
  },
  {
    eventName: "Regtech Africa Conference & Awards 2025",
    eventLocation: "Oriental Hotel, Lagos",
    eventImage: "h13.jpeg",
    seoDescription:
      "Beauties Ushers provided professional ushering, guest flow management, and protocol services for Regtech Africa Conference & Awards 2025 in Lagos.",
  },
  {
    eventName: "Africa Agric Equipment and Technology Expo (AAMETEX 2023)",
    eventLocation: "NICON Luxury, Abuja",
    eventImage: "h14.jpeg",
    seoDescription:
      "Professional event ushering services delivered by Beauties Ushers for the Africa Agric Equipment and Technology Expo (AAMETEX 2023) in Abuja.",
  },
  {
    eventName: "Water Africa and East Africa Building and Construction",
    eventLocation: "Serena Hotel, Kigali",
    eventImage: "h15.jpeg",
    seoDescription:
      "Beauties Ushers delivered professional ushering and guest management services for Water Africa and East Africa Building & Construction Expo in Kigali.",
  },
  {
    eventName: "World Milk Day 2025",
    eventLocation: "Nicon Luxury, Abuja",
    eventImage: "h16.jpeg",
    seoDescription:
      "Professional ushering and event coordination services by Beauties Ushers for World Milk Day 2025 celebration held in Abuja.",
  },
  {
    eventName:
      "International Exhibition of Pharmaceutical Medical & Healthcare Industry in Ghana 2022",
    eventLocation: "Accra International Conference Centre, Ghana",
    eventImage: "h17.jpeg",
    seoDescription:
      "Beauties Ushers provided expert ushering services for the International Pharmaceutical, Medical & Healthcare Exhibition held in Accra, Ghana.",
  },
  {
    eventName: "Nigeria Institute of Public Relations 2022 AGM & Citizen Summit",
    eventLocation: "BAT International Conference Center, Abuja",
    eventImage: "h18.jpeg",
    seoDescription:
      "Professional ushering and protocol services delivered by Beauties Ushers for the Nigeria Institute of Public Relations AGM and Citizen Summit 2022.",
  },
  {
    eventName: "Society of Actuaries (SOA) Regional Conference 2024",
    eventLocation: "Crown Plaza, Riyadh",
    eventImage: "h19.jpeg",
    seoDescription:
      "Beauties Ushers delivered high-level ushering and guest coordination services for the Society of Actuaries Regional Conference 2024 in Riyadh.",
  },
  {
    eventName: "African Hepatitis Summit 2023",
    eventLocation: "Nicon Luxury, Abuja",
    eventImage: "h20.jpeg",
    seoDescription:
      "Professional conference ushering and guest management services by Beauties Ushers for the African Hepatitis Summit 2023 held in Abuja.",
  },
];



export const slugEventWorks = eventWorks.map((eventWork) => {
  return {
    ...eventWork,
    slug: slugify(eventWork.eventName),
  };
});