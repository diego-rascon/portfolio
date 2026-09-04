import type { Skills } from "@/types/Skill";

export interface Project {
  title: string;
  company: string;
  description: string;
  url: string;
  image: string;
  skills: Skills[];
}
