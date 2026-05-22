import CTA from "@/components/ui/cta";
import Image from "next/image";

const testimonials = [
  { name: "Rosaria Vargas", role: "CEO", image: "/images/testimonial1.webp" },
  { name: "John Doe", role: "Operations Director", image: "/images/testimonial2.webp" },
  { name: "Marcus Lee", role: "Product Lead", image: "/images/testimonial3.webp" },
  { name: "Rosaria Vargas", role: "CEO", image: "/images/testimonial1.webp" },
  { name: "John Doe", role: "Operations Director", image: "/images/testimonial2.webp" },
  { name: "Marcus Lee", role: "Product Lead", image: "/images/testimonial3.webp" },
];

function QuoteCard({ name, role, image, large = false }: { name: string; role: string; image: string; large?: boolean }) {
  return (
    <article className={`rounded-[10px] border border-[#E8EDF4] bg-white p-5 ${large ? "md:col-span-2" : ""}`}>
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[8px]">
          <Image src={image} alt={name} fill className="object-cover object-top" />
        </div>
        <div className="min-w-0">
          <h3 className="text-[14px] font-bold leading-5 text-secondary">{name}</h3>
          <p className="font-poppins text-[11px] text-primary">{role}</p>
          <div className="mt-3 flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image key={index} src="/icons/ratingStar.svg" alt="" width={13} height={13} />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 font-poppins text-[12px] leading-5 text-neutral-dark">
        Kodehash Technologies delivered exceptional design and engineering,
        giving our team a faster, cleaner experience and stronger results.
      </p>
    </article>
  );
}

export default function Testimonials() {
  return (
    <main className="testimonial-page">
      <section className="mx-auto max-w-[1120px] px-5 pt-24 text-center sm:px-6 lg:px-8">
        <p className="font-poppins text-[11px] font-semibold text-primary">Testimonials</p>
        <h1 className="mt-3 text-[34px] font-bold leading-tight text-primary md:text-[42px]">
          Our Success Stories
        </h1>
        <p className="mx-auto mt-4 max-w-[560px] font-poppins text-[14px] leading-6 text-neutral-dark">
          Hear from industry peers like you and discover how we co-create
          meaningful partnerships with each client.
        </p>
      </section>

      <section className="mx-auto grid max-w-[900px] grid-cols-1 gap-5 px-5 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
        {testimonials.map((item, index) => (
          <QuoteCard key={`${item.name}-${index}`} {...item} large={index === 0 || index === 3} />
        ))}
      </section>

      <section className="mx-auto max-w-[900px] px-5 pb-16 sm:px-6 lg:px-8">
        <CTA
          title="Talk to one of our experts"
          description="Looking to digitally transform your business? Get in touch to see how we can help you."
          image="/images/ctaPerson.webp"
          showBadge={true}
          button1={{
            text: "Book A Meeting",
            href: "/contact",
            icon: "/icons/calendar.svg",
          }}
        />
      </section>
    </main>
  );
}
