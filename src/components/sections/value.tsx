import ValuesCard from "../cards/values";

const Values = () => {
  return (
    <>
      <div
        className="flex
            md:flex-row md:justify-between md:items-end pb-10
            flex-col gap-5 items-start"
      >
        <div className="w-full lg:w-[70%] xl:w-1/2">
          <h2 className="text-secondary">Our Values</h2>
          <p className="text-neutral-dark pt-2 ">
            We are proud to be recognised for our positive culture, our
            achievements with clients, our work with communities and young
            people, and our technical advancements and strategic partnerships.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ValuesCard 
            title="Accountability"
            description="Recognized for pioneering AI-driven solutions that transform industries and drive business growth."
            icon="/icons/accountibility.svg"
            className=""
        />
        <ValuesCard 
            title="Integrity"
            description="Recognized for pioneering AI-driven solutions that transform industries and drive business growth."
            icon="/icons/integrity.svg"
        />
        <ValuesCard 
            title="Curiosity"
            description="Recognized for pioneering AI-driven solutions that transform industries and drive business growth."
            icon="/icons/bulb.svg"
        />
        <ValuesCard 
            title="Connected"
            description="Recognized for pioneering AI-driven solutions that transform industries and drive business growth."
            icon="/icons/connected.svg"
        />
      </div>
    </>
  );
};

export default Values;


