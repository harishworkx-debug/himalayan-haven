import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Car, Flame, HeartHandshake, MapPin, MessageCircle, Mountain, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta, ImageFeature, SectionHeading, TextLink } from "@/components/sections";
import { callUrl, directionsUrl, galleryImages, hotelSchema, images, makeHead, property, whatsappUrl } from "@/lib/site-data";

const description = "Stay at Aashiyana Guest House in Sangla for peaceful Himalayan views, clean rooms, warm hospitality and easy access to Sangla and Baspa Valley.";

export const Route = createFileRoute("/")({
  head: () => ({ ...makeHead("Aashiyana Guest House Sangla | Mountain View Stay", description, "/"), scripts: [{ type: "application/ld+json", children: JSON.stringify(hotelSchema) }] }),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="relative min-h-[92svh] overflow-hidden bg-hero pt-20 text-hero-foreground">
      <img src={images.snowyValley} alt="Sweeping snow-covered Sangla Valley landscape near Aashiyana Guest House" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto flex min-h-[calc(92svh-5rem)] max-w-7xl items-end px-5 pb-16 lg:px-8 lg:pb-24">
        <div className="max-w-5xl animate-reveal">
          <p className="eyebrow text-primary">Sangla · Himachal Pradesh</p>
          <h1 className="mt-5 text-balance font-display text-6xl leading-[0.9] sm:text-8xl lg:text-[7.5rem]">Stay in the Heart of Sangla</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-hero-muted sm:text-lg">Experience peaceful Himalayan views, warm hospitality and a comfortable stay in the heart of Sangla Valley.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-13 rounded-full px-7"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> Book on WhatsApp</a></Button>
            <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-header-border bg-header/35 px-6 text-hero-foreground backdrop-blur-md hover:bg-header/70 hover:text-hero-foreground"><a href={callUrl}><Phone /> Call Now</a></Button>
            <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-header-border bg-header/35 px-6 text-hero-foreground backdrop-blur-md hover:bg-header/70 hover:text-hero-foreground"><a href={directionsUrl} target="_blank" rel="noreferrer"><MapPin /> Get Directions</a></Button>
          </div>
        </div>
      </div>
      <div className="absolute right-6 top-28 hidden rounded-md border border-header-border bg-header/45 p-5 backdrop-blur-xl lg:block">
        <p className="eyebrow text-hero-muted">Seasonal stays</p><p className="mt-2 font-display text-3xl">from {property.price}</p><p className="mt-1 text-xs text-hero-muted">per night · approx.</p>
      </div>
    </section>

    <section className="border-b border-border py-18 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.25fr] lg:px-8">
        <div><p className="eyebrow text-accent-foreground">Welcome to Aashiyana</p><p className="mt-5 font-display text-4xl leading-tight sm:text-5xl">A warm Himalayan stay, grounded in Sangla.</p></div>
        <div><p className="text-lg leading-9 text-muted-foreground">Surrounded by Himalayan landscapes and close to Sangla's main market, Aashiyana is a comfortable base for quiet mornings, valley journeys and unhurried evenings.</p><TextLink to="/about">Discover our story</TextLink></div>
      </div>
    </section>

    <section className="py-18 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Why stay with us" title="The essentials, thoughtfully covered." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Mountain, "Mountain views", "Wake to the dramatic landscapes of the Sangla Valley."],
            [Sparkles, "Clean rooms", "Simple, comfortable spaces prepared for a restful stay."],
            [HeartHandshake, "Warm hospitality", "Helpful, cooperative service with a welcoming local feel."],
            [MapPin, "Market location", "A convenient Sangla base for the valley and surrounding region."],
          ].map(([Icon, title, copy]) => <div key={String(title)} className="bg-card p-7 lg:p-9"><Icon className="size-7 text-primary" strokeWidth={1.5} /><h3 className="mt-8 font-display text-2xl">{String(title)}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{String(copy)}</p></div>)}
        </div>
      </div>
    </section>

    <section className="relative min-h-[78svh] overflow-hidden bg-hero text-hero-foreground">
      <img src={images.windowView} alt="Open window framing snow mountains and Sangla Valley" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto flex min-h-[78svh] max-w-7xl items-end px-5 pb-16 lg:px-8 lg:pb-20"><SectionHeading light eyebrow="Mountain & valley views" title="Let the landscape set the pace." copy="Snow ridges, changing light and the breadth of Baspa Valley form the backdrop to your stay." /></div>
    </section>

    <ImageFeature image={images.windowRoom} alt="Green-walled room with wide mountain-facing windows" eyebrow="Comfortable rooms" title="Rest well. Wake to the valley." copy="Our guest rooms are simple, clean and comfortable—made memorable by the Himalayan setting just beyond the window."><TextLink to="/rooms">See the rooms</TextLink></ImageFeature>

    <section className="bg-muted py-18 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div><SectionHeading eyebrow="Warm hospitality" title="A stay that feels personal." copy="Cooperative staff and local hospitality make Aashiyana a reassuring place to return to after a day in the valley." /></div>
        <img src={images.warmHospitality} alt="Warmly lit common space at Aashiyana Guest House" className="aspect-[16/10] size-full rounded-md object-cover" />
      </div>
    </section>

    <ImageFeature reverse image={images.diningRoom} alt="Guest house common room with prayer flags" eyebrow="Evening bonfire experience" title="Slower evenings, mountain air." copy="Gather for an evening bonfire when available—a warm, simple way to settle into Sangla's cool mountain atmosphere."><div className="mt-7 inline-flex items-center gap-3 text-sm text-muted-foreground"><Flame className="size-5 text-primary" /> Availability may depend on conditions.</div></ImageFeature>

    <section className="bg-forest py-18 text-hero-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <SectionHeading light eyebrow="Sangla & Baspa Valley" title="A convenient base for high-valley days." copy="Step out to explore the landscapes, local life and roads of this remarkable Himalayan region." />
        <div className="grid gap-4 sm:grid-cols-2"><img src={images.mountainProperty} alt="Snowy Himalayan slopes around Sangla" className="aspect-[4/5] size-full rounded-md object-cover" /><img src={images.propertyFront} alt="Aashiyana Guest House exterior near Sangla market" className="aspect-[4/5] size-full rounded-md object-cover sm:mt-12" /></div>
        <Link to="/experiences" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary">Explore the valley <ArrowRight className="size-4" /></Link>
      </div>
    </section>

    <section className="py-18 lg:py-24"><div className="mx-auto max-w-4xl px-5 text-center lg:px-8"><p className="eyebrow text-accent-foreground">Guest rating</p><p className="mt-5 font-display text-7xl text-primary">3.5<span className="text-3xl text-muted-foreground">/5</span></p><h2 className="mt-4 font-display text-4xl">A straightforward Sangla stay.</h2><p className="mx-auto mt-4 max-w-xl leading-8 text-muted-foreground">Choose Aashiyana for its helpful staff, comfortable essentials, mountain outlook and practical location.</p></div></section>

    <section className="border-y border-border py-18 lg:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex items-end justify-between gap-6"><SectionHeading eyebrow="Gallery preview" title="A glimpse of Aashiyana." /><TextLink to="/gallery">View all</TextLink></div><div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">{galleryImages.slice(0, 4).map((image, index) => <img key={image.src} src={image.src} alt={image.alt} className={`size-full rounded-md object-cover ${index === 0 ? "col-span-2 aspect-[2/1] lg:row-span-2 lg:aspect-auto" : "aspect-square"}`} />)}</div></div></section>

    <ImageFeature image={images.propertyFront} alt="Street entrance of Aashiyana Guest House in Sangla" eyebrow="In the heart of Sangla" title="Close to the market. Connected to the valley." copy="Find us at C7G7+V9H, Sangla, Himachal Pradesh 172106—a practical base for travelers exploring Sangla and Baspa Valley."><div className="mt-7 flex flex-wrap gap-3"><Button asChild><a href={directionsUrl} target="_blank" rel="noreferrer"><MapPin /> Get Directions</a></Button><Button asChild variant="outline"><a href={callUrl}><Phone /> Call Now</a></Button></div></ImageFeature>
    <FinalCta />
  </>;
}