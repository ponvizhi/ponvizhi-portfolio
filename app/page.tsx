"use client";

import { useState } from "react";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import RippleButton from "@/components/RippleButton";
import TestimonialSlider from "@/components/testimonial";

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
              <h1 style={{ opacity: 0, color: "#fff", lineHeight: 0 , position: "absolute"}}>Freelance Web Developer in Bangalore & Chennai</h1>
              <h2>Building high-performing, SEO-friendly websites that turn visitors into customers</h2>
              <div className="hero_services-wrap"><div className="text-size-small is-caption">Web Development</div><div className="hero_services-divider"></div><div className="text-size-small is-caption">UI/UX Design</div><div className="hero_services-divider"></div><div className="text-size-small is-caption">Digital Marketing</div></div>
              <p>Frontend Developer with 7+ years of experience helping startups and businesses launch fast, scalable, and conversion-focused websites.</p>
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
                          <h3>Web Design</h3>
                          <p>We craft user-focused designs that blend form and function, ensuring every pixel guides your customers effortlessly through your product.</p>
                          <ul>
                            <li>Responsive layouts for all devices.</li>
                            <li>Intuitive navigation and clear hierarchy.</li>
                            <li>Brand-aligned visual systems.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card">
                        <img src="images/service2image.png" loading="lazy" className="card_image" alt="Performance Optimize Service"></img>
                        <div className="card_content-wrap">
                          <h3>Performance Optimize</h3>
                          <p>We enhance your website's speed and efficiency to deliver a smooth user experience, faster loading times, and better search engine performance.</p>
                          <ul>
                            <li>Page speed and load time improvements.</li>
                            <li>Code, image, and asset optimization.</li>
                            <li>Caching and performance monitoring.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card">
                        <img src="images/service3image.png" loading="lazy" className="card_image" alt="Maintenance Service"></img>
                        <div className="card_content-wrap">
                          <h3>Maintenance</h3>
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
    <div className="sticky-icon">
        <a href="https://www.linkedin.com/in/ponvizhi-john-freelance-web-designer-and-front-end-developer-b7270313b" className="linkedin" target="_blank" rel="noopener">
          <svg className="cursor-pointer  transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 92 93" fill="none">
                    <rect x="0.138672" y="1" width="91.5618" height="91.5618" rx="15" fill="#fff"></rect>
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.6975 21.5618C22.6561 21.5618 21 23.1674 21 25.1456V68.0091C21 69.9875 22.6563 71.5918 24.6975 71.5918H67.3325C69.3747 71.5918 71.03 69.9873 71.03 68.0086V25.1456C71.03 23.1674 69.3747 21.5618 67.3325 21.5618H24.6975ZM36.2032 40.9068V63.4304H28.7167V40.9068H36.2032ZM36.6967 33.9411C36.6967 36.1025 35.0717 37.8321 32.4615 37.8321L32.4609 37.8319H32.4124C29.8998 37.8319 28.2754 36.1023 28.2754 33.9409C28.2754 31.7304 29.9489 30.0491 32.5111 30.0491C35.0717 30.0491 36.6478 31.7304 36.6967 33.9411ZM47.833 63.4304H40.3471L40.3469 63.4312C40.3469 63.4312 40.4452 43.0205 40.3475 40.9075H47.8336V44.0957C48.8288 42.5613 50.6098 40.3787 54.5808 40.3787C59.5062 40.3787 63.1991 43.598 63.1991 50.516V63.4304H55.7133V51.3822C55.7133 48.354 54.6293 46.2887 51.921 46.2887C49.8524 46.2887 48.6206 47.6815 48.0796 49.0271C47.8819 49.5072 47.833 50.1813 47.833 50.8535V63.4304Z" fill="#006699"></path>
                  </svg> LinkedIn
        </a>
        <a href="https://wa.me/919840385621" className="whatsapp" target="_blank" rel="noopener">
          <svg className="cursor-pointer transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
                    <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="#fff"></rect>
                    <path d="M23.5762 66.8405L26.8608 54.6381C24.2118 49.8847 23.3702 44.3378 24.4904 39.0154C25.6106 33.693 28.6176 28.952 32.9594 25.6624C37.3012 22.3729 42.6867 20.7554 48.1276 21.1068C53.5685 21.4582 58.6999 23.755 62.5802 27.5756C66.4604 31.3962 68.8292 36.4844 69.2519 41.9065C69.6746 47.3286 68.1228 52.7208 64.8813 57.0938C61.6399 61.4668 56.9261 64.5271 51.605 65.7133C46.284 66.8994 40.7125 66.1318 35.9131 63.5513L23.5762 66.8405ZM36.508 58.985L37.2709 59.4365C40.7473 61.4918 44.8076 62.3423 48.8191 61.8555C52.8306 61.3687 56.5681 59.5719 59.4489 56.7452C62.3298 53.9185 64.1923 50.2206 64.7463 46.2279C65.3002 42.2351 64.5143 38.1717 62.5113 34.6709C60.5082 31.1701 57.4003 28.4285 53.6721 26.8734C49.9438 25.3184 45.8045 25.0372 41.8993 26.0736C37.994 27.11 34.5422 29.4059 32.0817 32.6035C29.6212 35.801 28.2903 39.7206 28.2963 43.7514C28.293 47.0937 29.2197 50.3712 30.9732 53.2192L31.4516 54.0061L29.6153 60.8167L36.508 58.985Z" fill="#00D95F"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M55.0259 46.8847C54.5787 46.5249 54.0549 46.2716 53.4947 46.1442C52.9344 46.0168 52.3524 46.0186 51.793 46.1495C50.9524 46.4977 50.4093 47.8134 49.8661 48.4713C49.7516 48.629 49.5833 48.7396 49.3928 48.7823C49.2024 48.8251 49.0028 48.797 48.8316 48.7034C45.7543 47.5012 43.1748 45.2965 41.5122 42.4475C41.3704 42.2697 41.3033 42.044 41.325 41.8178C41.3467 41.5916 41.4555 41.3827 41.6286 41.235C42.2344 40.6368 42.6791 39.8959 42.9218 39.0809C42.9756 38.1818 42.7691 37.2863 42.3269 36.5011C41.985 35.4002 41.3344 34.42 40.4518 33.6762C39.9966 33.472 39.4919 33.4036 38.9985 33.4791C38.5052 33.5546 38.0443 33.7709 37.6715 34.1019C37.0242 34.6589 36.5104 35.3537 36.168 36.135C35.8256 36.9163 35.6632 37.7643 35.6929 38.6165C35.6949 39.0951 35.7557 39.5716 35.8739 40.0354C36.1742 41.1497 36.636 42.2144 37.2447 43.1956C37.6839 43.9473 38.163 44.6749 38.6801 45.3755C40.3607 47.6767 42.4732 49.6305 44.9003 51.1284C46.1183 51.8897 47.42 52.5086 48.7799 52.973C50.1924 53.6117 51.752 53.8568 53.2931 53.6824C54.1711 53.5499 55.003 53.2041 55.7156 52.6755C56.4281 52.1469 56.9995 51.4518 57.3795 50.6512C57.6028 50.1675 57.6705 49.6269 57.5735 49.1033C57.3407 48.0327 55.9053 47.4007 55.0259 46.8847Z" fill="#00D95F"></path>
                  </svg> Whatsapp
        </a>
    </div>
    </>
  );
}
