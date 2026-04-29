import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export function getAllBlogs() {
  const files = fs.readdirSync(blogDir);

  // get first paragraph as excerpt
function generateExcerpt(content: string) {
  return content
    .replace(/!\[.*?\]\(.*?\)/g, "") // remove images
    .split("\n")
    .find((line) => line.trim().length > 0)
    ?.slice(0, 160)
    || "";
}

// extract first image as thumbnail
function getThumbnail(content: string) {
  const match = content.match(/!\[.*?\]\((.*?)\)/);
  return match?.[1] || "/default.jpg";
}

  return files.map((file) => {
    const slug = file.replace(".mdx", "");

    const fileContent = fs.readFileSync(
      path.join(blogDir, file),
      "utf-8"
    );

    const { data, content } = matter(fileContent);

    return {
      slug,
      ...data,
      content,
       excerpt: (data as any).excerpt || generateExcerpt(content),
      thumbnail: getThumbnail(content),
    };
  });
}

export function getBlogBySlug(slug: string) {
  const fullPath = path.join(blogDir, `${slug}.mdx`);

  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(fileContent);

  return {
    slug,
    ...data,
    content,
  };
}