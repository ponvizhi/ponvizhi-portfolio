import RippleButton from "@/components/RippleButton";
import styles from "../styles/service_style.module.css";
import ProcessCarousel from "@/components/processSlider";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import Script from "next/script";

export const metadata = {
  title: "Freelance Web Developer in Bangalore | Fast & SEO Websites",
  description:
    "Freelance web developer in Bangalore building fast, SEO-friendly and high-converting websites using React, Shopify and WordPress.",
  alternates: {
    canonical: "/freelance-web-developer-bangalore",
  },
};

export default function FreelanceWebDeveloperInBangalore() {
  return (
    <>
      {/* ✅ Proper Schema */}
      <Script
        id="bangalore-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Freelance Web Developer in Bangalore",
            url: "https://www.ponvizhiweb.com/freelance-web-developer-bangalore",
            image: "https://www.ponvizhiweb.com/og-image.jpg",
            description:
              "Freelance web developer in Bangalore offering SEO-friendly, fast and high-performance websites.",
            areaServed: {
              "@type": "Place",
              name: "Bangalore",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              addressCountry: "IN",
            },
            serviceType: [
              "Web Development",
              "Shopify Development",
              "WordPress Development",
              "UI/UX Design",
            ],
          }),
        }}
      />
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Freelance Web Developer in Bangalore",
            url: "https://www.ponvizhiweb.com/freelance-web-developer-bangalore",
            areaServed: "Bangalore",
            description:
              "Freelance web developer in Bangalore offering SEO-friendly and high-performance websites.",
          }),
        }}
      />
    <section className={`${styles.serviceHero}`}>
      <div className="padding-global">
        <div className="container-large">
          <div className={`${styles.cardWrap}`}>
          <h1 className="text-white">Freelance Web Developer in Bangalore for Fast, SEO-Friendly Websites</h1>
          <p className="text-white">I help startups and small businesses in Bangalore build fast, modern, and SEO-friendly websites that generate leads and sales. Whether you need a business website, eCommerce store, or landing page, I deliver high-performance solutions using React, Angular, Shopify, and WordPress.</p>

          <p className="text-white">Based in India and working with clients across Bangalore including Whitefield, Indiranagar, Electronic City, and Koramangala.</p>
          <div style={{margin: 'auto'}}>
          <RippleButton title="Book a Free Call" variant="solid" to="#contact"/>
          </div>
          </div>
        </div>
      </div>
    </section>
    <section className={`${styles.introSec} ${styles.isInnerGap}`}>
      <div className="container-large">
        <div className="grid grid-cols-[3fr_2fr] gap-16 items-center">
          <div>
          <h2>Web Development Services in Bangalore</h2>

<p>
I am a freelance web developer and UI/UX designer helping businesses in Bangalore build professional websites that not only look great but also perform well on Google. 
Whether you need a business website, e-commerce store, or landing page, I deliver solutions tailored to your goals.
</p>

<p>
With expertise in modern technologies like React, Angular, and Shopify, I ensure your website is fast, responsive, and optimized for conversions.
</p>
</div>
<div>
    <img src="images/web-development-code-picture.webp" height="128" alt="Freelance web developer in Bangalore working on website code"></img>
</div>
        </div>
      </div>
    </section>
     <section className={`${styles.serviceSec} ${styles.isInnerGap}`}>
      <div className="container-large">
        <div className="grid grid-cols-[2fr_3fr] gap-16">
          <div className={styles.leftTitle}>
            <div className={styles.stickyDiv}>
        <h2 className="text-white">Services I Offer</h2>
        <p className="text-white">Our only call where you won't learn anything. You get setup with us and we learn about you. We take over admin stresses from you.</p>
        <RippleButton title="Book a Free Call" variant="solid" to="#contact"/>
        </div>
        </div>
<div className={styles.swiperWrapper}>
<div className={styles.swiperSlide}>
  <h4>Custom Website Development</h4>
  <p>I provide custom website development services in Bangalore, building fast, responsive, and SEO-friendly websites tailored to your business needs. From startups to growing businesses, I create websites designed to convert visitors into customers.</p>
</div>
<div className={styles.swiperSlide}>
  <h4>Angular Web Applications</h4>
  <p>As a freelance Angular developer in Bangalore, I build scalable and high-performance web applications with clean architecture, fast loading speed, and smooth user experience for modern businesses.</p>
</div>
<div className={styles.swiperSlide}>
  <h4>Shopify & E-commerce Development</h4>
  <p>I design and develop Shopify and e-commerce websites that are optimized for conversions, speed, and SEO. Perfect for businesses in Bangalore looking to sell products online and grow revenue.</p>
</div>
<div className={styles.swiperSlide}>
  <h4>WordPress Website Design</h4>
  <p>Get a professional WordPress website designed for your business in Bangalore. I create SEO-friendly, mobile-responsive websites that are easy to manage and optimized for performance.</p>
</div>
<div className={styles.swiperSlide}>
  <h4>Landing Page Design for Lead Generation</h4>
  <p>I create high-converting landing pages for businesses in Bangalore, focused on generating leads, improving user engagement, and increasing conversions through clean UI/UX design.</p>
</div>
<div className={styles.swiperSlide}>
  <h4>Website Redesign & Performance Optimization</h4>
  <p>Improve your existing website with redesign and performance optimization services. I help businesses in Bangalore enhance speed, SEO, and user experience to achieve better results online.</p>
</div>
</div>
</div>
      </div>
      </section>

      <section  className={`${styles.process} ${styles.isInnerGap}`}>
        <div className="container-large">
        <div className="grid processSecGrid gap-8 items-center">
        <div className={styles.leftTitle}>
        <h2>Our process</h2>
        <p>From concept to launch, we craft user-friendly, visually striking websites tailored to your brand.</p>
        <RippleButton title="Book a Free Call" variant="solid" to="#contact"/>
        </div>
        <ProcessCarousel />
        </div>
        </div>
      </section>

      <section className={ `${styles.caseStudy} ${styles.isInnerGap} `}>
        <div className="container-large">
        <h2>Case Studies / Projects</h2>
        <div className={styles.workGridWrap}>
          <div className={styles.wordGrid}>
            <div className={styles.cardImg}>
              <img src="/images/work1.webp"></img>
            </div>
            <div className={styles.desc}>
            <h3>Healthcare Website Redesign & Optimization</h3>
            <h4><b>Project Type:</b> Healthcare Website | UI/UX | Performance Optimization</h4>
              <h5>Overview:</h5>
              <p>Redesigned and developed a healthcare website to improve user trust, navigation, and performance.</p>
              <h5>Challenge:</h5>
              <ul>
                <li>Outdated design</li>
                <li>Slow loading speed</li>
                <li>Poor mobile experience</li>
                <li>Unclear service structure</li>
              </ul>
              <h5>Solution:</h5>
              <ul>
                <li>Designed a clean, modern UI focused on trust and clarity</li>
                <li>Improved navigation to highlight key services</li>
                <li>Optimized performance for faster loading</li>
                <li>Built fully responsive layout for all devices</li>
              </ul>
              <h5>Results:</h5>
              <ul>
                <li>Faster page load time</li>
                <li>Reduced page load time by 60% and increased user engagement by 35%</li>
                <li>Better engagement with service pages</li>
              </ul>
            </div>
          </div>

          <div className={styles.wordGrid}>
            <div className={styles.cardImg}>
              <img src="/images/work2.webp"></img>
            </div>
            <div className={styles.desc}>
            <h3>WordPress Interior Website Development</h3>
            <h4><b>Project Type:</b> WordPress Development | UI Implementation | Performance</h4>
              <h5>Overview:</h5>
              <p>Developed a responsive WordPress website by converting Figma designs into a fully functional site.</p>
              <h5>Challenge:</h5>
              <ul>
                <li>Needed pixel-perfect UI implementation</li>
                <li>Maintain design consistency</li>
                <li>Ensure performance and responsiveness</li>
              </ul>
              <h5>Solution:</h5>
              <ul>
                <li>Converted Figma designs into clean, responsive UI</li>
                <li>Ensured cross-device compatibility</li>
                <li>Collaborated with design and backend teams</li>
                <li>Optimized frontend for performance</li>
              </ul>
              <h5>Results:</h5>
              <ul>
                <li>Accurate design implementation</li>
                <li>Smooth and consistent user experience</li>
                <li>Improved site responsiveness and usability</li>
              </ul>
            </div>
          </div>

          <div className={styles.wordGrid}>
            <div className={styles.cardImg}>
              <img src="/images/work3.webp"></img>
            </div>
            <div className={styles.desc}>
            <h3>Shopify eCommerce Website</h3>
            <h4><b>Project Type:</b> Shopify Development | eCommerce | UI/UX</h4>
              <h5>Overview:</h5>
              <p>Developed a Shopify-based eCommerce website for a perfume brand to improve product presentation and user experience.</p>
              <h5>Challenge:</h5>
              <ul>
                <li>Needed visually appealing product pages</li>
                <li>Improve mobile shopping experience</li>
                <li>Optimize navigation for conversions</li>
              </ul>
              <h5>Solution:</h5>
              <ul>
                <li>Customized Shopify theme</li>
                <li>Built responsive product and collection pages</li>
                <li>Improved layout for better product visibility</li>
                <li>Enhanced user journey for browsing and purchasing</li>
              </ul>
              <h5>Results:</h5>
              <ul>
                <li>Improved mobile usability</li>
                <li>Better product presentation</li>
                <li>Smoother shopping experience</li>
              </ul>
            </div>
          </div>

        </div>
        </div>
      </section>
            <section className={`${styles.Loation} ${styles.isInnerGap}`}>
        <div className="container-large">
         
<h2>Why Choose Me?</h2>

<ul className={styles.whyToChoose}>
<li>Fast and performance-optimized websites</li>
<li>SEO-friendly structure for better Google ranking</li>
<li>Mobile-first and responsive design</li>
<li>Clean UI/UX for better user experience</li>
<li>Direct communication (no middleman)</li>
<li>Affordable pricing for startups and small businesses</li>
</ul>
<hr className={styles.emptySpace}></hr>         
<h2>Web Development Services Across Bangalore</h2>
<p>I provide freelance web development services across all major areas in Bangalore, including:</p>
<ul className={styles.defaultUl}>
<li>Whitefield</li>
<li>Indiranagar</li>
<li>Electronic City</li>
<li>Koramangala</li>
<li>Marathahalli</li>
<li>HSR Layout</li>
</ul>
<p>Whether you're a startup, small business, or entrepreneur, I help you build a strong online presence with high-performing websites.</p>
<hr className={styles.emptySpace}></hr>   
<h2>How I Build High-Performance Websites</h2>
<p>Creating a successful website is more than just design. I focus on:</p>
<ul className={styles.defaultUl}>
  <li><b>Speed Optimization -</b> Fast-loading websites for better user experience and SEO</li>
  <li><b>Mobile-First Design -</b> Fully responsive across all devices</li>
  <li><b>SEO-Friendly Structure -</b> Clean code and proper hierarchy</li>
  <li><b>Conversion-Focused UI -</b> Designed to turn visitors into customers</li>
  </ul>
  <p>Every website is built with performance, usability, and business growth in mind.</p>
        </div>
      </section>
       <section className={`${styles.faq} ${styles.isInnerGap}`}>
        <div className="container-large">
      <h2>Website Development FAQs in Bangalore</h2>
      <FAQSection></FAQSection>
</div>
</section>
      <section className="section_contact is-gap" id="contact">
            <div className="padding-global">
              <div className="container-large">
                <div className="contact_wrap is-v2">
                  <div className="padding-section-large">
                    <div className="contact_layout">
                      <div>
                      <h2>Hire a Freelance Web Developer in Bangalore Today</h2>

<p>
If you're looking for a reliable freelance web developer in Bangalore, I’m here to help you build a website that drives results.
</p>

<p>
Let's discuss your project and turn your ideas into a high-performing website.
</p>

<a href="https://wa.me/919840385621" target="_blank">📞 Get Free Consultation</a>
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