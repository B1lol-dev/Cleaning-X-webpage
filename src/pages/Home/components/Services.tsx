import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "../../../components/defaults/Container";

// assets
import service_1 from "../assets/services/service_1.svg";
import service_2 from "../assets/services/service_2.svg";
import service_3 from "../assets/services/service_3.svg";
import { ServiceCard } from "./cards/ServiceCard";

export const Services = () => {
  const services = [
    {
      img: service_1,
      title: "1. Schedule online",
      desc: "Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.",
    },
    {
      img: service_2,
      title: "2. Pay online easily",
      desc: "Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.",
    },
    {
      img: service_3,
      title: "3. Get your house cleaned",
      desc: "Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.",
    },
  ];

  return (
    <section className="mt-56">
      <Container>
        <div>
          <div className="flex flex-col items-center gap-5">
            <h1 className="font-bold text-x-black text-5xl text-center max-lg:text-3xl">
              How our service works?
            </h1>
            <p className="text-xl text-x-gray text-center max-w-[648px] max-lg:text-base!">
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
          </div>
          <div className="flex gap-24 mt-16 items-center justify-center max-xl:gap-0 max-lg:flex-col max-lg:gap-14">
            {services.map((service) => {
              return (
                <ServiceCard
                  img={service.img}
                  title={service.title}
                  desc={service.desc}
                  key={uuidv4()}
                />
              );
            })}
          </div>
          <div className="flex gap-7 justify-center mt-14 max-lg:flex-col max-lg:items-center">
            <button
              type="button"
              className="text-[1.25rem] font-bold text-white bg-x-blue px-9 py-6 rounded-[14px] transition hover:-translate-y-0.5 active:scale-95 max-w-96"
            >
              Get a free quote
            </button>
            <button
              type="button"
              className="text-[1.25rem] text-x-black border-[#EFF0F6] shadow-[0px_4px_10px_0px_#14142B0A] border-1 bg-x-white px-9 py-6 rounded-[14px] transition hover:-translate-y-0.5 active:scale-95 max-w-96"
            >
              Explore services
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
