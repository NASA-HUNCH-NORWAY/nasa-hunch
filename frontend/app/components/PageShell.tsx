import { Footer } from "@/app/components/Footer/Footer";
import { Navbar } from "@/app/components/Navbar";
import { StructuredData } from "@/app/components/StructuredData";
import { getHeroSection } from "@/sanity/fetch";

type PageShellProps = {
  children: React.ReactNode;
  /** Ekstra schema.org-objekter for siden, for eksempel brødsmulesti. */
  schema?: Record<string, unknown>[];
};

/** Navbar og footer rundt innholdet på undersidene. */
export async function PageShell({ children, schema }: PageShellProps) {
  const hero = await getHeroSection();

  return (
    <main className="bg-background text-foreground">
      <StructuredData extra={schema} />
      <Navbar data={hero} />
      {children}
      <Footer />
    </main>
  );
}
