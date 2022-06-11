import { FC } from "react";

import { PageContainer } from "components/common";
import { BucketItem } from "components/BucketPage/BucketItem/BucketItem";

import { useBucket } from "hooks";

const Bucket: FC = () => {
  const { bucket } = useBucket();

  return (
    <PageContainer>
      <div className="p-3">
        <h1 className="font-bold">My Bucket</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3">
        {bucket.map((item) => (
          <BucketItem key={item.id} resort={item} />
        ))}
      </div>
    </PageContainer>
  );
};

export default Bucket;
