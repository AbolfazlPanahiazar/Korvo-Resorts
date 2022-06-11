import { useState, createContext, useContext, ReactNode, FC } from "react";

import { IResort } from "types";

interface IBucketContext {
  bucket: IResort[];
  removeResort: (id: number) => void;
  addResort: (resort: IResort) => void;
}

const bucketContext = createContext<IBucketContext>({
  bucket: [],
  removeResort: (id) => {},
  addResort: (resort) => {},
});

interface IBucketContextProviderProps {
  children: ReactNode;
}

const BucketContextProvider: FC<IBucketContextProviderProps> = ({
  children,
}) => {
  const [bucket, setBucket] = useState<IResort[]>([]);

  const addToBucket = (resort: IResort) => {
    if (bucket.find((r) => r.id === resort.id)) {
      return;
    }
    setBucket([...bucket, resort]);
  };

  const removeFromBucket = (id: number) => {
    setBucket((prevBucket) => prevBucket.filter((resort) => resort.id !== id));
  };

  return (
    <bucketContext.Provider
      value={{ bucket, removeResort: removeFromBucket, addResort: addToBucket }}
    >
      {children}
    </bucketContext.Provider>
  );
};

export const useBucket = () => {
  return useContext(bucketContext);
};

export default BucketContextProvider;
