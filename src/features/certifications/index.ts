import CertificationItem from "@/features/certifications/components/CertificationItem.astro";
import CertificationsList from "@/features/certifications/components/CertificationsList.astro";
import CertificationsSection from "@/features/certifications/components/CertificationsSection.astro";
import { certificationsList } from "@/features/certifications/data/certificationsList";
import type { Certification } from "@/features/certifications/types/Certification";

export {
  CertificationItem,
  CertificationsList,
  certificationsList,
  CertificationsSection,
  type Certification,
};
