import { profile } from "@/data/profile";

export function StructuredData() {
  const schema = { "@context": "https://schema.org", "@type": "Person", name: profile.name, url: "https://shivamtrivedi.in", email: profile.email, jobTitle: profile.role, address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", addressCountry: "IN" }, sameAs: Object.values(profile.links), knowsAbout: profile.skills.flatMap((group) => group.items) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
