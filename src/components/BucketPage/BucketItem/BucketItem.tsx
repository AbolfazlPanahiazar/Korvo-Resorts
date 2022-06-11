import { FC, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

import { useBucket } from "hooks";
import { IResort } from "types";

interface IBucketItemProps {
  resort: IResort;
}

export const BucketItem: FC<IBucketItemProps> = ({ resort }) => {
  const navigate = useNavigate();
  const { removeResort } = useBucket();

  const onCardClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    navigate(`/resorts/${resort.id}`);
  };

  const onDeleteClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    removeResort(resort.id);
  };
  return (
    <div
      onClick={onCardClickHandler}
      className="overflow-hidden rounded-md shadow-lg cursor-pointer flex flex-col"
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
            onClick={onDeleteClickHandler}
            className="bg-red-800 text-white w-10 h-10 rounded flex justify-center items-center"
          >
            <AiFillDelete size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
