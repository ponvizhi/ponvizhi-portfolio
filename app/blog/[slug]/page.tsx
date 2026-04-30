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
      question: "How much does it cost to hire a web developer in Bangalore?",
      answer:
        "It typically ranges from ₹10,000 to ₹1,00,000+ depending on complexity.",
    },
    {
      question: "How long does it take?",
      answer:
        "Basic: 5–10 days, Business: 2–4 weeks, E-commerce: 3–6 weeks.",
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