import NextjsIcon from "@/features/skills/assets/icons/nextjs.svg";
import ReactIcon from "@/features/skills/assets/icons/react.svg";
import SvelteIcon from "@/features/skills/assets/icons/svelte.svg";
import type { Technology } from "@/features/skills/types/Technology";

export const frontendList: Technology[] = [
  {
    name: "React",
    Icon: ReactIcon,
  },
  {
    name: "Next.js",
    Icon: NextjsIcon,
  },
  {
    name: "Svelte",
    Icon: SvelteIcon,
  },
];
