import EfSetIcon from "@/features/certifications/assets/icons/ef-set-logo.svg";
import UdemyIcon from "@/features/certifications/assets/icons/udemy-logo.svg";
import type { Certification } from "@/features/certifications/types/Certification";

export const certificationsList: Certification[] = [
  {
    url: "https://cert.efset.org/en/qjD8hQ",
    title: "EF SET English Text",
    description:
      "The achieved level is 67/100 on the EF SET score scale and C1 Advanced according to the Common European Framework of Reference (CEFR).",
    Icon: EfSetIcon,
  },
  {
    url: "https://www.udemy.com/certificate/UC-7ddbdafd-38fa-4bbe-85b6-0eef1c147074/",
    title: "React & Spring Boot: Building a Full Stack Web App",
    description:
      "Build Full Stack web applications with React 18 (Frontend) and Spring Boot 3 (Backend) using RESTful APIs, JPA, JWT, Hooks, Redux, and AWS.",
    Icon: UdemyIcon,
  },
  {
    url: "https://www.udemy.com/certificate/UC-3b46cb53-18b0-4cb6-92cf-64970295d47c/",
    title: "React Native - The Practical Guide",
    description:
      "Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux.",
    Icon: UdemyIcon,
  },
];
