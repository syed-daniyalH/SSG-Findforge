import Insights from "@/components/cards/insights";
import Hero from "@/components/sections/hero";
import FormCTA from "@/components/ui/formCTA";
import { getAuthorBySlug } from "@/lib/api/authors";
import { getBlogsByAuthorSlug } from "@/lib/api/blogs";
import { insightsData } from "@/content/blog.data";
import { notFound } from "next/navigation";

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [apiAuthor, apiBlogs] = await Promise.all([
    getAuthorBySlug(slug),
    getBlogsByAuthorSlug(slug),
  ]);

  const fallbackBlogs = insightsData.filter((item) => item.author.authorSlug === slug);
  const author = apiAuthor ?? fallbackBlogs[0]?.author ?? null;
  const authorBlogs = apiBlogs.length > 0 ? apiBlogs : fallbackBlogs;

  if (!author) {
    notFound();
  }

  const displayedBlogs = authorBlogs.slice(0, 3);

  return (
    <div className="home-page">
      <section
        id="hero"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20"
      >
        <Hero
          badge={{
            text: "About Author",
            size: "medium",
            radius: "full",
            icon: "/icons/stars.svg",
            showIcon: true,
            className: "bg-white w-fit text-primary font-semibold font-poppins",
          }}
          title={author.name}
          description={author.designation || "Technology Expert"}
          socialLinks={author.socialLinks?.map((item) => ({
            icon: item.iconUrl,
            href: item.url,
          }))}
          author={true}
          image={{
            src: author.image,
            alt: author.name,
          }}
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <h2 className="">About Author</h2>
        <p className="text-neutral-dark mt-6">
          {author.authorDescription}
        </p>
      </section>

      <section
        id="blogs"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <h2 className="mb-10">All Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedBlogs.map((item, index) => (
            <Insights key={`${item.slug}-${index}`} {...item} variant="featured" />
          ))}
        </div>
      </section>

      <section
        id="cta"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <FormCTA
          variant="field"
          heading="Our Technology Experts are Change Catalysts"
          description="Book a Free Consultation Call with Our Experts Today"
          buttonText="Schedule Free Consultation"
          footerNote="Your privacy is protected"
          fields={[
            {
              type: "text",
              name: "name",
              label: "Full Name*",
              placeholder: "Enter your name",
            },
            {
              type: "email",
              name: "email",
              label: "Email*",
              placeholder: "Enter your email",
            },
            {
              type: "phone",
              name: "phone",
              label: "Phone*",
              placeholder: "xx xxxx xxxx",
            },
            {
              type: "textarea",
              name: "message",
              label: "Project Idea*",
              placeholder: "How can we help?",
              rows: 3,
            },
          ]}
        />
      </section>
    </div>
  );
}
