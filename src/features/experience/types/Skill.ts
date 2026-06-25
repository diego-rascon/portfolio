import type { skillsList } from "@/features/experience/data/skillsList";

export interface Skill {
  name: string;
  backgroundColor: string;
  textColor: string;
}

export type SkillValue = (typeof skillsList)[keyof typeof skillsList];
