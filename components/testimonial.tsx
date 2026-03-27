import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "MR. Sridhar",
    message:
      'Working with Ponvizhi was a great experience. <strong>Strong attention to detail</strong> and ensured everything was implemented exactly as expected. The website performance and responsiveness improved noticeably, and communication throughout the project was smooth and clear. I would definitely recommend her for frontend development work.',
  },
  {
    id: 2,
    name: "MR. Ram Kumar",
    message:
      '<strong>Delivered exactly what we needed on time.</strong> She understood the requirements quickly and handled changes without any issues. The final output was clean, responsive, and worked well across devices. Overall, a reliable developer to work with',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const intervalTime = 4500;

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="testim">
      <div className="testim-cover">
        <div className="wrap">
          
          {/* Content */}
          <div className="cont">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className={
                  index === current
                    ? "active"
                    : index === current - 1
                    ? "inactive"
                    : ""
                }
              > 
                <p className="message" dangerouslySetInnerHTML={{ __html: testimonials[current].message }} />
                <h2>{item.name}</h2>
              </div>
            ))}
          </div>

            {/* Arrows */}
          <div className="reviews_slider-button-wrap">
          <span className="arrow left" onClick={prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 8 14" fill="none" className="slider_icon"><path d="M6.82156 0.758057C6.82156 0.758057 0.757935 5.22392 0.757935 6.82168C0.757935 8.41945 6.82156 12.8853 6.82156 12.8853" stroke="currentColor" strokeWidth="1.51591" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.82156 0.758057C6.82156 0.758057 0.757935 5.22392 0.757935 6.82168C0.757935 8.41945 6.82156 12.8853 6.82156 12.8853" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1.51591" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </span>
          <span className="arrow right" onClick={nextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 8 14" fill="none" className="slider_icon is-right"><path d="M6.82156 0.758057C6.82156 0.758057 0.757935 5.22392 0.757935 6.82168C0.757935 8.41945 6.82156 12.8853 6.82156 12.8853" stroke="currentColor" strokeWidth="1.51591" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.82156 0.758057C6.82156 0.758057 0.757935 5.22392 0.757935 6.82168C0.757935 8.41945 6.82156 12.8853 6.82156 12.8853" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1.51591" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </span>
      </div>

          {/* Dots */}
          <div className="dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={index === current ? "dot active" : "dot"}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;