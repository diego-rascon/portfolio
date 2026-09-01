import type { SvgComponent } from "astro/types";

import type { Technology } from "@/features/skills/types/Technology";

export interface SkillCategory {
  title: string;
  Icon: SvgComponent;
  description?: string;
  technologies: Technology[];
  className?: string;
}
