import type { Skills } from "@/types/Skill";

export interface Experience {
  company: string;
  companyUrl: string;
  location?: string;
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  skills: Skills[];
}
