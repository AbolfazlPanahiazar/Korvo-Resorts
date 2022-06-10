import { FC } from "react";
import { BsPlusLg } from "react-icons/bs";

import { PageContainer } from "components/common";
import { BucketItem } from "components/BucketPage/BucketItem/BucketItem";

const Bucket: FC = () => {
  return (
    <PageContainer>
      <div className="p-3">
        <h1 className="font-bold">My Bucket</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3">
        <BucketItem />
        <BucketItem />
        <BucketItem />
        <BucketItem />
        <BucketItem />
        <BucketItem />
      </div>
    </PageContainer>
  );
};

export default Bucket;
