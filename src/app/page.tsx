import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import Header from "@/components/sodiata/Header";
import Hero from "@/components/sodiata/Hero";
import Services from "@/components/sodiata/Services";
import WhySodiata from "@/components/sodiata/WhySodiata";
import Stats from "@/components/sodiata/Stats";
import TechStack from "@/components/sodiata/TechStack";
import Testimonials from "@/components/sodiata/Testimonials";
import CTASection from "@/components/sodiata/CTASection";
import Footer from "@/components/sodiata/Footer";
import WhatsAppButton from "@/components/sodiata/WhatsAppButton";

export default function Home() {
  return (
    <ThemeProvider>
    <I18nProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Services />
          <WhySodiata />
          <Stats />
          <TechStack />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
    </ThemeProvider>
  );
}