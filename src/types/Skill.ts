import type { skills } from "@/data/skills";

export interface Skill {
  name: string;
  backgroundColor: string;
  textColor: string;
}

export type Skills = (typeof skills)[keyof typeof skills];
