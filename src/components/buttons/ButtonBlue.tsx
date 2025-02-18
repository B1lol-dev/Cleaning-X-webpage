export const ButtonBlue = ({
  text = "Get a free quote",
  classes = "mt-12 text-xl",
}) => {
  return (
    <button
      type="button"
      className={`${classes} bg-x-blue text-white font-bold px-9 h-[71px] rounded-[14px] transition hover:-translate-y-0.5 active:scale-95 max-sm:h-[unset] max-sm:py-5 max-[350px]:p-3 max-[350px]:text-lg`}
    >
      {text}
    </button>
  );
};
