import { HeroSection } from "./components/landing/HeroSection";
import { WhatIDoSection } from "./components/landing/WhatIDoSection";
import { ExperienceSection } from "./components/landing/ExperienceSection";
import { CareerHighlightsSection } from "./components/landing/CareerHighlightsSection";
import { PortfolioGridSection } from "./components/landing/PortfolioGridSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatIDoSection />
      <ExperienceSection />
      <CareerHighlightsSection />
      <PortfolioGridSection />
    </main>
  );
}
