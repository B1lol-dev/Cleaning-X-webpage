interface IBlogCard {
  img: string;
  title: string;
  body: string;
  date: string;
}

export const BlogCard = ({ img, title, body, date }: IBlogCard) => {
  return (
    <div className="max-w-[596px] flex flex-col items-center">
      <img src={img} alt={title} />
      <div className="max-w-[536px] w-full bg-white max-h-[324px] h-full rounded-3xl shadow-[0px_2px_6px_0px_#14142B0A] -translate-y-14 p-12">
        <h3 className="text-2xl font-bold text-x-black max-[407px]">{title}</h3>
        <p className="text-x-gray text-[1.31rem] mt-4">{body}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-x-black text-[1.125rem]">{date}</p>
          <button
            type="button"
            className="bg-x-blue w-[50px] h-[50px] text-x-blue transition active:scale-95"
          >
            
          </button>
        </div>
      </div>
    </div>
  );
};
