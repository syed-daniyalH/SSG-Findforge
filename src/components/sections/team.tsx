import { visionaryTeam } from "@/content/team.data";
import TeamCard from "../cards/team";

const Teams = () => {
  return (
    <section className="">
      <div
        className="flex
            md:flex-row md:justify-between md:items-end pb-10
            flex-col gap-5 items-start"
      >
        <div className="w-full lg:w-[70%] xl:w-1/2">
          <h2 className="text-secondary">Leadership Team</h2>
          <p className="text-neutral-dark pt-2 ">
            Our leadership team brings together diverse expertise and industry experience, guiding innovation and long-term growth across the business.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-14.25">
        {visionaryTeam.members.map((member, index) => (
        <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Teams;


