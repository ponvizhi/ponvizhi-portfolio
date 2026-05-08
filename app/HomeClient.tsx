"use client";

import { useState } from "react";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import RippleButton from "@/components/RippleButton";
import TestimonialSlider from "@/components/testimonial";

export default function HomeClient({ blogs = [] }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

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
            <div className="padding-section-large webDesignerContent">
              <div className="portfolio_layout">
                <h2>
        Ponvizhi – Freelance Web Designer Bangalore for Modern & SEO-Friendly
        Websites
      </h2>

      <div className={`content ${isExpanded ? "expanded" : "collapsed"}`}>
        <p>
          Looking for a reliable and experienced web designer Bangalore
          businesses can trust? Ponvizhi is a skilled freelance web designer
          Bangalore startups, businesses, and growing brands choose for modern,
          responsive, and SEO-friendly website solutions. With strong experience
          in frontend development, UI/UX design, and responsive website
          creation, Ponvizhi helps businesses build websites that not only look
          professional but also improve user engagement and online visibility.
        </p>

        <h3>
          Experienced Web Designer Bangalore for Business Websites
        </h3>

        <p>
          As a professional web designer Bangalore companies prefer for
          performance-focused websites, Ponvizhi specializes in creating
          fast-loading, mobile-friendly, and user-centric digital experiences.
          Every website is designed with a strong focus on usability, clean
          coding standards, responsive layouts, and search engine optimization.
        </p>

        <p>
          Whether you are a startup, small business, entrepreneur, or
          service-based company, the goal is to create a website that supports
          your business growth and strengthens your online presence.
        </p>

        <p>
          Ponvizhi provides complete web design and frontend development
          services including:
        </p>

        <ul>
          <li>Custom website design</li>
          <li>Responsive website development</li>
          <li>Frontend development</li>
          <li>Website redesign services</li>
          <li>Landing page design</li>
          <li>CMS website development</li>
          <li>Website performance optimization</li>
        </ul>

        <p>
          Using technologies such as HTML5, CSS3, JavaScript, Angular,
          WordPress, Shopify, and TypeScript, websites are developed with
          performance, scalability, and user experience in mind.
        </p>

        <h3>SEO-Friendly Website Design Services in Bangalore</h3>

        <p>
          Modern businesses need more than just a visually attractive website. A
          successful website should be easy to navigate, mobile responsive, and
          properly optimized for search engines. That is why Ponvizhi follows an
          SEO-focused and user-friendly web development approach.
        </p>

        <p>
          From responsive layouts and optimized page structures to faster
          loading speed and accessibility improvements, every website is
          carefully built to improve the overall browsing experience. A
          well-optimized website not only improves usability but also increases
          the chances of ranking better on search engines.
        </p>

        <p>
          As a trusted freelance web designer Bangalore businesses work with,
          Ponvizhi focuses on creating websites that balance creativity,
          performance, and functionality. Instead of relying on generic
          templates, every project is developed based on the business goals,
          target audience, and brand identity.
        </p>

        <h3>Responsive and User-Friendly Web Design Solutions</h3>

        <p>
          Today, users browse websites from multiple devices including
          smartphones, tablets, laptops, and desktops. A website that does not
          adapt properly across screen sizes can negatively impact user
          experience and engagement.
        </p>

        <p>
          Ponvizhi focuses on responsive and mobile-first web design to ensure
          websites perform smoothly across all modern devices. Every project is
          developed with clean layouts, intuitive navigation, better
          readability, and optimized performance to create a seamless browsing
          experience.
        </p>

        <p>
          A responsive website helps businesses build trust, improve engagement,
          and deliver a more professional online presence.
        </p>

        <h3>
          Why Choose Ponvizhi as Your Freelance Web Designer Bangalore?
        </h3>

        <p>
          Businesses choose Ponvizhi because of the attention to detail,
          frontend expertise, and commitment to quality website development.
          Every project is handled with a structured approach that focuses on
          design quality, responsiveness, performance, and user experience.
        </p>

        <p>
          From corporate business websites and portfolio websites to landing
          pages and redesign projects, each website is designed to reflect the
          brand professionally while maintaining modern web standards.
        </p>

        <p>
          Clients appreciate the ability to understand business requirements
          clearly and transform ideas into functional and visually engaging
          digital experiences.
        </p>

        <h3>Frontend Development Expertise for Modern Websites</h3>

        <p>
          Modern website development requires more than attractive visuals.
          Strong frontend development is essential for performance,
          responsiveness, accessibility, and smooth user interaction.
        </p>

        <p>
          As an experienced freelance web designer Bangalore professional,
          Ponvizhi brings solid frontend development expertise using modern
          technologies and frameworks. Websites are developed with clean code,
          optimized structure, and scalable design practices to ensure long-term
          usability and performance.
        </p>

        <p>
          With expertise in Angular, JavaScript, HTML5, CSS3, and modern
          frontend technologies, Ponvizhi develops websites that are
          interactive, responsive, and optimized for better user experience.
        </p>

        <h3>
          Website Optimization and Performance-Focused Approach
        </h3>

        <p>
          A website without proper optimization may struggle to perform
          effectively online. Ponvizhi also focuses on improving website
          performance through technical optimization, responsive development,
          and SEO-friendly practices.
        </p>

        <p>
          By improving mobile usability, website structure, loading speed, and
          user experience, businesses can improve their online visibility and
          create a better experience for visitors.
        </p>

        <p>
          The focus is not only on creating visually appealing websites but also
          on building websites that support long-term digital growth.
        </p>

        <h3>Hire a Reliable Web Designer Bangalore</h3>

        <p>
          Choosing the right web designer Bangalore professional can make a
          major difference in your online success. A professionally designed
          website improves brand credibility, increases engagement, and helps
          convert visitors into potential customers.
        </p>

        <p>
          Ponvizhi combines frontend expertise, responsive web design knowledge,
          SEO understanding, and user-focused development strategies to create
          websites that deliver real business value.
        </p>

        <p>
          If you are searching for a dependable freelance web designer Bangalore
          expert who can create modern, responsive, SEO-friendly, and
          performance-driven websites, Ponvizhi offers the right combination of
          creativity, technical skills, and professional experience to help your
          business grow online.
        </p>
      </div>

      <button
        className="toggleBtn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
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
    <section className="section_contact is-gap" id="blog">
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
