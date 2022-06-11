import { FC, MouseEventHandler, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

import { useBucket } from "hooks";
import data from "const/data.json";
import { PageContainer } from "components/common";
import { IResort } from "types";

const ResortDetails: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addResort } = useBucket();
  const [resort, setResort] = useState<IResort | undefined>();

  useEffect(() => {
    if (id && !isNaN(Number(id))) {
      const newResort = data.find((resort) => resort.id === +id);
      setResort(newResort);
    } else {
      navigate("/404");
    }
  }, [id, navigate]);

  const addToBucketHandler: MouseEventHandler<HTMLButtonElement> = () => {
    if (resort) {
      addResort(resort);
    }
  };

  return (
    <PageContainer>
      <div className="p-3">
        <h1 className="font-bold">Resort Details</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-sky-900 text-white p-5 rounded-md">
        <div className="max-w-2xl">
          <h1 className="font-bold text-xl mb-2">{resort?.title}</h1>
          <span className="text-gray-300">price: {resort?.price}</span>
          <p className="text-md text-gray-300 text-justify mt-2">
            {resort?.description}
          </p>
          <button
            onClick={addToBucketHandler}
            className="text-white bg-green-600 flex items-center p-2 w-full justify-center rounded mt-2"
          >
            Add to Bucket <BsPlusLg size={18} className="ml-2" />
          </button>
        </div>
        <div>
          <img
            className="w-full rounded-md"
            src={resort?.imageUrl}
            alt={resort?.title}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default ResortDetails;
