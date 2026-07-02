import type { Skills } from "@/types/Skill";

export interface Project {
  title: string;
  createdAt?: string;
  description: string;
  year: number;
  url: string;
  image: string;
  skills: Skills[];
}
