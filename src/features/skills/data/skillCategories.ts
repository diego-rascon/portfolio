import BotIcon from "@/features/skills/assets/icons/bot.svg";
import CodeIcon from "@/features/skills/assets/icons/code.svg";
import InfrastructureIcon from "@/features/skills/assets/icons/infrastructure.svg";
import LayoutIcon from "@/features/skills/assets/icons/layout.svg";
import ServerIcon from "@/features/skills/assets/icons/server.svg";
import { aiToolsList } from "@/features/skills/data/aiToolsList";
import { backendList } from "@/features/skills/data/backendList";
import { frontendList } from "@/features/skills/data/frontendList";
import { languagesList } from "@/features/skills/data/languagesList";
import { toolsList } from "@/features/skills/data/toolsList";
import type { SkillCategory } from "@/features/skills/types/SkillCategory";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    Icon: CodeIcon,
    technologies: languagesList,
    className: "md:col-span-2",
  },
  {
    title: "Frontend and mobile",
    Icon: LayoutIcon,
    description:
      "Crafting polished, accessible, and responsive interfaces, from pixel-perfect web UI to native-feeling cross-platform apps.",
    technologies: frontendList,
  },
  {
    title: "Backend and infrastructure",
    Icon: ServerIcon,
    description:
      "Designing scalable, fault-tolerant services built to hold up under real production load.",
    technologies: backendList,
  },
  {
    title: "AI-augmented engineering",
    Icon: BotIcon,
    description:
      "Pairing with AI coding agents to move faster on implementation while staying deliberate about architecture and quality.",
    technologies: aiToolsList,
  },
  {
    title: "Tools and infrastructure",
    Icon: InfrastructureIcon,
    description:
      "Shipping reliably and scaling with confidence, from containerized deployments to version-controlled collaboration across teams.",
    technologies: toolsList,
  },
];
