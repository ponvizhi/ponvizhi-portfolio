
import Script from "next/script";
import WebDesignDevelopmentClient from "./WebDesignDevelopmentClient";

export const metadata = {
  title:
    "Custom Web Design and Development Services | Freelance Web Developer",

  description:
    "Custom web design and development services for businesses, startups, and ecommerce brands. Fast, responsive, and SEO-friendly websites focused on performance and conversions.",

  metadataBase: new URL("https://www.ponvizhiweb.com"),

  alternates: {
    canonical: "/services/web-design-development",
  },
};

export default function Page() {
  return (
    <>
    <Script
  id="web-design-development-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",

      name: "Custom Web Design and Development Services",

      url: "https://www.ponvizhiweb.com/services/web-design-development",

      image: "https://www.ponvizhiweb.com/og-image.jpg",

      description:
        "Custom web design and development services for businesses, startups, and ecommerce brands. Fast, responsive, and SEO-friendly websites focused on performance and conversions.",

      areaServed: {
        "@type": "City",
        name: "Bangalore",
      },

      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },

      serviceType: [
        "Web Design",
        "Web Development",
        "Frontend Development",
        "Shopify Development",
        "WordPress Development",
        "UI/UX Design",
      ],

      provider: {
        "@type": "Person",
        name: "Ponvizhi",
        url: "https://www.ponvizhiweb.com",
      },
    }),
  }}
/>


      <WebDesignDevelopmentClient />
    </>
  );
}