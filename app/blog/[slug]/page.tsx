import Insights from "@/components/cards/insights";
import BlogDetail from "@/components/sections/blogDetail";
import FormCTA from "@/components/ui/formCTA";
import { insightsData } from "@/content/blog.data";
import { getBlogBySlug, getBlogCards } from "@/lib/api/blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DetailedBlog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog =
    (await getBlogBySlug(slug)) ??
    insightsData.find((item) => item.slug === slug) ??
    null;

  if (!blog) {
    notFound();
  }

  const latestBlogs = (await getBlogCards(4))
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20">
        <BlogDetail blog={blog} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20">
        <div
          className="flex
            md:flex-row md:justify-between md:items-end pb-10
            flex-col gap-5 items-start"
        >
          <div className="">
            <h2 className="text-secondary">Latest Blogs</h2>
            <p className="text-neutral-dark pt-2">
              Comprehensive solutions for the modern bid team.
            </p>
          </div>
          <div className="flex gap-2 border-b-2 border-black pb-1">
            <Link href="/blog" className="text-black font-semibold font-poppins">
              View All Blogs
            </Link>
            <Image
              src="/icons/arrowRight.svg"
              alt="arrow"
              width={16}
              height={24}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestBlogs.map((item, index) => (
            <Insights key={`${item.slug}-${index}`} {...item} variant="featured" />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <div id="formCTA" className="">
          <FormCTA
            variant="field"
            heading="Get our stories delivered From us to your inbox weekly"
            description="Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day."
            buttonText="Get Started"
            fields={[
              { type: "email", name: "email", placeholder: "Enter email" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
