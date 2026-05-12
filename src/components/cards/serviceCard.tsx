import Icon from "../ui/icon";

export interface ServiceCard1Props {
    name: string;
    number?: number;
    description: string;
    iconSrc: string;
}

export const ServiceCard1Data: ServiceCard1Props[] = [
    {
        name: "Managed IT Services",
        description: "Our Managed IT Services take the pressure off by owning day-to-day operations, ensuring everything runs smoothly. We deliver ongoing support, vigilant monitoring, rapid incident response, patching and continious optimisation.",
        iconSrc: "/icons/cloud.svg",
    },
    {
        name: "Managed IT Services",
        description: "Our Managed IT Services take the pressure off by owning day-to-day operations, ensuring everything runs smoothly. We deliver ongoing support, vigilant monitoring, rapid incident response, patching and continious optimisation.",
        iconSrc: "/icons/cloud.svg",
    },
    {
        name: "Managed IT Services",
        description: "Our Managed IT Services take the pressure off by owning day-to-day operations, ensuring everything runs smoothly. We deliver ongoing support, vigilant monitoring, rapid incident response, patching and continious optimisation.",
        iconSrc: "/icons/cloud.svg",
    }

];

const ServiceCard1 = (props: ServiceCard1Props) => {
    return (
        <>
            <div className="bg-[#FAFAFA] border border-[#F5F5F5] rounded-2xl max-w-100 px-8 pt-8 space-y-6">
                <div className="flex justify-between items-center">
                    <Icon 
                    src={props.iconSrc}
                    iconSize={40}                    
                    bgColor="#ffffff"
                    borderColor="#f5f5f5"/>
                    <span className="text-[60px] font-medium text-[#BD091780]">{props.number}</span>
                </div>
                <div className="space-y-6 pb-18">
                    <h3 className="text-secondary">{props.name}</h3>
                    <p className="text-neutral-dark">
                        {props.description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ServiceCard1;

