// components
import { ButtonBlue } from "../buttons/ButtonBlue";
import { Container } from "../defaults/Container";

// assets
import logo from "../../assets/logo.svg";

export const Footer = () => {
  const socials = ["", "", "", "", ""];

  const contacts = [
    "1827 Nickel Road, Los Angeles, CA, 90017, United States",
    "(414) 567 - 2109",
    "contact@cleaning.com",
  ];

  const hours = [
    {
      title: "Monday to Friday",
      start: "6:00 AM",
      end: "9:00 PM",
    },
    {
      title: "Saturday & Sunday",
      start: "8:00 AM",
      end: "8:00 PM",
    },
  ];

  return (
    <footer>
      <Container>
        <div>
          <div className="py-[140px] flex gap-[40px] max-xl:grid max-xl:grid-cols-2 max-xl:justify-center max-xl:items-center max-xl:text-center max-sm:flex max-sm:flex-col">
            <div className="max-xl:flex max-xl:items-center max-xl:flex-col">
              <h2 className="text-x-black font-bold text-[1.75rem] max-w-[256px]">
                Quality cleaning for your home
              </h2>
              <p className="text-x-gray max-w-[306px] text-[1.125rem] mt-[7px]">
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </p>
              <div className="flex gap-4 mt-[34px]">
                {socials.map((social) => {
                  return (
                    <div className="h-[36px] w-[36px] bg-x-light-aqua rounded-[0.5rem]">
                      {social}
                    </div>
                  );
                })}
              </div>
            </div>
            <ul className="flex flex-col gap-[1.125rem] max-xl:flex max-xl:items-center max-xl:flex-col">
              <h3 className="text-x-black font-bold text-[1.25rem] mb-4">
                Contact us
              </h3>
              {contacts.map((contact) => {
                return (
                  <li className="text-x-gray text-[1.125rem] ml-[25px] max-w-[259px]">
                    <a href="#">{contact}</a>
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col gap-[1.125rem] max-xl:flex max-xl:items-center max-xl:flex-col">
              <h3 className="text-x-black font-bold text-[1.25rem] mb-4">
                Hours
              </h3>
              {hours.map((hour) => {
                return (
                  <div>
                    <h4 className="font-bold text-x-black text-[1.125rem]">
                      {hour.title}
                    </h4>
                    <p className="uppercase text-x-gray text-[1.125rem] mt-2">
                      {hour.start} - {hour.end}
                    </p>
                  </div>
                );
              })}
            </ul>
            <div className="max-xl:flex max-xl:items-center max-xl:flex-col">
              <h3 className="text-x-black font-bold text-[1.25rem] mb-[1.75rem]">
                Get a free estimate
              </h3>
              <a
                href="tel:+4145672109"
                className="text-x-blue font-bold text-[1.75rem]"
              >
                (414) 567 - 2109
              </a>
              <p className="text-x-gray max-w-[294px] mt-1.5">
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <ButtonBlue
                text="Request a free quote"
                classes="max-w-[256px] mt-[18px]"
              />
            </div>
          </div>
          <div className="py-[43px_30px] border-t-1 border-x-light-gray flex items-center justify-between max-lg:flex-col max-lg:gap-4 max-sm:text-center">
            <a href="#">
              <img src={logo} alt="Cleaning X" />
            </a>
            <p className="text-x-gray text-[1.125rem]">
              Copyright © Cleaning X | Made by{" "}
              <a href="https://github.com/B1lol-dev/" className="text-x-blue">
                B1lol-dev
              </a>{" "}
              - Powered by{" "}
              <a href="https://tailwindcss.com/" className="text-x-blue">
                Tailwind
              </a>{" "}
              -{" "}
              <a
                href="https://github.com/B1lol-dev/Cleaning-X-webpage/blob/main/LICENSE"
                className="text-x-blue"
              >
                Licenses
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
