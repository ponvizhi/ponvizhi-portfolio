"use client";

import { useState } from "react";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const [imageSrc, setImageSrc] = useState("/images/si1.jpg");

  const items = [
    { label: "Website Design, Development, & Maintenance", para: "I design, build, and maintain high-performance websites that grow with your business.", src: "/images/si1.jpg" },
    { label: "User-Centered Design",para: "I create intuitive, goal-driven experiences designed around real user behavior and business objectives.", src: "/images/si2.jpg" },
    { label: "Responsive & Accessible", para: "I develop fully responsive, accessible websites that perform seamlessly across all devices and users.", src: "/images/service image-1.avif" },
  ];

  return (
     <>
    <section className="section_hero is-gap">
      <div className="padding-global">
        <div className="container-large">
          <div className="hero_layout is-v2">
            <div className="hero_content-wrap">
              <div className="mission-subtext">My Approach</div>
              <h1 style={{ opacity: 0, color: "#fff", lineHeight: 0 }}>Freelance Web Developer in Bangalore & Chennai</h1>
              <h2>Building fast, SEO-friendly websites for businesses & startups</h2>
              <div className="hero_services-wrap"><div className="text-size-small is-caption">Web Development</div><div className="hero_services-divider"></div><div className="text-size-small is-caption">UI/UX Design</div><div className="hero_services-divider"></div><div className="text-size-small is-caption">Digital Marketing</div></div>
              <p>I'm a freelance web developer working with clients in Bangalore, Chennai, and across India. I help businesses build fast, scalable, and SEO-optimized websites.</p>
            </div>
            <div className="hero_image-wrap relative overflow-hidden">
              {/* <img className="hero_image" src="https://cdn.prod.website-files.com/68f32de327233c470b1e6a87/68f36b82bf633265eea6f2c2_hero%20image.avif" alt="Smiling woman with long brown hair wearing a black blazer and tan pants, resting her chin on her hand." sizes="(max-width: 1244px) 100vw, 1244px" loading="eager" fetchPriority="high" srcSet="https://cdn.prod.website-files.com/68f32de327233c470b1e6a87/68f36b82bf633265eea6f2c2_hero%20image-p-500.avif 500w, https://cdn.prod.website-files.com/68f32de327233c470b1e6a87/68f36b82bf633265eea6f2c2_hero%20image.avif 1244w"></img> */}
               <HeroSection />
            </div>
            <div className="hero_blur hide-tablet" style={{
              willChange: "transform",
              transform: "translate3d(0, 0, 0)",
              transformStyle: "preserve-3d",
            }}></div>
          </div>
        </div>
      </div>
    </section>
    <section className="section_benefits is-gap" id="service">
           <div className="padding-global">
            <div className="container-large">
              <div className="portfolio_wrap is-v2">
                <div className="padding-section-large">
                  <div className="portfolio_layout">
                    <div className="titile-wrap place-items-center">
                      <div className="mission-subtext">Service We Offer</div>
                      <h2>Plan. Design. Build. Maintain.</h2>
                    </div>
                    <div className="benefits_cards-wrap">
                      <div className="card">
                        <img src="images/service1image.png" loading="lazy" className="card_image" alt=""></img>
                        <div className="card_content-wrap">
                          <h4>Web Design</h4>
                          <p>We craft user-focused designs that blend form and function, ensuring every pixel guides your customers effortlessly through your product.</p>
                          <ul>
                            <li>Responsive layouts for all devices.</li>
                            <li>Intuitive navigation and clear hierarchy.</li>
                            <li>Brand-aligned visual systems.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card">
                        <img src="images/service2image.png" loading="lazy" className="card_image" alt=""></img>
                        <div className="card_content-wrap">
                          <h4>Performance Optimize</h4>
                          <p>We enhance your website's speed and efficiency to deliver a smooth user experience, faster loading times, and better search engine performance.</p>
                          <ul>
                            <li>Page speed and load time improvements.</li>
                            <li>Code, image, and asset optimization.</li>
                            <li>Caching and performance monitoring.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card">
                        <img src="images/service3image.png" loading="lazy" className="card_image" alt=""></img>
                        <div className="card_content-wrap">
                          <h4>Maintenance</h4>
                          <p>We keep your software running smoothly with proactive monitoring, security updates, and feature enhancements—so you never miss a beat.</p>
                          <ul>
                            <li>24/7 performance monitoring.</li>
                            <li>Regular security patches.</li>
                            <li>Priority support & updates.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
    </section>
    <section className="section_portfolio is-gap" id="work">
      <div className="padding-global">
        <div className="container-large">
          <div className="portfolio_wrap is-v2">
            <div className="padding-section-large">
              <div className="portfolio_layout">
                <div className="titile-wrap place-items-center">
                      <div className="mission-subtext">Portfolio</div>
                      <h2>Selected Work...</h2>
                </div>
                <div className="grid grid-cols-[60%_40%] gap-4">
                  <div className="">
                    <div className="portfolio_card">
                      <img className="portfolio_card-image" src="images/portfolioimage1.jpeg"></img>
                      <div className="portfolio_card-content">
                        <div className="portfolio_card-tags">
                          <span>Web Design</span>
                          <span>Wordpress</span>
                        </div>
                        <h3 className="text-white">TeleOralMedicine</h3>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="portfolio_card">
                      <img className="portfolio_card-image" src="images/portfolioimage2.jpeg"></img>
                      <div className="portfolio_card-content">
                        <div className="portfolio_card-tags">
                          <span>Web Design</span>
                          <span>Wordpress</span>
                        </div>
                        <h3 className="text-white">PrideWA</h3>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="grid grid-cols-[40%_60%] gap-4 pt-16px">
                  <div className="">
                    <div className="portfolio_card">
                      <img className="portfolio_card-image" src="images/portfolioimage3.jpeg"></img>
                      <div className="portfolio_card-content">
                        <div className="portfolio_card-tags">
                          <span>Web Design</span>
                          <span>Wordpress</span>
                        </div>
                        <h3 className="text-white">Westcourt</h3>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="portfolio_card">
                      <img className="portfolio_card-image" src="images/portfolioimage4.jpeg"></img>
                      <div className="portfolio_card-content">
                        <div className="portfolio_card-tags">
                          <span>Web Design</span>
                          <span>Wordpress</span>
                        </div>
                        <h3 className="text-white">IA Design</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section_logos is-gap">
            <div className="padding-global">
              <div className="container-large">
                <div className="logos_wrap is-v2">
                  <div className="padding-section-large">
                    <div className="logos_layout">
                      <div className="titile-wrap place-items-center">
                        <h2>Tools We Use to Create Your Products</h2>
                      </div>
                      <div className="logo-marquee">
                      <div className="logo-marquee--gradient"></div>
                      <div className="logo-marquee--marquee">
                        <div className="logo-marquee--marquee-group">
                          <div className="logo-slide">
                          <img src="images/logo1.png" height="128" alt=""></img>
                          <h5>HTML5</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo2.png" height="128" alt=""></img>
                          <h5>CSS3</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo3.png" height="128" alt=""></img>
                          <h5>JAVASCRIPT</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo4.png" height="128" alt=""></img>
                          <h5>WORDPRESS</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo5.png" height="128" alt=""></img>
                          <h5>SHOPIFY</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo6.png" height="128" alt=""></img>
                          <h5>ANGULAR</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo7.webp" height="128" alt=""></img>
                          <h5>TYPESCRIPT</h5>
                          </div>
                        </div>
                        <div aria-hidden="true" className="logo-marquee--marquee-group">
                          <div className="logo-slide">
                          <img src="images/logo1.png" height="128" alt=""></img>
                          <h5>HTML5</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo2.png" height="128" alt=""></img>
                          <h5>CSS3</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo3.png" height="128" alt=""></img>
                          <h5>JAVASCRIPT</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo4.png" height="128" alt=""></img>
                          <h5>WORDPRESS</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo5.png" height="128" alt=""></img>
                          <h5>SHOPIFY</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo6.png" height="128" alt=""></img>
                          <h5>ANGULAR</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo7.webp" height="128" alt=""></img>
                          <h5>TYPESCRIPT</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
    <section className="section_help is-gap">
      <div className="padding-global">
        <div className="container-large">
          <div className="help_wrap is-v2">
            <div className="padding-section-large">
              <div className="help_layout">
                <div>
                <div className="titile-wrap">
                      <h2>How I can help you...</h2>
                </div>
                {/* LEFT SIDE - TEXT LINKS */}
                <div className="help_content-wrap space-y-6">
                  {items.map((item, index) => (
                    <div key={index} className="service_list">
                      <button
                        onMouseEnter={() => setImageSrc(item.src)}
                        className="text-3xl font-medium hover:opacity-50 transition"
                      >
                        <h4>{item.label}</h4>
                        <p>{item.para}</p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
                {/* RIGHT SIDE - IMAGE */}
                <div className="relative w-full h-[500px]">
                  <Image
                    src={imageSrc}
                    alt="Service Preview"
                    fill
                    className="object-cover rounded-xl transition-opacity duration-300"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section_audience is-gap">
      <div className="padding-global">
        <div className="container-large">
          <div className="audience_wrap is-v2">
            <div className="padding-section-large">
              <div className="audience_layout">
                <div className="titile-wrap place-items-center">
                <div className="mission-subtext-white">skills & services</div>
                </div>
                <ul className="skills-list"> 
                  <li>
                    <h5>Website Design</h5>
                  </li>
                  <li>
                    <h5>Design Systems</h5>
                  </li>
                  <li>
                    <h5>Landing Pages</h5>
                  </li>

                  <li>
                    <h5>User Experience Design</h5>
                  </li>
                  <li>
                    <h5>Visual Design</h5>
                  </li>
                  <li>
                    <h5>Logos & Visual Identity</h5>
                  </li>

                  <li>
                    <h5>Website Design</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section_contact is-gap" id="contact">
      <div className="padding-global">
        <div className="container-large">
          <div className="contact_wrap is-v2">
            <div className="padding-section-large">
              <div className="contact_layout">
                <div>
                <h2>Let's connect.</h2>
                <p>Schedule a brief chat or, email us at <a href="mailto:ponvizhijohn@gmail.com">ponvizhijohn@gmail.com</a></p>
                <img src="http://cdn.prod.website-files.com/68f32de327233c470b1e6a87/6929f1618f36a036f651e4b6_01%201.png"></img>
                </div>
                <div className="cnt-right">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
