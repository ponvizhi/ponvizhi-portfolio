import { getAllBlogs } from "@/lib/blogs";
import styles from "../styles/service_style.module.css";
import Link from "next/link";

export const metadata = {
  title: "Blog | PonvizhiWeb",
  description:
    "Read blogs about web design, development, SEO, UI/UX and business websites.",
  alternates: {
    canonical: "https://www.ponvizhiweb.com/blog",
  },
};

export default function BlogPage() {
  // Get blogs and ensure newest first
  const blogs = getAllBlogs().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // blog (latest)
  const recentBlog = blogs[0];

  // remaining blogs
  const otherBlogs = blogs.slice(1);

  return (
    <>
      {/* Recent Blog Section */}
      <section className={ `${styles.recentBlog} ${styles.isInnerGap}`}>
        <div className="container-large">
          <h1 className={styles.srOnly}>Web Design & Development Blog</h1>

            <h2>Recent Blog</h2>

            {recentBlog && (
              <article className={styles.blogList}>
                <div className="blogListHeader">
                  <img src={recentBlog.thumbnail} alt={recentBlog.title} />
                </div>
                <div className="blogListContent">
                  <h3>{recentBlog.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {recentBlog.excerpt}
                  </p>
                  <Link
                    href={`/blog/${recentBlog.slug}`}
                    className="blog_link w-inline-block"
                  >
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="inherit"
                    >
                      <path
                        d="M20 12L4 12M20 12C20 10.682 15 7 15 7M20 12C20 13.318 15 17 15 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </article>
            )}
          </div>  
      </section>

      {/* All Blogs Section */}
      {otherBlogs.length > 0 && (
      <section className={ `${styles.allBlog} ${styles.isInnerGap}`}>
        <div className="container-large">
            <h2>All Blog</h2>

            <div className="blogListingGrid">
              {otherBlogs.map((blog) => (
                <article key={blog.slug} className="blogList">
                  <div className="blogListHeader">
                    <img src={blog.thumbnail} alt={blog.title} />
                  </div>

                  <div className="blogListContent">
                    <h3 className="line-clamp-2">{blog.title}</h3>

                    <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <a
                      href={`/blog/${blog.slug}`}
                      className="blog_link w-inline-block"
                    >
                      Read More{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 24 24"
                        fill="inherit"
                      >
                        <path
                          d="M20 12L4 12M20 12C20 10.682 15 7 15 7M20 12C20 13.318 15 17 15 17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
        </div>
      </section>
      )}
    </>
  );
}