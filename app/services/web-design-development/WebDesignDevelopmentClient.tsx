"use client";

import { useEffect, useRef, useState } from "react";
import RippleButton from "@/components/RippleButton";
import styles from "../../styles/service_style.module.css";
import ServicesSection from "@/components/serviceiOffer";
import ProcessCarousel from "@/components/processSlider";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";

const faqs2 = [
  {
    question: "How long does a typical website project take?",
    answer: "Website development timelines vary based on scope, but most projects run between 8 to 16 weeks. We’ll give you a clear roadmap and regular updates every step of the way.",
  },
  {
    question: "How much does web development cost in Bangalore?",
    answer: (
      <>
        For mid-sized organisations, a professionally scoped web development project typically starts from $20,000 and scales with the number of templates, custom functionality, integrations, and compliance requirements involved. We provide a clear scope and fixed-price quote before any work begins. You can also read our{" "}
        <a
          href="https://www.ponvizhiweb.com/blog/freelance-web-developer-bangalore-guide"
          target="_blank"
          rel="noopener noreferrer"
        >
          freelance web developer guide Bangalore 2026
        </a>.
      </>
    ),
  },
  {
    question: "Do you work with existing websites or only build new ones?",
    answer: "We do both. Whether you’re looking to refresh your current site or start from scratch, we’ll assess what makes the most sense for your goals and budget.  ",
  },
  {
    question: "What accessibility standards do you follow?",
    answer: "We build to WCAG 2.2 AA standards by default and can support AAA if required. Accessibility is embedded into our process from design through to QA.",
  },
  {
    question: "Which CMS platforms do you build on?",
    answer: "Our team works across the open-source web development stack, such as WordPress, Wagtail, Joomla, and Drupal. For organisations that have outgrown off-the-shelf platforms, we also build fully custom applications and platforms. ",
  },
  {
    question: "Will we be able to manage content ourselves?",
    answer: "Yes. We build user-friendly CMS setups and provide training so your team can easily manage updates in-house.",
  },
  {
    question: "What happens after launch?",
    answer: " We offer ongoing hosting and support services covering managed infrastructure, security monitoring, CMS updates, and a dedicated support desk. Post-launch is when many agencies disappear, but we consider the partnership just getting started.",
  },
];

export default function WebDesignDevelopment() {
  const sectionRef = useRef(null);
const [isVisible, setIsVisible] = useState(false);
const [isDeepVisible, setIsDeepVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);

      // 👇 NEW: trigger when more of section is visible
      if (entry.intersectionRatio > 0.9) {
        setIsDeepVisible(true);
      } else {
        setIsDeepVisible(false);
      }
    },
    {
      threshold: [0.3, 0.9], // 👈 important
    }
  );

  const currentRef = sectionRef.current;
  if (currentRef) observer.observe(currentRef);

  return () => {
    if (currentRef) observer.unobserve(currentRef);
  };
}, []);

  return (
    <>
    
      <section className={`${styles.servicepageBanner}`}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.bannerGrid}>
              <div className={styles.left}>
                <h1>Custom Web Design and Development Services</h1>
                <p>
                  I design and develop fast, responsive, and SEO-friendly websites tailored to your business goals. From business websites and landing pages to custom web applications and ecommerce stores, every project is built with a strong focus on performance, usability, and conversions.
                </p>
                <p>Whether you need a brand-new website or want to improve an existing one, I create scalable solutions that help businesses build credibility and grow online.</p>
                <div style={{ margin: "auto" }}>
                  <RippleButton
                    title="Request a Quote"
                    variant="solid"
                    to="/#contact"
                  />
                </div>
              </div>

              <div className={styles.right}>
                <div className={styles.bannerImageWrap}>
                  <img
                    src="/images/web-design-development-layout.png"
                    className={styles.bannerImage}
                    alt="Web design layout"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION WITH SCROLL TRIGGER */}
      <section className={`${styles.serviceSecTwo} ${styles.isInnerGap}`}>
        <div className="container-large">
          <h2>Built for Performance, Usability, and Growth</h2>
          <p>Every website is designed with a strong focus on speed, responsiveness, SEO, and user experience. Whether it’s a business website, ecommerce store, landing page, or custom web application, the goal is to create a website that not only looks professional but also supports real business growth. </p>

          <div
  ref={sectionRef}
  className={`${styles.serviceLogoSection}
    ${isVisible ? styles.ozScroll : ""}
    ${isDeepVisible ? styles.deepScroll : ""}
    ${styles.serviceTwo}`
  }>
            <div className={styles.wpb_wrapper}>
              <div className={styles.animLogo}>
                <ul className={styles.topLogo}>
                  <li>
                    <img
                      src="/images/tech-logo-6.svg"
                      alt="Angular"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/tech-logo-5.svg"
                      alt="shopify"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/tech-logo-4.svg"
                      alt="wordpress"
                    />
                  </li>
                </ul>

                <p>I work with modern frameworks, CMS platforms, and frontend technologies to build scalable and easy-to-manage websites tailored to different business needs.</p>

                <ul className={styles.botLogo}>
                  <li>
                    <img
                      src="/images/tech-logo-3.svg"
                      alt="css3"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/tech-logo-2.svg"
                      alt="Javascript"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/tech-logo-1.svg"
                      alt="HTML5"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <section  className={`${styles.process} ${styles.isInnerGap}`}>
        <div className="container-large">
        <div className="grid processSecGrid gap-8 items-center">
        <div className={styles.leftTitle}>
        <h2>Web Design & Development Process</h2>
        <p>Every project follows a structured development process focused on usability, performance, scalability, and business goals. From planning and design to development and launch, each stage is carefully handled to ensure a smooth and efficient workflow.</p>
        <RippleButton title="Book a Free Call" variant="solid" to="/#contact"/>
        </div>
        <ProcessCarousel />
        </div>
        </div>
      </section>
      <section className={`${styles.secCallAction} ${styles.isInnerGap}`}>
        <div className="container-large">
          <ul className={styles.teamEllipse}><li><img width="640" height="360" src="/images/Ellipse-circle.svg" alt="ellipse circle"></img></li><li><img width="640" height="360" src="/images/Ellipse-circle.svg" alt="ellipse circle"></img></li><li><img width="640" height="360" src="/images/Ellipse-circle.svg" alt="ellipse circle"></img></li><li><img width="640" height="360" src="/images/Ellipse-circle.svg" alt="ellipse circle"></img></li><li><img width="640" height="360" src="/images/Ellipse-circle.svg" alt="ellipse circle"></img></li></ul>
          <div className={styles.callActionWrapper}> 
          <div className={styles.hoverWrap}> 
           <div className={styles.hoverWrapInner}>
            <svg xmlns="http://www.w3.org/2000/svg" width="512px" height="512px" viewBox="0 0 512 512">
              <circle cx="256" cy="256" r="254"></circle>
              <g className={styles.rotateText}>
                <circle fill="#e56b6f" cx="65" cy="256" r="15.822"></circle>
                <circle fill="#e56b6f" cx="448.896" cy="256.591" r="15.822"></circle>
                <g>
                  <path fill="#FFFFFF" d="M82.48,186.881l-5.275-2.079l7.905-20.059l24.813,9.778l-1.745,4.429l-6.791-1.096    c3.563,5.216,4.009,11.21,1.339,17.983c-2.533,6.426-6.803,10.837-12.814,13.233c-5.95,2.371-12.68,2.075-20.192-0.885    c-7.336-2.891-12.411-7.198-15.222-12.921c-2.784-5.661-2.808-11.966-0.07-18.913c2.07-5.253,5.096-9.176,9.078-11.771    c4.008-2.533,8.385-3.266,13.13-2.199l-1.919,6.015c-3.339-0.563-6.283,0.033-8.83,1.787c-2.547,1.755-4.523,4.413-5.926,7.973    c-2.053,5.21-1.977,9.917,0.228,14.122c2.206,4.206,6.261,7.471,12.165,9.797c5.645,2.225,10.738,2.603,15.279,1.131    c4.525-1.426,7.771-4.636,9.739-9.629c1.54-3.908,1.707-7.578,0.503-11.013c-1.205-3.434-3.641-6.35-7.311-8.75l-2.54-1.001    L82.48,186.881z"></path>
                  <path fill="#FFFFFF" d="M98.848,151.234l13.698,10.32l17.691-23.481l4.528,3.412l-21.608,28.681l-39.807-29.991l21.229-28.178    l4.529,3.412l-17.313,22.978l12.523,9.436l15.964-21.189l4.528,3.412L98.848,151.234z"></path>
                  <path fill="#FFFFFF" d="M103.914,101.943L134.7,76.672l3.598,4.382L125.42,91.625l28.025,34.14l-5.032,4.131l-28.025-34.141    l-12.877,10.571L103.914,101.943z"></path>
                  <path fill="#FFFFFF" d="M191.064,103.438l-5.937,2.67l-20.446-45.453l5.937-2.67L191.064,103.438z"></path>
                  <path fill="#FFFFFF" d="M227.874,82.808l-9.588-39.523l5.986-1.452l11.75,48.435l-7.211,1.749l-34.845-33.18l9.539,39.319    l-5.986,1.452l-11.75-48.435l7.007-1.7L227.874,82.808z"></path>
                  <path fill="#FFFFFF" d="M260.424,39.566l39.582,4.431l-0.631,5.635l-16.557-1.854l-4.912,43.896l-6.471-0.724l4.914-43.896    l-16.557-1.853L260.424,39.566z"></path>
                  <path fill="#FFFFFF" d="M314.863,102.298c-6.493-2.49-10.888-6.799-13.186-12.928c-2.375-6.058-2.184-12.683,0.573-19.872    c2.724-7.102,6.994-12.112,12.812-15.03c5.772-2.933,11.905-3.156,18.398-0.667c6.535,2.507,10.99,6.79,13.365,12.848    c2.314,6.086,2.118,12.658-0.588,19.717c-2.774,7.233-7.048,12.317-12.821,15.25C327.539,104.561,321.355,104.788,314.863,102.298    z M307.551,87.349c1.599,4.562,4.752,7.745,9.458,9.549c4.706,1.805,9.178,1.546,13.418-0.777    c4.179-2.296,7.38-6.341,9.602-12.137c2.189-5.708,2.467-10.799,0.835-15.274c-1.616-4.518-4.756-7.671-9.418-9.459    c-4.663-1.788-9.127-1.551-13.393,0.712c-4.207,2.236-7.403,6.208-9.593,11.915C306.255,77.63,305.951,82.787,307.551,87.349z"></path>
                  <path fill="#FFFFFF" d="M368.969,129.485c-4.49,0.297-9.158-1.38-14.002-5.031c-4.845-3.651-7.724-7.662-8.638-12.032    c-1.008-4.324,0.133-8.666,3.419-13.026l20.519-27.224l5.198,3.918l-20.645,27.391c-2.106,2.795-2.865,5.584-2.273,8.367    c0.59,2.782,2.563,5.438,5.917,7.966c3.354,2.528,6.449,3.693,9.287,3.494c2.837-0.199,5.311-1.695,7.417-4.491l20.645-27.391    l5.199,3.918l-20.519,27.224C377.234,126.892,373.394,129.197,368.969,129.485z"></path>
                  <path fill="#FFFFFF" d="M386.96,156.365c-4.233-5.458-5.677-11.277-4.33-17.46c1.31-6.153,5.025-11.604,11.146-16.353    c6.121-4.748,12.302-6.944,18.544-6.587c6.25,0.291,11.462,3.127,15.638,8.512c3.203,4.129,4.849,8.611,4.937,13.446    c0.067,4.731-1.592,8.912-4.978,12.542l-4.075-5.254c2.087-2.564,3.101-5.329,3.044-8.296c-0.058-2.967-1.174-5.853-3.347-8.655    c-3.089-3.983-6.908-6.012-11.454-6.087c-4.548-0.076-9.292,1.803-14.232,5.635c-4.979,3.861-8.024,8.025-9.137,12.491    c-1.114,4.466-0.125,8.69,2.964,12.673c2.459,3.171,5.366,5.035,8.723,5.592c3.354,0.556,6.951-0.269,10.79-2.478l3.947,5.088    c-5.272,3.026-10.407,4.115-15.405,3.267C394.735,163.592,390.478,160.9,386.96,156.365z"></path>
                  <path fill="#FFFFFF" d="M441.465,193.989l18.966-7.809l2.479,6.02l-46.087,18.975l-2.479-6.02l21.878-9.008l-10.047-24.403    l-21.878,9.008l-2.479-6.02l46.086-18.975l2.479,6.02l-18.965,7.809L441.465,193.989z"></path>
                </g>
                <g>
                  <path fill="#FFFFFF" d="M74.576,326.438l5.293-2.033l7.731,20.126l-24.896,9.563l-1.707-4.443l5.746-3.782    c-6.151-1.437-10.532-5.553-13.142-12.349c-2.477-6.447-2.311-12.585,0.5-18.414c2.782-5.769,7.942-10.1,15.479-12.995    c7.361-2.827,14.012-3.083,19.952-0.766c5.878,2.291,10.157,6.921,12.835,13.892c2.025,5.271,2.446,10.208,1.266,14.812    c-1.242,4.575-3.973,8.074-8.191,10.495l-2.651-5.73c2.841-1.842,4.608-4.271,5.3-7.285c0.691-3.016,0.351-6.31-1.021-9.881    c-2.008-5.228-5.247-8.646-9.713-10.254c-4.468-1.609-9.664-1.274-15.587,1.001c-5.664,2.176-9.672,5.34-12.025,9.494    c-2.371,4.109-2.594,8.669-0.669,13.68c1.506,3.92,3.863,6.738,7.073,8.456c3.209,1.716,6.976,2.219,11.302,1.507l2.548-0.979    L74.576,326.438z"></path>
                  <path fill="#FFFFFF" d="M94.582,361.919l-13.785,10.202l17.491,23.632l-4.558,3.373l-21.364-28.864l40.061-29.65l20.989,28.357    l-4.558,3.373l-17.116-23.125l-12.604,9.328l15.783,21.325l-4.558,3.373L94.582,361.919z"></path>
                  <path fill="#FFFFFF" d="M134.544,370.488l30.567,25.535l-3.635,4.352l-12.786-10.681l-28.317,33.898l-4.996-4.173l28.317-33.899    l-12.786-10.681L134.544,370.488z"></path>
                  <path fill="#FFFFFF" d="M168.929,453.277l-5.914-2.722l20.835-45.275l5.914,2.721L168.929,453.277z"></path>
                  <path fill="#FFFFFF" d="M218.713,459.494l9.927-39.44l5.974,1.504l-12.165,48.332l-7.196-1.811l-15.377-45.592L190,461.724    l-5.974-1.504l12.165-48.333l6.992,1.76L218.713,459.494z"></path>
                  <path fill="#FFFFFF" d="M253.46,422.885l39.619-4.094l0.583,5.64l-16.572,1.713l4.541,43.936l-6.476,0.669l-4.541-43.936    l-16.571,1.713L253.46,422.885z"></path>
                  <path fill="#FFFFFF" d="M331.816,459.118c-6.514,2.434-12.66,2.115-18.44-0.956c-5.792-2.967-10.035-8.059-12.729-15.271    c-2.662-7.125-2.779-13.707-0.353-19.745c2.384-6.021,6.831-10.249,13.346-12.683c6.558-2.449,12.731-2.189,18.523,0.777    c5.764,3.027,9.969,8.082,12.614,15.164c2.711,7.257,2.875,13.896,0.491,19.917C342.814,452.421,338.33,456.686,331.816,459.118z     M316.438,452.758c4.219,2.36,8.689,2.657,13.41,0.894c4.722-1.764,7.901-4.919,9.54-9.467c1.611-4.488,1.332-9.639-0.841-15.453    c-2.139-5.727-5.303-9.726-9.488-11.998c-4.203-2.315-8.644-2.6-13.321-0.853c-4.678,1.748-7.866,4.882-9.564,9.402    c-1.671,4.461-1.438,9.554,0.702,15.28C309.032,446.334,312.219,450.399,316.438,452.758z"></path>
                  <path fill="#FFFFFF" d="M393.642,418.229c-0.988,4.391-3.92,8.391-8.795,12.001c-4.876,3.611-9.538,5.234-13.988,4.871    c-4.432-0.259-8.272-2.584-11.521-6.972l-20.288-27.396l5.231-3.874l20.413,27.564c2.083,2.813,4.543,4.331,7.379,4.553    c2.835,0.223,5.941-0.916,9.316-3.416s5.37-5.138,5.984-7.916c0.614-2.776-0.12-5.572-2.203-8.386l-20.414-27.563l5.232-3.875    l20.288,27.396C393.498,409.568,394.62,413.905,393.642,418.229z"></path>
                  <path fill="#FFFFFF" d="M427.078,389.12c-4.279,5.421-9.581,8.221-15.907,8.4c-6.287,0.208-12.472-2.088-18.553-6.889    c-6.079-4.8-9.697-10.271-10.852-16.416c-1.221-6.137,0.28-11.878,4.502-17.226c3.238-4.102,7.193-6.776,11.865-8.024    c4.576-1.203,9.033-0.597,13.371,1.816l-4.121,5.219c-2.99-1.408-5.918-1.729-8.785-0.96c-2.866,0.77-5.399,2.546-7.597,5.329    c-3.123,3.956-4.174,8.151-3.154,12.582c1.02,4.433,3.983,8.586,8.892,12.46c4.944,3.904,9.719,5.86,14.32,5.866    c4.603,0.008,8.466-1.968,11.589-5.924c2.486-3.149,3.598-6.42,3.331-9.811c-0.266-3.391-1.932-6.684-4.999-9.879l3.99-5.054    c4.205,4.39,6.496,9.112,6.875,14.167C432.224,379.835,430.636,384.615,427.078,389.12z"></path>
                  <path fill="#FFFFFF" d="M432.8,316.168l-18.897-7.972l2.53-5.998l45.921,19.371l-2.53,5.998l-21.8-9.195l-10.257,24.315    l21.8,9.195l-2.53,5.998l-45.922-19.371l2.53-5.998l18.897,7.972L432.8,316.168z"></path>
                </g>
              </g>
              <g transform="translate(-21765.719 9078.282)">
                <g transform="translate(-908.763 -488.633)">
                  <circle fill="#e56b6f" cx="22930.482" cy="-8333.649" r="134.873"></circle>
                  <circle fill="none" stroke="#e56b6f" strokeWidth="2" cx="22930.482" cy="-8333.649" r="131.761"></circle>
                </g>
                <path fill="#010101" d="M22056.119-8850.728L22056.119-8850.728v-6.743h-69.771v9.597h53.432l-23.604,23.603l-29.828,29.828v6.743   h6.744l53.432-53.431v53.431h9.596V-8850.728L22056.119-8850.728z"></path>
              </g>
              </svg>
           </div>
          </div>
        <div className={styles.caright}>
          <h3 className="text-white">
            Develop a fast, <span className="text-primary">SEO-focused, and user-friendly website</span> that strengthens your brand and improves customer engagement.</h3>
          <RippleButton title="Book a Free Call" variant="solid" to="/#contact"/>
          </div>
        </div>
        </div>
      </section>
      <section  className={`${styles.whyWebsite} ${styles.isInnerGap}`}>
        <div className="container-large">
          <h2>How a Professional Website Supports Business Growth</h2>
          <p>A professionally developed website does more than establish an online presence. It helps businesses build credibility, improve customer engagement, support marketing efforts, and create new opportunities for growth.</p>
          <ol className={styles.serviceBenifits}>
            <li>
              <h4>Build Online Visibility</h4>
              <p>Help potential customers discover your business online and learn more about your services, products, and brand.</p>
            </li>
            <li>
              <h4>Improve Customer Communication</h4>
              <p>Provide a central place for customers to contact you, submit enquiries, and access important business information.</p>
            </li>
            <li>
              <h4>Support Marketing & SEO</h4>
              <p>Strengthen digital marketing efforts through SEO, Google Ads, social media campaigns, and content marketing.</p>
            </li>
            <li>
              <h4>Track User Insights</h4>
              <p>Use analytics tools to understand visitor behaviour, measure performance, and improve business decisions.</p>
            </li>
            <li>
              <h4>Generate Leads 24/7</h4>
              <p>Allow potential customers to discover and contact your business anytime through enquiry forms and call-to-actions.</p>
            </li>
            <li>
              <h4>Build Trust & Credibility</h4>
              <p>A modern and professional website helps establish trust and improves your overall brand perception.</p>
            </li>
            <li>
              <h4>Stay Competitive</h4>
              <p>Stand out from competitors with a fast, responsive, and user-focused website tailored to your business goals.</p>
            </li>
          </ol>
        </div>
      </section>
      <section  className={`${styles.maintenance} ${styles.isInnerGap}`}>
        <div className="container-large">
          <div className={styles.maintenanceWrapper}>
            <div>
          <img src="/images/web-maintanane.png"></img>
          </div>
          <div>
          <h2>Hosting, Maintenance & Website Support</h2>
          <p>Ongoing support is important for keeping your website secure, updated, and running smoothly. In addition to design and development, reliable hosting, maintenance, and technical support services can be provided to help ensure long-term website performance.</p>

            <h3>Reliable Website Hosting</h3>

            <p>Websites can be hosted on secure and high-performance cloud infrastructure to ensure fast loading speeds, strong uptime, SSL security, backups, and stable website performance across devices and locations.</p>

            <h3>Website Maintenance & Security Updates</h3>

            <p>Regular maintenance helps keep your website secure, updated, and functioning properly. This includes CMS updates, plugin monitoring, bug fixes, form checks, and general performance monitoring.</p>

            <h3>Ongoing Website Support</h3>

            <p>Support is available for content updates, image replacements, blog uploads, landing page changes, and other website improvements whenever needed. This helps businesses keep their website current without managing technical tasks internally.</p>

</div>
</div>
        </div>
      </section>
      <section className={`${styles.faq} ${styles.isInnerGap}`}>
              <div className="container-large">
            <h2>Website Development FAQs in Bangalore</h2>
            <FAQSection faqs={faqs2} />
      </div>
      </section>
      <section className="section_contact is-gap" id="contact">
                  <div className="padding-global">
                    <div className="container-large">
                      <div className="contact_wrap is-v2">
                        <div className="padding-section-large">
                          <div className="contact_layout">
                            <div>
                            <h2>Let's create something great together.</h2>
      
      <p>Let's discuss how we can transform your digital presence and drive meaningful impact.</p>
    
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