interface IProServiceCard {
  img: string;
  title: string;
  body: string;
}

export const ProServiceCard = ({ img, title, body }: IProServiceCard) => {
  return (
    <div className="flex flex-col gap-6 items-center border-1 border-x-light-gray py-[83px_29px] px-10 shadow-[0px_2px_6px_0px_#14142B0A] rounded-2xl h-500px! max-xl:flex-row max-md:flex-col">
      <div className="max-w-[220px] w-full h-[224px]!">
        <img src={img} alt={title} />
      </div>
      <div className="text-center">
        <h1 className="text-x-black font-bold text-2xl">{title}</h1>
        <p className="text-x-gray text-xl max-w-80 text-balance mt-3">{body}</p>
      </div>
    </div>
  );
};
