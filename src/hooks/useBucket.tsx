import {
  useState,
  createContext,
  useContext,
  ReactNode,
  FC,
  useEffect,
} from "react";
import { toast } from "react-toastify";

import { CLIENT_STORAGE_KEY } from "const/env";
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
  const getBucket = (): IResort[] => {
    const bucketString = localStorage.getItem(CLIENT_STORAGE_KEY);
    if (bucketString) {
      const extracedBucket: IResort[] = JSON.parse(bucketString);
      return extracedBucket;
    }
    return [];
  };

  const [bucket, setBucket] = useState<IResort[]>(getBucket());

  const addToBucket = (resort: IResort) => {
    if (bucket.find((r) => r.id === resort.id)) {
      toast.error("Resort already in bucket");
      return;
    }
    setBucket([...bucket, resort]);
    toast.success("Resort added to bucket");
  };

  const removeFromBucket = (id: number) => {
    if (!bucket.find((r) => r.id === id)) {
      toast.error("Resort not in bucket");
      return;
    }
    setBucket((prevBucket) => prevBucket.filter((resort) => resort.id !== id));
    toast.success("Resort removed from bucket");
  };

  useEffect(() => {
    localStorage.setItem(CLIENT_STORAGE_KEY, JSON.stringify(bucket));
  }, [bucket]);

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
