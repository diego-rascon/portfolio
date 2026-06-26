import type { skillsList } from "@/data/skillsList";

export interface Skill {
  name: string;
  backgroundColor: string;
  textColor: string;
}

export type SkillValue = (typeof skillsList)[keyof typeof skillsList];
