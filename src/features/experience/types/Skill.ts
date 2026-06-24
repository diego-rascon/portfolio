import type { skillsList } from "@/features/experience/index";

export interface Skill {
  name: string;
  backgroundColor: string;
  textColor: string;
}

export type SkillValue = (typeof skillsList)[keyof typeof skillsList];
