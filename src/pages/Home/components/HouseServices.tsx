// components
import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "../../../components/defaults/Container";

// assets
import houseServices_img from "../assets/houseServices/houseServices_img.png";
import icon_check from "../../../assets/icons/icon_check.svg";

export const HouseServices = () => {
  const houseServices = [
    ["Bathrooms", "Kitchens", "Living Rooms", "Carpets"],
    ["Bedrooms", "Offices", "Businesses", "Windows"],
  ];

  return (
    <section className="mt-[200px]">
      <Container>
        <div className="flex gap-20 items-center max-xl:flex-col">
          <div className="max-w-[640px] w-full">
            <img src={houseServices_img} alt="House" />
          </div>
          <div>
            <h1 className="text-x-black max-w-[30rem] font-bold text-5xl max-xl:text-3xl">
              We cover all areas of your home or office
            </h1>
            <p className="text-x-gray text-lg max-w-[496px] mt-5 max-xl:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="flex gap-14 mt-6 max-md:gap-7 max-sm:flex-col">
              {houseServices.map((houseService) => {
                return (
                  <ul key={uuidv4()} className="flex flex-col gap-7">
                    {houseService.map((item) => {
                      return (
                        <a href="#" key={uuidv4()}>
                          <li className="flex items-center gap-2">
                            <img src={icon_check} alt="check" />
                            <span className="text-lg text-x-black font-bold">
                              {item}
                            </span>
                          </li>
                        </a>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
            <button
              type="button"
              className="bg-x-blue text-white mt-12 font-bold px-9 h-[71px] text-xl rounded-[14px] transition hover:-translate-y-0.5 active:scale-95 max-sm:h-[unset] max-sm:py-5 max-[350px]:p-3 max-[350px]:text-lg"
            >
              Get a free quote
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
