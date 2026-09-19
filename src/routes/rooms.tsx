import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta, PageHero, SectionHeading } from "@/components/sections";
import { Reveal } from "@/components/reveal";
import { images, makeHead, whatsappUrl } from "@/lib/site-data";

export const Route = createFileRoute("/rooms")({ head: () => makeHead("Rooms at Aashiyana Guest House Sangla", "See the clean, comfortable rooms and mountain-facing spaces at Aashiyana Guest House in Sangla.", "/rooms"), component: RoomsPage });
function RoomsPage() {
  const rooms = [
    { image: images.windowRoom, alt: "Guest room with green walls and large mountain-facing windows", title: "Mountain-facing comfort", copy: "A comfortable guest room with a generous window outlook toward the surrounding Himalayan landscape." },
    { image: images.calmRoom, alt: "Clean green-walled guest room at Aashiyana Guest House", title: "A calm place to rest", copy: "A clean, welcoming room for slowing down after a day exploring Sangla and the Baspa Valley." },
    { image: images.brightRoom, alt: "Bright double-bed guest room with red and green curtains", title: "Simple, restful spaces", copy: "A bright guest room with practical comfort and the warm character of a local Sangla stay." },
  ];
  return <><PageHero eyebrow="Rooms at Aashiyana" title="Comfort, with the Himalayas close by." copy="Simple, clean rooms for a restful stay in Sangla. Message us for current room availability and seasonal pricing." image={images.windowRoom} imageAlt="Comfortable room with wide mountain-facing windows" /><section className="py-18 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal><SectionHeading eyebrow="Stay your way" title="Rooms shown as they are." copy="We keep room information honest and straightforward. The photographs below are from Aashiyana Guest House; room assignment depends on availability." /></Reveal><div className="mt-12 grid gap-8 lg:grid-cols-3">{rooms.map((room, i) => <Reveal key={room.title} delay={i * 120}><article className="overflow-hidden rounded-md border border-border bg-card"><img src={room.image} alt={room.alt} className="aspect-[4/5] size-full object-cover transition-transform duration-700 hover:scale-[1.03]" /><div className="p-6"><h2 className="font-display text-3xl">{room.title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{room.copy}</p><Button asChild variant="outline" className="mt-6 w-full"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> Enquire about this room</a></Button></div></article></Reveal>)}</div><Reveal><p className="mt-10 text-center text-sm text-muted-foreground">Stays start around ₹1,611 per night. Pricing and availability vary by season.</p></Reveal></div></section><FinalCta /></>;
}
