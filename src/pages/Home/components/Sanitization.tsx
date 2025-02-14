// components
import { Container } from "../../../components/defaults/Container";
import { ButtonBlue } from "./buttons/ButtonBlue";

// assets
import icon_call from "../../../assets/icons/icon_call.svg";
import sanitization_img from "../assets/sanitization/sanitization_img.svg";

export const Sanitization = () => {
  return (
    <section className="mt-[240px]">
      <Container>
        <div className="bg-x-dark-blue flex items-center justify-center rounded-3xl gap-20 pr-[156px] py-5 max-[1100px]:flex-col max-[1100px]:pr-0">
          <div className="max-w-[518px]">
            <img src={sanitization_img} alt="sanitization" className="w-full" />
          </div>
          <div className="text-white max-md:px-5">
            <p className="font-bold text-base max-md:text-sm">
              Covid-19 sanitization
            </p>
            <h1 className="text-5xl font-bold max-w-[600px] mt-4 max-xl:text-3xl">
              We follow guidelines to keep you safe from the COVID-19 virus
            </h1>
            <p className="text-xl max-w-[474px] mt-[1.125rem]">
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <div className="flex mt-3 items-center gap-7 max-sm:flex-col-reverse max-sm:items-start max-[350px]:flex-row! max-[350px]:gap-2">
              <ButtonBlue classes="text-base text-nowrap" />
              <a href="tel:+4145672109" className="flex items-center">
                <img
                  src={icon_call}
                  alt="call icon"
                  className="object-contain object-center block h-[71px] w-[71px]"
                />
                <div className="max-[500px]:hidden">
                  <p className="text-x-gray uppercase">Call us now</p>
                  <span className="text-white font-bold text-[1.75rem] text-nowrap">
                    (414) 567 - 2109
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
