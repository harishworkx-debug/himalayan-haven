import snowyValley from "@/assets/image.png";
import mountainProperty from "@/assets/image-2.png";
import windowRoom from "@/assets/image-3.png";
import reception from "@/assets/image-4.png";
import propertyFront from "@/assets/image-5.png";
import diningRoom from "@/assets/image-6.png";
import warmHospitality from "@/assets/image-7.png";
import calmRoom from "@/assets/image-8.png";
import brightRoom from "@/assets/image-9.png";
import windowView from "@/assets/image-10.png";

export const property = {
  name: "Aashiyana Guest House",
  shortName: "Aashiyana",
  location: "Sangla, Himachal Pradesh 172106",
  address: "C7G7+V9H, Sangla, Himachal Pradesh 172106",
  phoneLabel: "+91 90151 18817",
  phone: "+919015118817",
  rating: "3.5/5",
  price: "₹1,611",
};

export const whatsappMessage =
  "Hello, I would like to enquire about staying at Aashiyana Guest House, Sangla.";
export const whatsappUrl = `https://wa.me/${property.phone.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;
export const callUrl = `tel:${property.phone}`;
export const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Aashiyana+Guest+House%2C+C7G7%2BV9H%2C+Sangla%2C+Himachal+Pradesh+172106";

export const images = {
  snowyValley: snowyValley,
  mountainProperty: mountainProperty,
  windowRoom: windowRoom,
  reception: reception,
  propertyFront: propertyFront,
  diningRoom: diningRoom,
  warmHospitality: warmHospitality,
  calmRoom: calmRoom,
  brightRoom: brightRoom,
  windowView: windowView,
};

export const galleryImages = [
  { src: images.snowyValley, alt: "Snow-covered Sangla Valley seen from Aashiyana Guest House" },
  { src: images.mountainProperty, alt: "Himalayan mountain landscape near Aashiyana Guest House in Sangla" },
  { src: images.windowRoom, alt: "Comfortable guest room with wide valley-facing windows" },
  { src: images.reception, alt: "Welcoming common area at Aashiyana Guest House" },
  { src: images.propertyFront, alt: "Aashiyana Guest House exterior in Sangla market" },
  { src: images.diningRoom, alt: "Dining and seating area decorated with Himalayan prayer flags" },
  { src: images.warmHospitality, alt: "Warm pendant lighting in the guest house common space" },
  { src: images.calmRoom, alt: "Clean and comfortable room at Aashiyana Guest House" },
  { src: images.brightRoom, alt: "Bright guest room with a comfortable double bed" },
  { src: images.windowView, alt: "Mountain and valley view through an open guest room window" },
];

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/about", label: "Our Story" },
  { to: "/amenities", label: "Amenities" },
  { to: "/experiences", label: "Explore" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
] as const;

export const hotelSchema = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LocalBusiness"],
  name: property.name,
  description:
    "A peaceful guest house in Sangla with Himalayan views, clean rooms, warm hospitality and a convenient market location.",
  telephone: property.phoneLabel,
  address: {
    "@type": "PostalAddress",
    streetAddress: "C7G7+V9H",
    addressLocality: "Sangla",
    addressRegion: "Himachal Pradesh",
    postalCode: "172106",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "3.5",
    bestRating: "5",
  },
  priceRange: "From approximately ₹1,611 per night; seasonal pricing applies",
};

export function makeHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}