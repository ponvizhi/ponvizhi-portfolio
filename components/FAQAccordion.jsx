"use client";
import { useState } from "react";
import Script from "next/script";

export default function FAQSection({ faqs }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="faqDiv">
      {faqs.map((faq, index) => (
        <div key={index} className="faqCard">
          <button
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
            aria-expanded={activeIndex === index}
            style={{
              width: "100%",
              background: "none",
              border: "none",
              fontSize: "18px",
              fontWeight: "600",
              textAlign: "left",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {faq.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>

          {activeIndex === index && (
            <p style={{ marginTop: "8px", color: "#555" }}>
              {faq.answer}
            </p>
          )}
        </div>
      ))}

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