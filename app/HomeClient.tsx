"use client";

import { useState } from "react";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import RippleButton from "@/components/RippleButton";
import TestimonialSlider from "@/components/testimonial";

export default function HomeClient({ blogs = [] }: any) {
  const [imageSrc, setImageSrc] = useState("/images/si1.jpg");

  const items = [
    { label: "Website Design, Development, & Maintenance", para: "I design, build, and maintain high-performance websites that grow with your business.", src: "/images/si1.jpg" },
    { label: "User-Centered Design",para: "I create intuitive, goal-driven experiences designed around real user behavior and business objectives.", src: "/images/si2.jpg" },
    { label: "Responsive & Accessible", para: "I develop fully responsive, accessible websites that perform seamlessly across all devices and users.", src: "/images/work3.webp" },
  ];

  return (
     <>
    <section className="section_hero is-gap">
      <div className="padding-global">
        <div className="container-large">
          <div className="hero_layout is-v2">
            <div className="hero_content-wrap">
              <h1 style={{ opacity: 0, color: "#fff", lineHeight: 0 , position: "absolute"}}>Freelance Web Developer in Bangalore & Chennai</h1>
              <h2>Building high-performing, SEO-friendly websites that turn visitors into customers</h2>
              <div className="hero_services-wrap"><div className="text-size-small is-caption">Web Development</div><div className="hero_services-divider"></div><div className="text-size-small is-caption">UI/UX Design</div><div className="hero_services-divider"></div><div className="text-size-small is-caption">Digital Marketing</div></div>
              <p>Frontend Developer with 7+ years of experience helping startups and businesses launch fast, scalable, and conversion-focused websites.</p>
              <a href="/freelance-web-developer-in-bangalore" className="linkStyle">👉 Freelance Web Development Services in Bangalore</a>
              <div className="btnWrapper">
              <RippleButton title="Book a Free Call" variant="solid" to="#contact"/>
              <RippleButton title="View My Work" variant="outline" to="#work"/>
              </div>
            </div>
            <div className="hero_image-wrap relative overflow-hidden">
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
                      <h2 className="text-center">Everything you need to build, launch, and grow your website.</h2>
                    </div>
                    <div className="benefits_cards-wrap">
                      <div className="card">
                        <img src="images/service1image.png" loading="lazy" className="card_image" alt="Web Design Service"></img>
                        <div className="card_content-wrap">
                          <h3>Web Design & Development</h3>
                          <p>We design and build modern, user-friendly websites that not only look great but also drive results for your business.</p>
                          <ul>
                            <li>Custom Web Design</li>
                            <li>Website Redesign</li>
                            <li>Corporate Website Design</li>
                            <li>CMS Development (WordPress, Shopify, etc.)</li>
                            <li>Performance-Optimized Builds</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card">
                        <img src="images/service2image.png" loading="lazy" className="card_image" alt="Performance Optimize Service"></img>
                        <div className="card_content-wrap">
                          <h3>SEO & Website Optimization</h3>
                          <p>We optimize your website to rank higher on search engines, improve user experience, and convert visitors into customers.</p>
                          <ul>
                            <li>On-Page SEO Optimization</li>
                            <li>SEO Consultation</li>
                            <li>User Experience (UX) Improvements</li>
                            <li>Mobile-First Optimization</li>
                            <li>Conversion Rate Optimization (CRO)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card">
                        <img src="images/service3image.png" loading="lazy" className="card_image" alt="Maintenance Service"></img>
                        <div className="card_content-wrap">
                          <h3>Website Maintenance & Support</h3>
                          <p>We keep your website secure, updated, and running smoothly with ongoing support and regular maintenance.</p>
                          <ul>
                            <li>Regular Updates</li>
                            <li>Security Monitoring</li>
                            <li>Bug Fixes</li>
                            <li>Backup Management</li>
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
                        <h3 className="text-white">TeleOralMedicine <span>Responsive frontend development with performance optimization</span></h3>
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
                        <h3 className="text-white">PrideWA <span>Pixel-perfect UI implementation with mobile responsiveness</span></h3>
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
                        <h3 className="text-white">Westcourt <span>Scalable frontend with reusable components</span></h3>
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
                        <h3 className="text-white">IA Design <span>Clean and responsive UI development from design</span></h3>
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
                          <img src="images/logo1.png" height="128" alt="HTML5"></img>
                          <h5>HTML5</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo2.png" height="128" alt="CSS3"></img>
                          <h5>CSS3</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo3.png" height="128" alt="JAVASCRIPT"></img>
                          <h5>JAVASCRIPT</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo4.png" height="128" alt="WORDPRESS"></img>
                          <h5>WORDPRESS</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo5.png" height="128" alt="SHOPIFY"></img>
                          <h5>SHOPIFY</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo6.png" height="128" alt="ANGULAR"></img>
                          <h5>ANGULAR</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo7.webp" height="128" alt="TYPESCRIPT"></img>
                          <h5>TYPESCRIPT</h5>
                          </div>
                        </div>
                        <div aria-hidden="true" className="logo-marquee--marquee-group">
                          <div className="logo-slide">
                          <img src="images/logo1.png" height="128" alt="HTML5"></img>
                          <h5>HTML5</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo2.png" height="128" alt="CSS3"></img>
                          <h5>CSS3</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo3.png" height="128" alt="JAVASCRIPT"></img>
                          <h5>JAVASCRIPT</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo4.png" height="128" alt="WORDPRESS"></img>
                          <h5>WORDPRESS</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo5.png" height="128" alt="SHOPIFY"></img>
                          <h5>SHOPIFY</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo6.png" height="128" alt="ANGULAR"></img>
                          <h5>ANGULAR</h5>
                          </div>
                          <div className="logo-slide">
                          <img src="images/logo7.webp" height="128" alt="TYPESCRIPT"></img>
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
    <section className="section_help is-gap">
      <div className="padding-global">
        <div className="container-large">
          <div className="help_wrap is-v2">
            <div className="padding-section-large">
              <div className="logos_layout testimonial_slider">
                <div className="titile-wrap place-items-center">
                      <div className="mission-subtext">Testimonials</div>
                      <h2>Voice of our clients</h2>
                </div>
                  <TestimonialSlider />
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
                <div className="logos_layout">
                <div className="titile-wrap place-items-center">
                    <div className="mission-subtext">Latest Blogs</div>
                </div>
                <div className="blogListingGrid">
                  {blogs?.map((blog: any) => (
        <article
          key={blog.slug}
          className="blogList"
        >
            <div className="blogListHeader">
                <img src={blog.thumbnail} />
            </div>
          <div className="blogListContent">
            <h3 className="line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2 line-clamp-3">
              {blog.excerpt}
            </p>
             <a
                href={`/blog/${blog.slug}`}
                className="blog_link w-inline-block"
              >
                Read More <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="inherit"><path d="M20 12L4 12M20 12C20 10.682 15 7 15 7M20 12C20 13.318 15 17 15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </a>
          </div>
        </article>
      ))}
                </div>
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
                <h2>Start your project today.</h2>
                <p>Got a project in mind? Let's discuss and build something that works for your business.</p>
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
