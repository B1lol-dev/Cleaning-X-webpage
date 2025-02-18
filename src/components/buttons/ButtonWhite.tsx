export const ButtonWhite = ({
  text = "Explore services",
  classes = "mt-12 text-[1.25rem] max-w-96",
}) => {
  return (
    <button
      type="button"
      className={`${classes} text-x-black border-[#EFF0F6] border-1 bg-x-white px-9 py-6 shadow-[0px_4px_10px_0px_#14142B0A] rounded-[14px] transition hover:-translate-y-0.5 active:scale-95`}
    >
      {text}
    </button>
  );
};
