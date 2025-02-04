import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "../../../components/defaults/Container";
import { ProServiceCard } from "./cards/ProServiceCard";

// assets
import proService_1 from "../assets/proServices/proService_1.svg";
import proService_2 from "../assets/proServices/proService_2.svg";
import proService_3 from "../assets/proServices/proService_3.svg";

export const ProServices = () => {
  const proServices = [
    {
      img: proService_1,
      title: "House cleaning",
      body: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
    },
    {
      img: proService_2,
      title: "House cleaning",
      body: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
    },
    {
      img: proService_3,
      title: "House cleaning",
      body: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
    },
  ];

  return (
    <section>
      <Container classes="pt-[240px] mt-[240px] border-t-1 border-x-light-gray">
        <div>
          <div className="flex justify-between items-center max-md:flex-col">
            <h1 className="text-x-black font-bold text-5xl max-w-[30rem] max-xl:text-3xl max-md:text-center">
              Take a look at our professional services
            </h1>
            <button
              type="button"
              className="text-[1.25rem] text-x-black border-[#EFF0F6] border-1 bg-x-white px-9 py-6 shadow-[0px_4px_10px_0px_#14142B0A] rounded-[14px] transition hover:-translate-y-0.5 active:scale-95 max-w-96"
            >
              Explore services
            </button>
          </div>
          <div className="flex items-center justify-between gap-7 mt-12 max-xl:flex-col">
            {proServices.map((proService) => (
              <a href="#" key={uuidv4()}>
                <ProServiceCard
                  img={proService.img}
                  title={proService.title}
                  body={proService.body}
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
