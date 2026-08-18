import { Footer } from "@/app/components/Footer/Footer";
import { Navbar } from "@/app/components/Navbar";
import { getHeroSection } from "@/sanity/fetch";

type PageShellProps = {
  children: React.ReactNode;
};

/** Navbar og footer rundt innholdet på undersidene. */
export async function PageShell({ children }: PageShellProps) {
  const hero = await getHeroSection();

  return (
    <main className="bg-background text-foreground">
      <Navbar data={hero} />
      {children}
      <Footer data={hero} />
    </main>
  );
}
