import Link from "next/link";
import styles from "../styles/service_style.module.css";

export default function ServicesPage() {
  return (
    <section  className={ `${styles.servicePageSec} ${styles.isInnerGap}`}>
    <div className="container-large">
    <h2>Services</h2>
    <div className={styles.servicesCard}>
                      <Link href="/services/web-design-development" className={styles.scard}>
                        <div className={styles.categoryInfo}>
                        <img src="images/service1image.png" loading="lazy" className="card_image" alt="Web Design Service"></img>
                        </div>
                        <div className={styles.cardContentWrap}>
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
                      </Link>
                      <div className={styles.scard}>
                        <div className={styles.categoryInfo}>
                        <img src="images/service2image.png" loading="lazy" className="card_image" alt="Performance Optimize Service"></img>
                        </div>
                        <div className={styles.cardContentWrap}>
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
                      <div className={styles.scard}>
                        <div className={styles.categoryInfo}>
                        <img src="images/service3image.png" loading="lazy" className="card_image" alt="Maintenance Service"></img>
                        </div>
                        <div className={styles.cardContentWrap}>
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
                    </section>
  );
}