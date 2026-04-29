import { getAllBlogs } from "@/lib/blog";

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <div>
      <h1>Blog</h1>

      {blogs.map((blog) => (
        <div key={blog.slug}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}