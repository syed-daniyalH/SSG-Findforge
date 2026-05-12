import { getBlogCards, getBlogFilterCategories } from "@/lib/api/blogs";
import BlogIndexClient from "./blogIndexClient";

export default async function BlogsPage() {
  const [data, categories] = await Promise.all([
    getBlogCards(),
    getBlogFilterCategories(),
  ]);

  return <BlogIndexClient data={data} categories={categories} />;
}
