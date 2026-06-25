import type { SkillValue } from "@/features/experience/types/Skill";

export interface Experience {
  company: string;
  companyUrl: string;
  location?: string;
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  skillsUsed: SkillValue[];
}
