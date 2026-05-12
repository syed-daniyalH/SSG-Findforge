// import FAQs from "@/components/sections/accordions";
import Insights from "@/components/cards/insights";
import Hero from "@/components/sections/hero";
import FormCTA from "@/components/ui/formCTA";
import { insightsData } from "@/content/blog.data";
import { notFound } from "next/navigation";

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. Find the blog entry that contains this author's slug
  const blogEntry = insightsData.find((b) => b.author.authorSlug === slug);

  // 2. If the author doesn't exist in our data, show 404
  if (!blogEntry) {
    notFound();
  }

  const author = blogEntry.author;

  // 3. Filter all blogs written by this specific author
  const authorBlogs = insightsData.filter((b) => b.author.authorSlug === slug);
  
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
          // Mapping your SocialLink interface to Hero's expected format
          socialLinks={author.socialLinks?.map(s => ({ icon: s.iconUrl, href: s.url }))}
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
              <Insights key={index} {...item} variant="featured" />
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