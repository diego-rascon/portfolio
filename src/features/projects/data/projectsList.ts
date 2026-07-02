import type { Project } from "@/features/projects/types/Project";
import { skills } from "@/data/skills";

export const projectsList: Project[] = [
  {
    title: "Network Portal",
    description:
      "A secure, multi-tenant B2B platform for enterprise clients to manage invoices, track transactions, and configure payment methods. Integrated with ERPs to automate workflows and cut manual processing times by 80%.",
    createdAt: "Paystand",
    year: 2025,
    url: "https://company.paystand.app/en/signin",
    image: "network-portal",
    skills: [
      skills.nextjs,
      skills.redis,
      skills.python,
      skills.mysql,
      skills.aws,
      skills.tailwindcss,
      skills.shadcn,
    ],
  },
  {
    title: "Teacher Training System",
    description:
      "A full-stack training management platform built from scratch to automate professional development tracking for 300+ users. Features high-fidelity Figma prototypes and clean database schemas to streamline compliance.",
    createdAt: "ITESCA",
    year: 2025,
    url: "https://github.com/fungirox/capacitacion-docente",
    image: "itesca",
    skills: [skills.php, skills.jQuery, skills.sqlServer],
  },
  {
    title: "Rivera Gas",
    description:
      "A B2C e-commerce platform for scheduling fuel deliveries and locating physical service stations. Includes a complete UI rewrite that improved mobile rendering performance by 120%.",
    createdAt: "Zitheonsoft",
    year: 2024,
    url: "https://apps.apple.com/mx/app/rivera-gas-clientes/id6746421348",
    image: "rivera-gas",
    skills: [skills.spring, skills.reactNative, skills.oracleDatabse],
  },
  {
    title: "Panther Games",
    description:
      "A modern desktop POS and inventory management system that replaced 100% manual tracking with instant digital lookups. Features an intuitive, multi-user interface with real-time data synchronization.",
    createdAt: "ITESCA",
    year: 2023,
    url: "https://github.com/diego-rascon/panther-games",
    image: "panther-games",
    skills: [
      skills.svelte,
      skills.tauri,
      skills.supabase,
      skills.postgresql,
      skills.tailwindcss,
    ],
  },
];
