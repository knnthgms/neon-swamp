import Reveal from "./Reveal";
import Window from "./Window";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-20">
      <AboutSection />

      <Reveal>
        <section id="stack">
          <Window />
        </section>
      </Reveal>

      <Reveal delay={80}>
        <ContactSection />
      </Reveal>
    </div>
  );
}
