import type { Metadata } from "next";
import { Geist, Fira_Code, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre",
  display: "swap",
});

export const metadata = {
  verification: {
    google: "cA3Smc6PWyzeMtaEhGdfDTa9xAro9kE7N9xOBWcv9CU",
  },
  metadataBase: new URL("https://www.ponvizhiweb.com"),
  title: "Freelance Web Developer in Bangalore & Chennai | React, Shopify & WordPress Expert",
  description:
    "Freelance web developer helping businesses in Bangalore, Chennai, and across India build fast, SEO-friendly websites using React, Angular, Shopify, and WordPress.",
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ponvizhi John",
      jobTitle: "Freelance Web Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressCountry: "India"
      },
      sameAs: [
        "https://github.com/ponvizhi/",
        "www.linkedin.com/in/ponvizhi-john-freelance-web-designer-and-front-end-developer-b7270313b"
      ]
    }),
  }}
/>

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${firaCode.variable} ${libreCaslon.variable}`}
    >
      <body>
        <Header />
        <main className="main-wrapper">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
