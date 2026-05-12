import Accordion from "../ui/accordion";
import { faqData } from "@/content/faq.data";
import { FAQItem } from "@/types/faq";

interface FAQsProps {
  data?: FAQItem[];
}

const FAQs = ({ data }: FAQsProps) => {
  const items = data?.length ? data : faqData;

  return (
    <div className="w-full">
      <Accordion items={items} />
    </div>
  );
};

export default FAQs;
