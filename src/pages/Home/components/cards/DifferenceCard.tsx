import { formatNumberToKMB } from "../../../../utils/formatNumberToKMB";

// interfaces
interface IDifferenceCard {
  title: string;
  num: number;
}

export const DifferenceCard = ({ title, num }: IDifferenceCard) => {
  return (
    <div>
      <h1 className="font-bold text-[3.375rem] text-x-black">
        {formatNumberToKMB(num)}
        <span className="text-x-blue">+</span>
      </h1>
      <p className="text-x-gray font-bold mt-[3px]">{title}</p>
    </div>
  );
};
