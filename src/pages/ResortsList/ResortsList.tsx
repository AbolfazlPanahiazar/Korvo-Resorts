import { FC, useState } from "react";

import { PageContainer } from "components/common";
import { ResortCard, Paginator } from "components/ResortsListPage";
import { IResort } from "types";
import data from "const/data.json";

const ResortsList: FC = () => {
  const [resorts, setResorts] = useState<IResort[]>(
    JSON.parse(JSON.stringify(data))
  );
  const [currentPage, setCurrentPage] = useState<number>(2);
  return (
    <PageContainer>
      <div className="p-3">
        <h1 className="font-bold">Resorts List</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3 pb-5">
        {resorts
          .slice(0 + (currentPage - 1) * 20, 20 + (currentPage - 1) * 20)
          .map((resort) => (
            <ResortCard key={resort.id} resort={resort} />
          ))}
      </div>
      <div className="flex justify-center items-center mt-5 mb-5">
        <Paginator
          currentPage={currentPage}
          pagesCount={resorts.length / 20}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </PageContainer>
  );
};

export default ResortsList;
