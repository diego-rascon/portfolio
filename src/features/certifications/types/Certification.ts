import type { SvgComponent } from "astro/types";

export interface Certification {
  url: string;
  title: string;
  description: string;
  Icon: SvgComponent;
}
