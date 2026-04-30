import { getAllBlogs } from "@/lib/blogs";
import HomeClient from "./HomeClient";

export default function Page() {
  const blogs = getAllBlogs();

  return <HomeClient blogs={blogs} />;
}