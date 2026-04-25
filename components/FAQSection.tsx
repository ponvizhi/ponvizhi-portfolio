"use client";
import { useState } from "react";
import Script from "next/script";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does website development cost in Bangalore?",
      answer:
        "Website development costs typically range from ₹15,000 to ₹1,50,000+ depending on complexity and features.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Most websites take 1-3 weeks, while custom applications may take 4-8 weeks.",
    },
    {
      question: "Which platform is best for my business website?",
      answer:
        "WordPress is great for content, Shopify for e-commerce, and React/Angular for scalable apps.",
    },
    {
      question: "Will my website be SEO-friendly?",
      answer:
        "Yes, all websites are built with SEO best practices including speed and mobile optimization.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, I provide maintenance, updates, and performance optimization.",
    },
  ];

  return (
    <div className="faqDiv">
      {faqs.map((faq, index) => (
        <div key={index} className="faqCard">
          <button
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
            aria-expanded={activeIndex === index}
            style={{ width: "100%", background: "none", border: "none", fontSize: "18px", fontWeight: "600", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", }}
          >
            {faq.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>

          {activeIndex === index && <p style={{ marginTop: "8px", color: "#555" }}>{faq.answer}</p>}
        </div>
      ))}

      {/* ✅ Proper FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}