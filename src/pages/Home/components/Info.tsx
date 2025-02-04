import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "../../../components/defaults/Container";
import { InfoCard } from "./cards/InfoCard";

// assets
import info_1 from "../assets/info/info_1.svg";
import info_2 from "../assets/info/info_2.svg";
import info_3 from "../assets/info/info_3.svg";
import info_video from "../assets/info/info_video.png";

export const Info = () => {
  const infoCards = [
    {
      img: info_1,
      title: "clients",
      num: 3480,
    },
    {
      img: info_2,
      title: "Jobs done",
      num: 12540,
    },
    {
      img: info_3,
      title: "Employees",
      num: 100,
    },
  ];

  return (
    <section>
      <Container classes="pt-[240px] mt-[240px] border-t-1 border-x-light-gray">
        <div>
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-x-black font-bold text-5xl max-w-[608px] text-center max-lg:text-3xl">
              Our cleaning services have no comparison
            </h1>
            <p className="text-x-gray text-xl text-center max-w-[702px] text-balance max-lg:text-base">
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus vitae cras viverra gravida
              sapien.
            </p>
          </div>
          <div className="flex justify-center items-center gap-24 mt-8 max-md:flex-col max-md:gap-10">
            {infoCards.map((card) => (
              <InfoCard
                img={card.img}
                title={card.title}
                num={card.num}
                key={uuidv4()}
              />
            ))}
          </div>
          <a
            href="#"
            className="flex justify-center mt-10 cursor-pointer w-full"
          >
            <img src={info_video} alt="cleaning video" title="cleaning video" />
          </a>
        </div>
      </Container>
    </section>
  );
};
