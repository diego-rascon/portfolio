import type { SocialLink } from "@/layouts/types/SocialLink";

export const socialLinksList: SocialLink[] = [
  {
    icon: "mail",
    url: "mailto:contact@drascon.com",
    label: "Send me and email...",
  },
  {
    icon: "linkedin",
    url: "https://www.linkedin.com/in/diegorascon",
    label: "My LinkedIn page...",
  },
  {
    icon: "github",
    url: "https://github.com/diego-rascon",
    label: "My GitHub page...",
  },
] as const;
