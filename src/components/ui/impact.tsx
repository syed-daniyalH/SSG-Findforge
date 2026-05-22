const Impacts = () => {
  return (
    <section className="flex gap-8
    lg:flex-row lg:items-center lg:justify-between lg:gap-0
    md:flex flex-col md:gap-10">
        <div className="">
            <h2 className="">Proven Impact</h2>
            <p className="text-neutral-dark text-base md:text-[18px]">Real results from our enterprise partners.</p>
        </div>
        <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <div className="flex flex-col gap-2 text-center max-w-55 w-44 bg-[#B5020F1A] 
            border border-[#E2E8F0] rounded-[14px] p-4">
                <span className="
                font-jakarta font-bold text-primary
                leading-10 tracking-[-0.9px] align-middle
                text-[20px]
                md:text-[26px]
                lg:text-[30px]
                xl:text-[36px]">
                    500+
                </span>
                <span className="font-jakarta font-medium 
                text-[14px] leading-5 tracking-normal 
                align-middle text-neutral-dark">
                Projects Delivered
                </span>            
            </div>

            <div className="flex flex-col gap-2 text-center max-w-55 w-44 bg-[#B5020F1A] 
            border border-[#E2E8F0] rounded-[14px] p-4">
                <span className="
                font-jakarta font-bold text-secondary
                leading-10 tracking-[-0.9px] align-middle hover:text-primary
                text-[20px]
                md:text-[26px]
                lg:text-[30px]
                xl:text-[36px]">
                    98%
                </span>
                <span className="font-jakarta font-medium 
                text-[14px] leading-5 tracking-normal 
                align-middle text-neutral-dark">
                Deadline Compliance
                </span>            
            </div>

            <div className="flex flex-col gap-2 text-center max-w-55 bg-[#B5020F1A] 
            border border-[#E2E8F0] rounded-[14px] p-4">
                <span className="
                font-jakarta font-bold text-secondary
                leading-10 tracking-[-0.9px] align-middle hover:text-primary
                text-[20px]
                md:text-[26px]
                lg:text-[30px]
                xl:text-[36px]">
                    90%
                </span>
                <span className="font-jakarta font-medium 
                text-[14px] leading-5 tracking-normal 
                align-middle text-neutral-dark">
                Reduction in Manual Effort
                </span>            
            </div>
        </div>
    </section>
  )
}

export default Impacts

