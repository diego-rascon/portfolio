import SkillCategoryContainer from "@/features/skills/components/SkillCategoryContainer.astro";
import SkillsSection from "@/features/skills/components/SkillsSection.astro";
import TechnologiesList from "@/features/skills/components/TechnologiesList.astro";
import { backendList } from "@/features/skills/data/backendList";
import { frontendList } from "@/features/skills/data/frontendList";
import { languagesList } from "@/features/skills/data/languagesList";
import { toolsList } from "@/features/skills/data/toolsList";
import type { Technology } from "@/features/skills/types/Technology";

export {
  backendList,
  frontendList,
  languagesList,
  SkillCategoryContainer,
  SkillsSection,
  TechnologiesList,
  toolsList,
  type Technology,
};
