import AppLayout from "@/layouts/components/AppLayout.astro";
import Footer from "@/layouts/components/footer/Footer.astro";
import SocialLinks from "@/layouts/components/footer/SocialLinks.astro";
import NavBar from "@/layouts/components/NavBar.astro";
import type { NavItem } from "@/layouts/types/NavItem";
import type { SocialLink } from "@/layouts/types/SocialLink";

export {
  AppLayout,
  Footer,
  NavBar,
  SocialLinks,
  type NavItem,
  type SocialLink,
};
