import Container from "@/components/Container/Container";
import React from "react";
import { FaAward, FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

// Define the TypeScript interface for the item prop
interface Item {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const incentives: Item[] = [
  {
    icon: FaAward,
    title: "Quality Materials",
    desc: "We source only the finest materials to ensure the highest quality in our products.",
  },
  {
    icon: FaShippingFast,
    title: "Fastest Delivery",
    desc: "Experience lightning-fast delivery times with our efficient logistics network.",
  },
  {
    icon: MdOutlineSupportAgent,
    title: "24/7 Support",
    desc: "Our support team is available around the clock to assist you with any inquiries.",
  },
];

const IncentiveItem: React.FC<{ item: Item }> = ({ item }) => (
  <div className="bg-white  shadow-xl rounded-lg">
    <div className="p-6 md:p-12">
      <div className="text-6xl text-gray-700">
        <item.icon />
      </div>
      <h3 className="my-4 text-2xl font-medium">{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  </div>
);

const ServiceAdds: React.FC = () => {
  return (
    <section className="ezy__epincentives3 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-black dark:text-white relative overflow-hidden z-10">
      <Container>
        <div className="container px-4 mx-auto">
          <div className="flex max-w-3xl justify-center text-center mx-auto">
            <div>
              <h1 className="text-2xl md:text-[45px] leading-none font-bold mb-6">
                We built best Business for you.
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-6 text-center">
            {incentives.map((item, i) => (
              <div className="col-span-6 sm:col-span-3 lg:col-span-2" key={i}>
                <IncentiveItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceAdds;
