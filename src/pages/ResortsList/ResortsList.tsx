import { FC } from "react";

import { PageContainer } from "components/common";
import { ResortCard } from "components/ResortsListPage";

const ResortsList: FC = () => {
  return (
    <PageContainer>
      <div className="p-3">
        <h1 className="font-bold">Resorts List</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3">
        <ResortCard />
        <ResortCard />
        <ResortCard />
        <ResortCard />
        <ResortCard />
      </div>
    </PageContainer>
  );
};

export default ResortsList;
