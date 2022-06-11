import { FC, useEffect, useState } from "react";

import data from "const/data.json";
import { PageContainer } from "components/common";
import { ResortCard, Paginator } from "components/ResortsListPage";
import { IResort } from "types";

const ResortsList: FC = () => {
  const [currentSort, setCurrentSort] = useState<"title" | "price">("title");
  const [titleSearch, setTitleSearch] = useState<string>("");
  const [atLeastPrice, setAtleastPrice] = useState<number>();
  const [atLastPrice, setAtlastPrice] = useState<number>();
  const [resorts, setResorts] = useState<IResort[]>(
    JSON.parse(JSON.stringify(data))
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  const refilter = () => {
    let newResorts: IResort[] = JSON.parse(JSON.stringify(data));
    if (currentSort === "title") {
      newResorts = newResorts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (currentSort === "price") {
      newResorts = newResorts.sort(
        (a, b) => +b.price.replace("$", "") - +a.price.replace("$", "")
      );
    }
    if (titleSearch) {
      newResorts = newResorts.filter((resort) =>
        resort.title.toLowerCase().includes(titleSearch.toLowerCase())
      );
    }
    if (atLeastPrice) {
      newResorts = newResorts.filter(
        (resort) => +resort.price.replace("$", "") >= atLeastPrice
      );
    }
    if (atLastPrice) {
      newResorts = newResorts.filter(
        (resort) => +resort.price.replace("$", "") <= atLastPrice
      );
    }
    setResorts(newResorts);
  };

  useEffect(() => {
    refilter();
  }, [currentSort, titleSearch, atLeastPrice, atLastPrice]);

  return (
    <PageContainer>
      <div className="p-3">
        <h1 className="font-bold">Resorts List</h1>
      </div>
      <div className="p-3 flex flex-col md:flex-row">
        <select
          value={currentSort}
          onChange={(e) => setCurrentSort(e.target.value as "title" | "price")}
          className="px-3 py-2 bg-blue-800 text-white rounded-md"
        >
          <option className="bg-white text-black" value="title">
            Title
          </option>
          <option className="bg-white text-black" value="price">
            Price
          </option>
        </select>
        <input
          value={titleSearch}
          onChange={(e) => setTitleSearch(e.target.value)}
          placeholder="Search in titles"
          className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md ml-0 md:ml-5 mt-3 md:mt-0"
        />
        <input
          value={atLeastPrice}
          onChange={(e) => setAtleastPrice(+e.target.value)}
          placeholder="At least price"
          className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md ml-0 md:ml-5 mt-3 md:mt-0"
          type="number"
        />
        <input
          value={atLastPrice}
          onChange={(e) => setAtlastPrice(+e.target.value)}
          placeholder="At last price"
          className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md ml-0 md:ml-5 mt-3 md:mt-0"
          type="number"
        />
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
          pagesCount={
            resorts.length % 20 === 0
              ? resorts.length / 20
              : Math.floor(resorts.length / 20) + 1
          }
          setCurrentPage={setCurrentPage}
        />
      </div>
    </PageContainer>
  );
};

export default ResortsList;
