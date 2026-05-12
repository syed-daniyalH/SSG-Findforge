import Image from "next/image"
import FeaturedStories from "../cards/storiesCard"
import Link from "next/link"

const Stories = () => {
    return (
        <section>

            <div
                className="flex
            md:flex-row md:justify-between md:items-end
            flex-col gap-5 items-start"
            >
                <div className="">
                    <h2 className="text-secondary">Featured Success Stories</h2>
                    <p className="text-neutral-dark pt-2">
                        Comprehensive solutions for the modern bid team.
                    </p>
                </div>
                <div className="flex gap-2 border-b-2 border-black pb-1">
                    <Link href="/blogs" className="text-black font-semibold font-poppins">
                        View All Projects
                    </Link>
                    <Image
                        src="/icons/arrowRight.svg"
                        alt="arrow"
                        width={16}
                        height={24}
                    />
                </div>
            </div>
            <FeaturedStories />
        </section>
    )
}

export default Stories

