import { getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

// ✅ REQUIRED DEFAULT EXPORT
export default function BlogPostPage({ params }: Props) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) return notFound();

  return (
    <article>
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>

      {/* For now plain content */}
      <div>{blog.content}</div>
    </article>
  );
}