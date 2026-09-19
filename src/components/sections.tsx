import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { images, property, whatsappUrl } from "@/lib/site-data";
import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <div className="max-w-3xl">
    <p className={`eyebrow ${light ? "text-primary" : "text-accent-foreground"}`}>{eyebrow}</p>
    <h2 className={`mt-4 font-display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl ${light ? "text-hero-foreground" : "text-foreground"}`}>{title}</h2>
    {copy ? <p className={`mt-5 max-w-2xl text-base leading-8 ${light ? "text-hero-muted" : "text-muted-foreground"}`}>{copy}</p> : null}
  </div>;
}

export function PageHero({ eyebrow, title, copy, image = images.snowyValley, imageAlt = "Himalayan landscape around Sangla" }: { eyebrow: string; title: string; copy: string; image?: string; imageAlt?: string }) {
  return <section className="relative min-h-[72svh] overflow-hidden bg-hero pt-20 text-hero-foreground">
    <img src={image} alt={imageAlt} className="absolute inset-0 size-full object-cover animate-ken-burns" />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="relative mx-auto flex min-h-[calc(72svh-5rem)] max-w-7xl items-end px-5 pb-14 lg:px-8 lg:pb-20">
      <div className="max-w-4xl animate-reveal">
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h1 className="mt-5 text-balance font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-hero-muted sm:text-lg">{copy}</p>
      </div>
    </div>
  </section>;
}

export function FinalCta() {
  return <section className="relative overflow-hidden bg-forest py-20 text-hero-foreground lg:py-28">
    <div className="absolute inset-0 opacity-15 pattern-lines" />
    <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
      <Reveal>
        <p className="eyebrow text-primary">Your Sangla stay</p>
        <h2 className="mt-5 font-display text-4xl sm:text-6xl">Wake up closer to the mountains.</h2>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-hero-muted">Seasonal stays start around {property.price} per night. Message us directly for current availability and pricing.</p>
        <Button asChild size="lg" className="mt-8 h-13 rounded-full px-7">
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> Book on WhatsApp</a>
        </Button>
      </Reveal>
    </div>
  </section>;
}

export function ImageFeature({ image, alt, eyebrow, title, copy, reverse = false, children }: { image: string; alt: string; eyebrow: string; title: string; copy: string; reverse?: boolean; children?: ReactNode }) {
  return <section className="py-18 lg:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
      <Reveal className={`overflow-hidden rounded-md ${reverse ? "lg:order-2" : ""}`}>
        <img src={image} alt={alt} className="aspect-[4/5] size-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
      </Reveal>
      <Reveal delay={150} className={reverse ? "lg:order-1" : ""}>
        <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
        {children}
      </Reveal>
    </div>
  </section>;
}

export function TextLink({ to, children }: { to: "/rooms" | "/about" | "/gallery" | "/experiences" | "/location"; children: ReactNode }) {
  return <Link to={to} className="mt-7 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary">{children}<ArrowRight className="size-4" /></Link>;
}
