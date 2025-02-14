import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "../../../components/defaults/Container";
import { DifferenceCard } from "./cards/DifferenceCard";
import { ButtonBlue } from "./buttons/ButtonBlue";

// assets
import difference_img from "../assets/difference/difference_img.png";

export const Difference = () => {
  const differences = [
    {
      title: "Years",
      num: 10,
    },
    {
      title: "Clients",
      num: 5000,
    },
    {
      title: "Jobs done",
      num: 20000,
    },
  ];

  return (
    <section className="mt-[200px]">
      <Container>
        <div className="flex gap-5 items-center max-xl:flex-col-reverse max-xl:gap-20">
          <div>
            <div>
              <h1 className="text-x-black max-w-[30rem] font-bold text-5xl max-xl:text-3xl">
                What makes us different?
              </h1>
              <p className="text-x-gray text-lg max-w-[496px] mt-5 max-xl:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <p className="text-x-gray text-xs/[1.875rem] mt-4 max-w-[465px]">
                Sed ut perspiciatis unde omnis iste natus error sit atem
                accusantium doloremque laudantiu sed ut.
              </p>
            </div>
            <div className="flex gap-9 max-sm:flex-col max-sm:gap-3">
              {differences.map((difference) => (
                <DifferenceCard
                  title={difference.title}
                  num={difference.num}
                  key={uuidv4()}
                />
              ))}
            </div>
            <ButtonBlue />
          </div>
          <div className="max-w-[686px] w-full">
            <img src={difference_img} alt="Cleaning boy" className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};
