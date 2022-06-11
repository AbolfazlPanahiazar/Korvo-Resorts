import { FC, MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

import { IResort } from "types";
import { useBucket } from "hooks";

interface IResortCardProps {
  resort: IResort;
}

export const ResortCard: FC<IResortCardProps> = ({ resort }) => {
  const navigate = useNavigate();
  const { addResort } = useBucket();

  const cardClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    navigate(`/resorts/${resort.id}`);
  };

  const addToBucketClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    addResort(resort);
  };

  return (
    <div
      onClick={cardClickHandler}
      className="overflow-hidden rounded-md shadow-lg h-full flex flex-col cursor-pointer"
    >
      <div className="w-full">
        <img className="w-full" src={resort.imageUrl} alt={resort.title} />
      </div>
      <div className="p-2 flex flex-col flex-grow">
        <span className="font-bold">{resort.title}</span>
        <span className="text-gray-600 mt-1">price: {resort.price}</span>
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
  );
};
