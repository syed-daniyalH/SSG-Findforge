import Link from "next/link";
import Icon from "../ui/icon"; // Assuming your Icon component handles Next/Image internally
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-grad-footer px-5 py-12 text-white md:px-8">
      <div className="max-w-[1120px] mx-auto">
        {/* Main Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-10">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="relative w-40 h-8">
              <Image
                src="/images/logo.webp"
                alt="SSG Mindforge Logo"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs leading-relaxed max-w-xs text-white/85">
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
            <h3 className="text-base font-semibold mb-4 text-white">Service</h3>
            <ul className="space-y-3 text-xs text-white/85">
              <li><Link href="/services/ai-automation" className="hover:opacity-100 transition">AI Automation</Link></li>
              <li><Link href="/services/data-science" className="hover:opacity-100 transition">Data Science</Link></li>
              <li><Link href="/services/software-services" className="hover:opacity-100 transition">Software Services</Link></li>
              <li><Link href="/services/software-development" className="hover:opacity-100 transition">Software Development</Link></li>
              <li><Link href="/services/software-services/custom-software-development" className="hover:opacity-100 transition">Custom Software Development</Link></li>
              <li><Link href="/services/ai-automation/ai-consulting-services" className="hover:opacity-100 transition">AI Consulting Services</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-xs text-white/85">
              <li><Link href="/services" className="hover:opacity-100 transition">Services</Link></li>
              <li><Link href="/about-us" className="hover:opacity-100 transition">About</Link></li>
              <li><Link href="/suites" className="hover:opacity-100 transition">Our Team</Link></li>
              <li><Link href="/casestudy" className="hover:opacity-100 transition">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:opacity-100 transition">Blog</Link></li>
              <li><Link href="/contact-us" className="hover:opacity-100 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3 text-xs text-white/85">
              <li><Link href="/terms-and-conditions" className="hover:opacity-100 transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:opacity-100 transition">Privacy Policy</Link></li>
              <li><Link href="/tax-strategy" className="hover:opacity-100 transition">Recruitment notice</Link></li>
              <li><Link href="/accessibility-statement" className="hover:opacity-100 transition">Modern slavery statement</Link></li>
              <li><Link href="/about-us" className="hover:opacity-100 transition">Corporate information</Link></li>
              <li><Link href="/contact-us" className="hover:opacity-100 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Links Column 4 */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Testing Links</h3>
            <ul className="space-y-3 text-xs text-white/85">
              <li><Link href="/location" className="hover:opacity-100 transition">Location</Link></li>
              <li><Link href="/how-we-work" className="hover:opacity-100 transition">How we work</Link></li>
              <li><Link href="/testimonial" className="hover:opacity-100 transition">Testimonial</Link></li>
              <li><Link href="/casestudy" className="hover:opacity-100 transition">CaseStudy</Link></li>
              <li><Link href="/industry" className="hover:opacity-100 transition">Industry</Link></li>
              <li><Link href="/contact-us" className="hover:opacity-100 transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/20 mb-6" />

        {/* Bottom Bar: Stacked on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 text-xs">
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
