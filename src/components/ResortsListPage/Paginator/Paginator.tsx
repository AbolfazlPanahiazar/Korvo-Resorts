import { FC } from "react";

interface IProps {
  currentPage: number;
  pagesCount: number;
  setCurrentPage: (page: number) => void;
}

export const Paginator: FC<IProps> = ({
  currentPage,
  pagesCount,
  setCurrentPage,
}) => {
  return (
    <nav>
      <ul className="inline-flex -space-x-px">
        <li
          className="cursor-pointer"
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          <span className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Previous
          </span>
        </li>
        {[1, 2, 3].map((page) =>
          currentPage === page ? (
            <ActivePage page={page} />
          ) : (
            <UnActivePage page={page} onClick={() => setCurrentPage(page)} />
          )
        )}
        <li
          className="cursor-pointer"
          onClick={() => currentPage < 3 && setCurrentPage(currentPage + 1)}
        >
          <span className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
};

const UnActivePage: FC<{ page: number; onClick: () => void }> = ({
  page,
  onClick,
}) => {
  return (
    <li className="cursor-pointer" onClick={onClick}>
      <span className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        {page}
      </span>
    </li>
  );
};

const ActivePage: FC<{ page: number }> = ({ page }) => {
  return (
    <li className="cursor-pointer">
      <span className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
        {page}
      </span>
    </li>
  );
};
