"use client";
import { useState } from "react";
import Script from "next/script";

type FAQ = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faqs: FAQ[];
};

const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!faqs.length) return null;

  return (
    <div className="faqDiv">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="faqCard">
          <button
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
            aria-expanded={activeIndex === index}
            aria-controls={`faq-${index}`}
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
            <div id={`faq-${index}`} style={{ marginTop: "8px", color: "#555" }}
  dangerouslySetInnerHTML={{ __html: faq.answer }}
/>
          )}
        </div>
      ))}

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
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
};

export default FAQAccordion;