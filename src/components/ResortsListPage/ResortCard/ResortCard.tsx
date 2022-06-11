import { FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

import { IResort } from "types";

interface IResortCardProps {
  resort: IResort;
}

export const ResortCard: FC<IResortCardProps> = ({ resort }) => {
  const addToBucketClickHandler: MouseEventHandler<
    HTMLButtonElement
  > = () => {};

  return (
    <Link to="/resorts/ad">
      <div className="overflow-hidden rounded-md shadow-lg h-full flex flex-col">
        <div className="w-full">
          <img className="w-full" src={resort.imageUrl} alt={resort.title} />
        </div>
        <div className="p-2 flex flex-col flex-grow">
          <span className="font-bold">{resort.title}</span>
          <span className="text-gray-600 mt-1">price: 540$</span>
          <p className="text-sm text-gray-600 text-justify mt-1 flex-grow">
            {resort.description.substring(0, 200) + "..."}
          </p>
          <div className="mt-1 flex justify-end"> 
            <button
              onClick={addToBucketClickHandler}
              className="bg-sky-800 text-white w-10 h-10 rounded flex justify-center items-center"
            >
              <BsPlusLg size={15} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
