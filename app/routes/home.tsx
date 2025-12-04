import HeroSection from "~/components/pages/home/Hero";
import ServicesSection from "~/components/pages/home/Services";
import VideoSection from "~/components/pages/home/Video";
import type { Route } from "./+types/home";
import { ConsultationSection } from "~/components/pages/home/Consultation";
import MovingTextSection from "~/components/pages/home/MovingText";
import { BenefitsSection } from "~/components/pages/home/Benefits";
import { SolutionsSection } from "~/components/pages/home/Solutions";

export function meta({}: Route.MetaArgs) {
  const title =
    "Royal Decorators | Епоксидни настилки, декоративни покрития и мазилки";
  const description =
    "Royal Decorators проектира и изпълнява епоксидни настилки, декоративни мазилки, хидроизолация и интериорно боядисване за дом, офис и индустриални обекти в България.";
  const url = "https://https://royal-decorators.com";

  return [
    // Title + meta description
    { title },
    { name: "description", content: description },

    // Basic SEO meta
    { name: "robots", content: "index,follow" },
    { name: "author", content: "Royal Decorators" },

    // // Open Graph за Facebook / Viber / Messenger
    // { property: "og:title", content: title },
    // { property: "og:description", content: description },
    // { property: "og:type", content: "website" },
    // { property: "og:url", content: url },
    // { property: "og:image", content: Image },

    // Canonical URL
    { tagName: "link", rel: "canonical", href: url },
  ];
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ConsultationSection />
      <MovingTextSection />
      <VideoSection />
      <SolutionsSection />
      <ServicesSection />
      <BenefitsSection />
    </main>
  );
}
