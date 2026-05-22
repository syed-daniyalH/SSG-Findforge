import FAQs from "@/components/sections/accordions";
import Image from "next/image";

const trustNavItems = ["Trust Center", "Compliance"];

const certificates = [
  { title: "ISO 27001:2022", image: "/images/iso.webp" },
  { title: "Cyber Essentials", image: "/images/cisa.webp" },
  { title: "SSIP Approved", image: "/images/aws.webp" },
  { title: "ISO 9001:2015", image: "/images/iso.webp" },
  { title: "GDPR Ready", image: "/icons/security-check.svg" },
  { title: "BAFE Approved", image: "/images/cisa.webp" },
  { title: "SSIP Accreditation", image: "/images/aws.webp" },
  { title: "Cyber Assured", image: "/icons/secure-cloud.svg" },
  { title: "Governance Controls", image: "/icons/compliant-primary.svg" },
];

export default function TrustCenterPage() {
  return (
    <main className="trust-center-page">
      <section className="mx-auto max-w-[1120px] px-5 pt-24 sm:px-6 lg:px-8">
        <div className="relative flex min-h-[170px] items-center justify-center overflow-hidden rounded-[16px] bg-grad-hero px-6 py-12 text-center">
          <div className="absolute inset-x-0 top-0 h-24 bg-white/45 blur-2xl" />
          <h1 className="relative z-10 text-[38px] font-bold leading-tight text-white md:text-[48px]">
            Trust Center
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 px-5 py-14 sm:px-6 md:grid-cols-[170px_1fr] lg:px-8">
        <aside className="h-fit rounded-[8px] border border-[#E8EDF4] bg-white p-4">
          <div className="flex items-center justify-between border-b border-[#EEF2F7] pb-3">
            <span className="font-poppins text-[12px] font-bold text-primary">
              Trust Center
            </span>
            <span className="text-primary">⌄</span>
          </div>
          <nav className="pt-3">
            {trustNavItems.map((item, index) => (
              <a
                key={item}
                href={index === 0 ? "#overview" : "#compliance"}
                className={`block rounded-[6px] px-2 py-2 font-poppins text-[11px] ${
                  index === 0 ? "text-primary" : "text-neutral-dark"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>

        <div id="overview" className="space-y-9">
          <div className="space-y-5 font-poppins text-[13px] leading-7 text-neutral-dark">
            <p>
              Welcome to the SSG Mindforge Trust Center. This is your central
              hub for detailed information and resources regarding how we
              protect your data, uphold your privacy, and maintain the security
              and reliability of our services.
            </p>
            <p>
              In the digital world, trust is earned through transparency and
              action. We are committed to building and maintaining that trust by
              ensuring our security measures and privacy practices align with
              recognized industry standards.
            </p>
            <p>
              Please explore this site to learn more about our approach to
              safeguarding your information and maintaining dependable systems.
            </p>
          </div>

          <section id="compliance">
            <h2 className="text-[24px] font-bold leading-tight text-secondary">
              Integrated Quality Management System
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
              {certificates.map((certificate) => (
                <article
                  key={certificate.title}
                  className="flex min-h-[126px] flex-col items-center justify-between rounded-[10px] bg-white p-4 text-center shadow-[0_12px_32px_rgba(15,23,42,0.12)]"
                >
                  <div className="relative h-12 w-16">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-poppins text-[10px] font-semibold leading-4 text-secondary">
                    {certificate.title}
                  </p>
                  <span className="w-full rounded-full bg-primary px-2 py-1.5 font-poppins text-[9px] font-semibold text-white">
                    View Certificate
                  </span>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 pb-20 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-[30px] font-bold leading-tight text-secondary">
            FAQs
          </h2>
          <p className="pt-4 font-poppins text-[14px] leading-6 text-neutral-dark">
            Comprehensive solutions for the modern bid team.
          </p>
        </div>
        <FAQs />
      </section>
    </main>
  );
}
