interface IInfoCard {
  img: string;
  title: string;
  num: number;
}

export const InfoCard = ({ img, title, num }: IInfoCard) => {
  return (
    <div className="flex gap-3.5 items-center justify-center">
      <div className="h-[72px] w-[72px] flex items-center">
        <img
          src={img}
          alt={title}
          className="block h-full w-full translate-y-1.5 max-lg:translate-x-0"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-x-gray text-base">{title}</p>
        <h3 className="text-x-black font-bold text-[1.75rem]/[1.1rem] max-lg:text-2xl!">
          {num.toLocaleString("EN-en")}+
        </h3>
      </div>
    </div>
  );
};
