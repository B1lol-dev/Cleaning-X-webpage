interface IServiceCard {
  img: string;
  title: string;
  desc: string;
}

export const ServiceCard = ({ img, title, desc }: IServiceCard) => {
  return (
    <div className="flex flex-col items-center max-w-[374px] w-full">
      <div className="max-w-[270px]">
        <img src={img} alt={title} />
      </div>
      <div className="mt-10">
        <h3 className="text-x-black font-bold text-[1.75rem] text-center">
          {title}
        </h3>
        <p className="text-x-gray text-center text-xl mt-4">{desc}</p>
      </div>
    </div>
  );
};
