import Link from "next/link";
import Icon from "../ui/icon"; // Assuming your Icon component handles Next/Image internally
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-grad-footer py-16 px-6 md:px-12 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="relative w-48 h-9">
              <Image
                src="/images/logo.webp"
                alt="SSG Mindforge Logo"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              SSG Mindforge is a digital agency UI / UX Design and Website
              Development located in Ohio, United States of America
            </p>
            <div className="flex gap-4">
              <Icon src="/icons/facebook-primary.svg" alt="Facebook" iconSize={24} noBorder iconClassName="text-primary" className="bg-white text-primary rounded-full p-1" />
              <Icon src="/icons/instagram-primary.svg" alt="Instagram" iconSize={24} noBorder className="bg-white text-primary rounded-full p-1" />
              <Icon src="/icons/linkedin-primary.svg" alt="LinkedIn" iconSize={24} noBorder className="bg-white text-primary rounded-full p-1" />
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Service</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services/ai-automation" className="hover:opacity-100 transition">AI Automation</Link></li>
              <li><Link href="/services/software-development" className="hover:opacity-100 transition">Software Development</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:opacity-100 transition">Digital Marketing</Link></li>
              <li><Link href="/services/web-design" className="hover:opacity-100 transition">Web Design</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:opacity-100 transition">Cybersecurity</Link></li>
              <li><Link href="/services/seo" className="hover:opacity-100 transition">SEO</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services" className="hover:opacity-100 transition">Services</Link></li>
              <li><Link href="/about-us" className="hover:opacity-100 transition">About</Link></li>
              <li><Link href="/suites" className="hover:opacity-100 transition">Our Team</Link></li>
              <li><Link href="/portfolio" className="hover:opacity-100 transition">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:opacity-100 transition">Blog</Link></li>
              <li><Link href="/contact-us" className="hover:opacity-100 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/terms-and-conditions" className="hover:opacity-100 transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:opacity-100 transition">Privacy Policy</Link></li>
              <li><Link href="/tax-strategy" className="hover:opacity-100 transition">Recruitment notice</Link></li>
              <li><Link href="/accessibility-statement" className="hover:opacity-100 transition">Modern slavery statement</Link></li>
              <li><Link href="/corporate-information" className="hover:opacity-100 transition">Corporate information</Link></li>
              <li><Link href="/contact-us" className="hover:opacity-100 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Links Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Testing Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/location" className="hover:opacity-100 transition">Location</Link></li>
              <li><Link href="/how-we-work" className="hover:opacity-100 transition">How we work</Link></li>
              <li><Link href="/testimonial" className="hover:opacity-100 transition">Testimonial</Link></li>
              <li><Link href="/casestudy" className="hover:opacity-100 transition">CaseStudy</Link></li>
              <li><Link href="/industry" className="hover:opacity-100 transition">Industry</Link></li>
              <li><Link href="/contact-us" className="hover:opacity-100 transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/20 mb-8" />

        {/* Bottom Bar: Stacked on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-xs md:text-sm">
          <p>Copyright 2026.</p>
          
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-2">
              <Image src="/icons/location.svg" alt="Loc" width={16} height={16} />
              <span>Unit 5 Mawney Road, Romford, England, RM7 7HL</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/email.svg" alt="Mail" width={16} height={16} />
              <a href="mailto:ahmad@ssgukltd.com" className="hover:underline">ahmad@ssgukltd.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/call.svg" alt="Phone" width={16} height={16} />
              <a href="tel:02034111976" className="hover:underline">020 3411 1976</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

