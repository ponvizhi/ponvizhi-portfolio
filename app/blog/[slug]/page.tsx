import ContactForm from "@/components/ContactForm";
import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "../../styles/blog_style.module.css";
import rehypeRaw from "rehype-raw";
import FAQAccordion from "@/components/FAQAccordion";

type FAQ = {
  question: string;
  answer: string;
};

const faqData: Record<string, FAQ[]> = {
  "freelance-web-developer-bangalore-guide": [
    {
      question: "How much does it cost to hire a freelance web developer in Bangalore?",
      answer:
        "<p>Freelance web developer costs in Bangalore typically range from ₹10,000 to ₹1,50,000+ depending on project complexity, features, and experience level. Simple websites cost less, while custom or eCommerce sites cost more.</p>",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "<p>A basic website usually takes 1-2 weeks, while a custom or business website can take 3-6 weeks depending on requirements, revisions, and features.</p>",
    },
    {
      question: "Why should I hire a freelance web developer instead of an agency?",
      answer:
        "<p>Freelancers are often more affordable, flexible, and provide direct communication compared to agencies. Businesses prefer freelancers to reduce costs while still getting quality work.</p>",
    },
    {
      question: "What services does a freelance web developer offer?",
      answer:
        `<p>A freelance web developer can help with: Website design & development</p>
      <ul>
      <li>UI/UX improvements</li>
      <li>Website redesign</li>
      <li>SEO optimization</li>
      <li>Maintenance & support</li>
      </ul>
      <p>These services help businesses improve visibility and user experience.</p>
      `},
      {
      question: "Do freelance web developers provide SEO-friendly websites?",
      answer:
        "<p>Yes, most professional freelance developers build SEO-optimized websites with fast loading speed, mobile responsiveness, and proper structure.</p>",
    },
    {
      question: "How do I choose the best freelance web developer in Bangalore?",
      answer:
      `<p>Look for:</p>
      <ul>
      <li>Strong portfolio</li>
      <li>Client reviews</li>
      <li>Clear communication</li>
      <li>Experience in your industry</li>
      </ul>
      <p>A good developer focuses on both design and business results.</p>
      `,
    },
    {
      question: "Do you provide website maintenance after development?",
      answer:
        "<p>Yes, many freelancers offer ongoing maintenance, updates, and support to keep your website secure and up-to-date.</p>",
    },
    {
      question: "Will I own my website after development?",
      answer:
        "<p>Yes, once the project is completed and payment is done, you fully own your website and its assets.</p>",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "<p>Yes, freelance developers can improve your current website’s design, speed, and performance to increase conversions.</p>",
    },
    {
      question: "Is a website important for my business?",
      answer:
        "<p>Yes, a website increases credibility, visibility, and helps customers find your business online.</p>",
    },
  ],

  "ecommerce-website-guide": [
    {
      question: "What platform is best for e-commerce?",
      answer: "Shopify and WooCommerce are the most popular options.",
    },
  ],
};
// ✅ FIX: async params
export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({
    slug: blog.slug,
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// ✅ FIX: async params handling
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; // ✅ NO await

  const blog = getBlogBySlug(slug);

  if (!blog) return {};

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  if (!slug) return notFound();

  const blog = getBlogBySlug(slug);

  if (!blog) return notFound();

  const faqs = faqData[slug] || []; // ✅ FIX HERE

  return (
    <article>
      <div className={styles.blogdetailHeader}>
        <div className="container-large">
          <div className={styles.blogInnerSec}>
          <h1>{blog.title}</h1>
          <time className={styles.blogDate}>Published On: {blog.date}</time>
          </div>
        </div>
      </div>

      <div className="container-large">
        <div className={styles.blogWrapper}>
          <div className={styles.blogLeft}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {blog.content}
            </ReactMarkdown>

            {/* ✅ THIS NOW WORKS */}
            <h2>FAQs</h2>
            <FAQAccordion faqs={faqs} />
          </div>

          <div className={styles.blogRight}>
            <div className={styles.blogformWrapper}>
              <h3 className="text-white">Say Hi 👋</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}