"use client";

import RippleButton from "@/components/RippleButton";
import styles from "../app/styles/service_style.module.css";

export default function ServicesSection() {
  return (
    <section className={`${styles.serviceSec} ${styles.isInnerGap}`}>
      <div className="container-large">
        <div className={styles.serviceGrid}>
          
          <div className={styles.leftTitle}>
            <div className={styles.stickyDiv}>
              <h2 className="text-white">Website Development Services</h2>
              <p className="text-white">I provide custom web design and development solutions tailored to different business needs — from company websites and landing pages to ecommerce platforms and scalable web applications.</p>
              <RippleButton
                title="Book a Free Call"
                variant="solid"
                to="/#contact"
              />
            </div>
          </div>

          <div className={styles.swiperWrapper}>
            <div className={styles.swiperSlide}>
              <h4>Custom Website Development</h4>
              <p>Custom-built websites designed for performance, responsiveness, and long-term scalability. Each website is developed with clean code, modern UI/UX principles, and SEO best practices to help businesses build a strong online presence. </p>
            </div>

            <div className={styles.swiperSlide}>
              <h4>Angular Web Application Developmen</h4>
              <p>Scalable and high-performance Angular applications built for dashboards, portals, SaaS platforms, and custom business solutions. Focused on maintainable architecture, speed, and user experience.</p>
            </div>

            <div className={styles.swiperSlide}>
              <h4>Shopify & Ecommerce Development</h4>
              <p>Professional ecommerce websites designed to improve user experience and increase conversions. From Shopify store setup to custom storefront development, every ecommerce project is optimized for mobile responsiveness, performance, and SEO.</p>
            </div>

            <div className={styles.swiperSlide}>
              <h4>WordPress Website Design</h4>
              <p>Custom WordPress websites that are easy to manage, responsive across devices, and optimized for speed and search engines. Suitable for business websites, blogs, service companies, and content-driven platforms.</p>
            </div>

            <div className={styles.swiperSlide}>
              <h4>Landing Page Design</h4>
              <p>Conversion-focused landing pages designed to support marketing campaigns, lead generation, and product promotions. Built with clear user flow, fast loading performance, and mobile-first design.</p>
            </div>

            <div className={styles.swiperSlide}>
              <h4>Website Redesign & Optimization</h4>
              <p>Improve outdated websites with modern design, better performance, mobile responsiveness, and SEO optimization. Website audits, UI improvements, speed optimization, and structure refinement help create a better user experience and stronger search visibility.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}