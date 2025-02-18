// components
import { Container } from "../../../components/defaults/Container";

// assets
import icon_call from "../../../assets/icons/icon_call.svg";
import { ButtonWhite } from "./buttons/ButtonWhite";
import { ButtonBlue } from "./buttons/ButtonBlue";

export const Contact = () => {
  const formInputs = [
    "Full name",
    "Phone number",
    "Adress",
    "Email",
    "Requested service",
    "Day of service",
  ];

  return (
    <section className="py-[240px] bg-[#F7F9FC]">
      <Container>
        <div className="flex items-center gap-[60px] max-[1400px]:flex-col">
          <div className="max-w-[487px] w-full">
            <div>
              <h1 className="text-x-black font-bold text-5xl max-w-[481px] max-xl:text-3xl">
                Request a free cleaning quote today
              </h1>
              <p className="text-x-gray text-[1.31rem] max-w-[481px] mt-2 max-xl:text-base">
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>
              <a href="tel:+4145672109" className="flex items-center mt-2.5">
                <img
                  src={icon_call}
                  alt="call icon"
                  className="object-contain object-center block h-[71px] w-[71px]"
                />
                <div className="max-[350px]:hidden">
                  <p className="text-x-gray uppercase">Call us now</p>
                  <span className="text-x-black font-bold text-[1.75rem]">
                    (414) 567 - 2109
                  </span>
                </div>
              </a>
            </div>
            <div className="mt-[54px] pt-[55px] border-t-1 border-x-light-gray">
              <h3 className="text-x-black font-bold text-[1.5rem]">
                Not convinced yet?
              </h3>
              <p className="text-x-gray text-[1.31rem] mt-[9px] max-xl:text-base">
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </p>
              <ButtonWhite
                text="Browse our packages"
                classes="font-bold mt-[10px]"
              />
            </div>
          </div>
          <form className="bg-white py-[85px] px-[61px] rounded-2xl max-md:px-[30px] max-md:py-[50px]">
            <div className="grid grid-cols-2 gap-8 mb-8 max-sm:grid-cols-1">
              {formInputs.map((formInput) => {
                return (
                  <label>
                    <p className="text-[1.125rem] text-x-black max-xl:text-base">
                      {formInput}
                    </p>
                    <input
                      type="text"
                      className="mt-3 shadow-[0px_2px_12px_0px_#14142B14] border-1 border-[#EFF0F6] rounded-2xl h-[72px] max-w-[259px] w-full text-2xl text-x-black max-xl:max-w-full"
                    />
                  </label>
                );
              })}
            </div>
            <label>
              <p className="text-x-black text-[1.125rem] max-xl:text-base">
                Add a note
              </p>
              <textarea className="shadow-[0px_2px_7px_0px_#14142B14] rounded-2xl w-full h-[144px] mt-3 p-2"></textarea>
            </label>
            <ButtonBlue text="Submit message" />
          </form>
        </div>
      </Container>
    </section>
  );
};
