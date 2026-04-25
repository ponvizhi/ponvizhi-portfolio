"use client";
import { useState, useEffect } from "react";

const steps = [
  {
    title: "Understanding business requirements",
    desc: "I analyze your goals, audience, and business needs to define the right approach."
  },
  {
    title: "Planning UI/UX and structure",
    desc: "Creating wireframes and structure focused on user experience and conversions."
  },
  {
    title: "Design and development",
    desc: "Building a modern, responsive website using latest technologies."
  },
  {
    title: "Testing and optimization",
    desc: "Ensuring speed, responsiveness, SEO, and bug-free performance."
  },
  {
    title: "Launch and support",
    desc: "Deploying your website and providing ongoing support if needed."
  }
];

export default function ProcessCarousel() {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // ✅ Responsive
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(2);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // ✅ Navigation
  const nextSlide = () => {
    if (index + slidesToShow >= steps.length) return;
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (index === 0) return;
    setIndex((prev) => prev - 1);
  };

  // ✅ Disable conditions
  const isPrevDisabled = index === 0;
  const isNextDisabled = index + slidesToShow >= steps.length;

  return (
    <div className="relative w-full overflow-hidden processSlider">

      {/* Track */}
      <div
        className="flex transition-transform duration-300 "
        style={{
          transform: `translateX(-${(index * 100) / slidesToShow}%)`,
        }}
      >
        {steps.map((step, i) => (
          <div key={i} 
  className="flex-shrink-0"
  style={{ width: `${100 / slidesToShow}%` }}
>
  <div className="p-3 h-full">
    <div className="processCard">
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
    </div>
  </div>
</div>
        ))}
      </div>
        <div className="reviews_slider-button-wrap">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        disabled={isPrevDisabled}
        className="arrow left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 8 14" fill="none" className="slider_icon"><path d="M6.82156 0.758057C6.82156 0.758057 0.757935 5.22392 0.757935 6.82168C0.757935 8.41945 6.82156 12.8853 6.82156 12.8853" stroke="currentColor" strokeWidth="1.51591" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.82156 0.758057C6.82156 0.758057 0.757935 5.22392 0.757935 6.82168C0.757935 8.41945 6.82156 12.8853 6.82156 12.8853" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1.51591" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        disabled={isNextDisabled}
        className="arrow right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 8 14" fill="none" className="slider_icon is-right"><path d="M6.82156 0.758057C6.82156 0.758057 0.757935 5.22392 0.757935 6.82168C0.757935 8.41945 6.82156 12.8853 6.82156 12.8853" stroke="currentColor" strokeWidth="1.51591" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.82156 0.758057C6.82156 0.758057 0.757935 5.22392 0.757935 6.82168C0.757935 8.41945 6.82156 12.8853 6.82156 12.8853" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1.51591" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </button>
      </div>
    </div>
  );
}