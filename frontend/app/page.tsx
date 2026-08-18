import { BuildForNasa } from "@/app/components/BuildForNasa/BuildForNasa";
import { Footer } from "@/app/components/Footer/Footer";
import { Navbar } from "@/app/components/Navbar";
import { Sponsors } from "@/app/components/Sponsors/Sponsors";
import { CardsSection } from "@/app/sections/CardsSection";
import { HeroSection } from "@/app/sections/HeroSection";
import { StatsSection } from "@/app/sections/StatsSection/StatsSection";
import { getHomePage } from "@/sanity/fetch";
import { CarouselSection } from "@/app/sections/CarouselSection/CarouselSection";

export default async function Home() {
  const homePage = await getHomePage();

  return (
    <main className="bg-background text-foreground">
      <Navbar data={homePage.hero} />
      <HeroSection data={homePage.hero} />
      <BuildForNasa />
      <StatsSection data={homePage.stats} />
      <CardsSection data={homePage.cards} />
      <Sponsors />
      <CarouselSection data={homePage.carousel} />
      <Footer data={homePage.hero} />
    </main>
  );
}
