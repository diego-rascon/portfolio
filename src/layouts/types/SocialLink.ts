import type { SvgComponent } from "astro/types";

export interface SocialLink {
  Icon: SvgComponent;
  url: string;
  label: string;
}
