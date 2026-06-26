import { skills } from "@/data/skills";
import type { Experience } from "@/features/experience/types/Experience";

export const experienceList: Experience[] = [
  {
    company: "Paystand",
    companyUrl: "https://www.paystand.com",
    location: "Hermosillo, Son.",
    title: "Jr. Full-stack Engineer",
    startDate: new Date(2025, 4),
    endDate: new Date(2026, 3),
    description:
      "Built a B2B accounts payable platform (Next.js, TypeScript) with a Python/Frappe + MariaDB backend and complex ERP integrations that cut manual invoice processing time by 80%, and optimized an Elixir/Phoenix LiveView payment system to maintain sub-200 ms latency for 10,000+ concurrent users with fault-tolerant ERP workflows.",
    skills: [
      skills.nextjs,
      skills.python,
      skills.elixir,
      skills.mysql,
      skills.redis,
      skills.docker,
    ],
  },
  {
    company: "Zitheonsoft",
    companyUrl: "https://zitheonsoft.com/",
    title: "Jr. Front-end Engineer",
    startDate: new Date(2024, 4),
    endDate: new Date(2025, 4),
    description:
      "Built and optimized web and mobile applications — including a Next.js user manual app with Java/Spring microservices and Oracle schema tuning (70% faster queries), a React Native e-commerce UI rewrite with 120% rendering improvement, and core employee-app features that increased DAU engagement by 80% through streamlined workflows.",
    skills: [
      skills.reactNative,
      skills.nextjs,
      skills.spring,
      skills.oracleDatabse,
    ],
  },
] as const;
