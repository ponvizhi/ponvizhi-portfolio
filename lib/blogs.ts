import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 📁 Blog directory
const blogDir = path.join(process.cwd(), "content/blog");

// 🧠 Types
type BlogFrontmatter = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  author: string;
  excerpt?: string;
};

export type Blog = BlogFrontmatter & {
  slug: string;
  content: string;
  thumbnail?: string;
};

// ✂️ Generate excerpt from content
function generateExcerpt(content: string) {
  return (
    content
      .replace(/!\[.*?\]\(.*?\)/g, "") // remove images
      .split("\n")
      .find((line) => line.trim().length > 0)
      ?.slice(0, 160) || ""
  );
}

// 🖼️ Extract first image as thumbnail
function getThumbnail(content: string) {
  const match = content.match(/!\[.*?\]\((.*?)\)/);
  return match?.[1] || "/default.jpg";
}

// 📚 Get all blogs
export function getAllBlogs(): Blog[] {
  const files = fs.readdirSync(blogDir);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");

    const fileContent = fs.readFileSync(
      path.join(blogDir, file),
      "utf-8"
    );

    // ✅ Proper typing using generics
    const { data, content } = matter(fileContent);

const frontmatter = data as BlogFrontmatter;

    // ✅ Optional safety check (recommended)
    if (!data.title || !data.metaTitle) {
      throw new Error(`Invalid frontmatter in ${file}`);
    }

    return {
  slug,
  ...frontmatter,
  content,
  excerpt: frontmatter.excerpt || generateExcerpt(content),
  thumbnail: getThumbnail(content),
} as Blog;
  });
}

// 🔍 Get single blog by slug
export function getBlogBySlug(slug: string): Blog | null {
  const fullPath = path.join(blogDir, `${slug}.mdx`);

  // ✅ Prevent crash if file doesn't exist
  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf-8");

  // ✅ Proper typing
  const { data, content } = matter(fileContent);

const frontmatter = data as BlogFrontmatter;

  // ✅ Optional safety check
  if (!data.title || !data.metaTitle) {
    throw new Error(`Invalid frontmatter in ${slug}`);
  }

 return {
  slug,
  ...frontmatter,
  content,
} as Blog;
}