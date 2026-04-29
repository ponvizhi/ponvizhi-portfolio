import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export function getAllBlogs() {
  const files = fs.readdirSync(blogDir);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");

    const fileContent = fs.readFileSync(
      path.join(blogDir, file),
      "utf-8"
    );

    const { data } = matter(fileContent);

    return {
      slug,
      ...data,
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