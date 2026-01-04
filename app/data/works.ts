
import { slugify } from "../utils/slugify";


const eventWorks = [
  {
    eventName: "9th Annual Middle East Water Week Conference Exhibition 2025",
    eventLocation: "Kempinski Al Othman Hotel, Alkobar",
    eventImage: "h1.jpeg",
  },
  {
    eventName: "The Solar Week 2023",
    eventLocation: "Raddison Blu Cairo, Egypt",
    eventImage: "h2.jpeg",
  },
  {
    eventName: "IDC CIO Summit 2024",
    eventLocation: "Safari Park Hotel & Casino, Nairobi",
    eventImage: "h3.jpeg",
  },
  {
    eventName:
      "5th Edition Connected Africa Summit & 12 Edition Connected Banking Summit 2024",
    eventLocation: "Maslow Hotel Johannesburg, South Africa",
    eventImage: "h4.jpeg",
  },
  {
    eventName: "No Code Innovation Summit 2025",
    eventLocation: "Narcissus The Royal Hotel Riyadh, Saudi Arabia",
    eventImage: "h5.jpeg",
  },
  {
    eventName: "Global Government Cloud Summit 2025",
    eventLocation: "Museum of the Future, Dubai",
    eventImage: "h6.jpeg",
  },
  {
    eventName: "Global Aeronautical Information Management Conference 2025",
    eventLocation: "Transcorp Hilton, Abuja",
    eventImage: "h7.jpeg",
  },
  {
    eventName: "India Nuclear Business Platform 2023",
    eventLocation: "Hilton, Mumbai",
    eventImage: "h8.jpeg",
  },
  {
    eventName: "African Bible Leadership initiative",
    eventLocation: "Naf conference center abuja",
    eventImage: "h9.jpeg",
  },
  {
    eventName:
      "48th agm and 47th Scientific Conference of OPHTHALMOLOGical society of Nigeria",
    eventLocation: "Radisson Blu Lagos",
    eventImage: "h10.jpeg",
  },
  {
    eventName: "ACL'S Afri-Caribbean Investment Summit, 2025",
    eventLocation: "Transcorp Hilton, Abuja",
    eventImage: "h11.jpeg",
  },
//   {
//     eventName: "Transcorp FoodBank",
//     eventImage: "h12.jpeg",
//   },
  {
    eventName: "Regtech Africa Conference & Awards 2025",
    eventLocation: "Oriental Hotel, Lagos",
    eventImage: "h13.jpeg",
  },
  {
    eventName: "Africa agric equipment and technology expo (AAMETEX 2023)",
    eventLocation: "NICON LUXURY ABUJA",
    eventImage: "h14.jpeg",
  },
  {
    eventName: "Water africa and East africa Building and Construction",
    eventLocation: "Serena hotel kigali",
    eventImage: "h15.jpeg",
  },
  {
    eventName: "World Milk Day 2025",
    eventLocation: "Nicon Luxury, Abuja",
    eventImage: "h16.jpeg",
  },
  {
    eventName:
      "International Exhibition of Pharmaceutical Medical & Healthcare Industry in Ghana 2022",
    eventLocation: "Accra International Conference Centre, Ghana",
    eventImage: "h17.jpeg",
  },
  {
    eventName: "Nigeria institute of public relations 2022 AGM/citizen summit",
    eventLocation: "BAT INTERNATIONAL CONFERENCE CENTER  ABUJA",
    eventImage: "h18.jpeg",
  },
  {
    eventName: "Society of Actuaries(SOA) Regional Conference 2024",
    eventLocation: "Crown Plaza, Riyadh",
    eventImage: "h19.jpeg",
  },
  {
    eventName: "African hepatitis summit 2023",
    eventLocation: "Nicon luxury abuja",
    eventImage: "h20.jpeg",
  },
];


export const slugEventWorks = eventWorks.map((eventWork) => {
  return {
    ...eventWork,
    slug: slugify(eventWork.eventName),
  };
});