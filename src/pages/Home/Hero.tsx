// components
import { Container } from "../../components/defaults/Container";

// assets
import hero_img from "../../assets/Home/hero/hero_img.png";
import icon_call from "../../assets/icons/icon_call.svg";

export const Hero = () => {
  return (
    <section>
      <Container>
        <div className="flex items-center max-xl:flex-col-reverse max-xl:items-center max-xl:gap-5">
          <div>
            <h1 className="font-bold text-x-black text-[4.2rem]/[4.6rem] max-w-[530px] max-xl:text-5xl max-sm:text-4xl">
              Quality cleaning for your home
            </h1>
            <p className="text-x-gray text-[1.3rem] max-w-[700px] text-balance mt-5 max-sm:text-lg">
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className="flex mt-[40px] items-center gap-7 max-sm:flex-col-reverse max-sm:items-start max-[350px]:flex-row! max-[350px]:gap-2">
              <button className="bg-x-blue text-white font-bold px-9 h-[71px] text-xl rounded-[14px] transition hover:-translate-y-0.5 active:scale-95 max-sm:h-[unset] max-sm:py-5 max-[350px]:p-3 max-[350px]:text-lg">
                Get a free quote
              </button>
              <a href="tel:+4145672109" className="flex items-center">
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
          </div>
          <div className="max-w-[720px]">
            <img src={hero_img} alt="girl" className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};
