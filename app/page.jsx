import ClientVoices from "@/components/home/ClientVoices";
import FeaturesBento from "@/components/home/FeaturesBento";
import HeroSlider from "@/components/home/HeroSlider";
import ImpactSection from "@/components/home/ImpactSection";
import JournalSection from "@/components/home/JournalSection";
import ServicesScrollSection from "@/components/home/ServicesScrollSection";

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <FeaturesBento />
      <ServicesScrollSection />
      <ImpactSection />
      <ClientVoices />
      <JournalSection />
    </main>
  );
}
