import Image from "next/image";
import { Testimonial, TestimonialCard } from "../cards/testimonial";
import Link from "next/link";

const ClientTestimonial = () => {
    return (
        <section className="">

            <div className="flex
            md:flex-row md:justify-between md:items-end pb-8
            flex-col gap-5 items-start">
                <div className="">
                    <h2 className="text-secondary">Client Testimonials</h2>
                    <p className="text-neutral-dark pt-2">Comprehensive solutions for the modern bid team.</p>
                </div>
                <div className="flex gap-2 border-b-2 border-black pb-1">
                    <Link
                        href="/testimonial"
                        className="text-black font-semibold font-poppins text-sm"
                        >
                        View All Clients
                    </Link>
                    <Image
                        src="/icons/arrowRight.svg"
                        alt="arrow"
                        width={16}
                        height={24}
                    />
                </div>
            </div>
            <div className="flex gap-6">
                <div className="">
                    <div className="hidden md:block">
                        <Testimonial
                            name="John Doe"
                            title="AI & Automation Engineer"
                            quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
                            avatar="/images/testimonial3.webp"
                            rating={5}
                            lineBar="/icons/lineBar.svg"
                        />
                    </div>
                    <div className="md:hidden">
                        <TestimonialCard 
                            name="John Doe"
                            title="AI & Automation Engineer"
                            quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
                            avatar="/images/testimonial3.webp"
                            rating={5}
                            lineBar="/icons/lineBar.svg"
                            // showLogo
                            // logo="/images/pergola.webp"
                        />
                    </div>
                    
                    <div className="flex flex-col gap-5 mt-3
                    md:flex-row">
                        
                        <TestimonialCard 
                            name="John Doe"
                            title="AI & Automation Engineer"
                            quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
                            avatar="/images/testimonial2.webp"
                            rating={5}
                            lineBar="/icons/lineBar.svg"
                            // showLogo
                            // logo="/images/pergola.webp"
                        />

                        <TestimonialCard 
                            name="John Doe"
                            title="AI & Automation Engineer"
                            quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
                            avatar="/images/testimonial1.webp"
                            rating={5}
                            lineBar="/icons/lineBar.svg"
                            // showLogo
                            // logo="/images/pergola.webp"
                        />
                        
                    </div>
                </div>
                {/* Image */}
                <div className="relative w-full overflow-hidden rounded-[18px]
                 hidden xl:flex">
                <Image
                    src="/images/office.webp"
                    alt="Project Meeting"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                </div>
            </div>
        </section>
    );
}

export default ClientTestimonial;
