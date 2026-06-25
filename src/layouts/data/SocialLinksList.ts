import GitHubIcon from "@/layouts/assets/icons/github.svg";
import LinkedInIcon from "@/layouts/assets/icons/linkedin.svg";
import MailIcon from "@/layouts/assets/icons/mail.svg";
import type { SocialLink } from "@/layouts/types/SocialLink";

export const socialLinksList: SocialLink[] = [
  {
    Icon: MailIcon,
    url: "mailto:contact@drascon.com",
    label: "Send me and email...",
  },
  {
    Icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/diegorascon",
    label: "My LinkedIn page...",
  },
  {
    Icon: GitHubIcon,
    url: "https://github.com/diego-rascon",
    label: "My GitHub page...",
  },
] as const;
