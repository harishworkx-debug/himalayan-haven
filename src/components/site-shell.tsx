import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, MessageCircle, Mountain, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { callUrl, navItems, property, whatsappUrl } from "@/lib/site-data";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className="fixed inset-x-0 top-0 z-40 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "var(--header)" : "transparent",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: scrolled ? "var(--header-border)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 8px 30px color-mix(in oklab, var(--foreground) 14%, transparent)" : "none",
        }}
      >
        <div
          className="mx-auto grid max-w-7xl items-center gap-4 px-5 transition-all duration-500 lg:px-8"
          style={{ height: scrolled ? "4.5rem" : "5.5rem", gridTemplateColumns: "minmax(0,1fr) auto" }}
        >
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Aashiyana Guest House home">
            <span
              className="grid shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/15 text-primary transition-all duration-500"
              style={{ width: scrolled ? "2.5rem" : "3rem", height: scrolled ? "2.5rem" : "3rem" }}
            >
              <Mountain className="size-5" strokeWidth={1.6} />
            </span>
            <span className="min-w-0">
              <strong
                className="block truncate font-display font-semibold leading-none text-header-foreground transition-all duration-500"
                style={{ fontSize: scrolled ? "1.15rem" : "1.4rem" }}
              >
                Aashiyana
              </strong>
              <span className="mt-1 block truncate text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-header-foreground/65">
                Guest House · Sangla
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-full px-3 py-2 text-sm font-medium text-header-foreground/75 transition-colors hover:text-header-foreground"
                  activeProps={{ className: "bg-header-foreground/10 text-header-foreground" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button asChild className="hidden h-11 rounded-full px-5 lg:inline-flex">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle /> Book on WhatsApp
              </a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full xl:hidden" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="border-l-border bg-background px-7 pt-16">
                <SheetTitle className="font-display text-2xl">Aashiyana</SheetTitle>
                <SheetDescription>Guest House · Sangla Valley</SheetDescription>
                <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.to}>
                      <Link to={item.to} className="border-b border-border py-4 font-display text-xl">
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <Button asChild className="mt-8 h-12 w-full rounded-full">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> Enquire on WhatsApp</a>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-footer pb-24 pt-16 text-footer-foreground md:pb-10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <Mountain className="mb-5 size-8 text-primary" strokeWidth={1.4} />
            <h2 className="max-w-md font-display text-3xl">A quiet address in the heart of the Himalayas.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-footer-muted">Clean rooms, genuine local hospitality and mountain views from a convenient Sangla location.</p>
          </div>
          <div>
            <p className="eyebrow text-footer-muted">Find your way</p>
            <div className="mt-5 flex flex-col gap-3">
              {navItems.slice(1).map((item) => <Link key={item.to} to={item.to} className="text-sm hover:text-primary">{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="eyebrow text-footer-muted">Contact</p>
            <address className="mt-5 text-sm not-italic leading-7 text-footer-muted">{property.address}</address>
            <a href={callUrl} className="mt-4 inline-flex items-center gap-2 font-medium hover:text-primary"><Phone className="size-4" />{property.phoneLabel}</a>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-footer-border px-5 pt-6 text-xs text-footer-muted sm:flex-row sm:justify-between lg:px-8">
          <span>© 2026 Aashiyana Guest House</span><span>Sangla · Baspa Valley · Himachal Pradesh</span>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-header-border bg-header/95 p-2 shadow-float backdrop-blur-xl md:hidden">
        <Button asChild variant="secondary" className="h-12 rounded-xl">
          <a href={callUrl}><Phone /> Call Now</a>
        </Button>
        <Button asChild className="h-12 rounded-xl">
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a>
        </Button>
      </div>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-7 right-7 z-40 hidden items-center gap-3 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-float transition-transform hover:-translate-y-1 md:flex">
        <MessageCircle className="size-5" /> Plan your stay <ArrowUpRight className="size-4" />
      </a>
    </div>
  );
}
