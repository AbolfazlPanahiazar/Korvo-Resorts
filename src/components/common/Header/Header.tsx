import { FC, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiBarbedSpear } from "react-icons/gi";

import { ROUTES } from "const";

export const Header: FC = () => {
  const { pathname } = useLocation();

  const isResortsList: boolean = useMemo(
    () => pathname === ROUTES.resortsList,
    [pathname]
  );

  const isBucket: boolean = useMemo(
    () => pathname === ROUTES.bucket,
    [pathname]
  );

  return (
    <header className="flex justify-between items-center py-3 md:py-5 px-3">
      <div className="flex items-center mr-3 md:mr-10">
        <GiBarbedSpear size={20} className="mr-3" />
        <h1 className="font-bold text-lg">Korvo Resorts</h1>
      </div>
      <ul className="flex-grow flex">
        <li
          className={`mr-3 md:mr-10 ${
            isResortsList
              ? "text-gray-700 border-b-2 border-b-gray-700"
              : "text-gray-400"
          }`}
        >
          <Link to={ROUTES.resortsList}>List</Link>
        </li>
        <li
          className={`mr-3 md:mr-10 ${
            isBucket
              ? "text-gray-700 border-b-2 border-b-gray-700"
              : "text-gray-400"
          }`}
        >
          <Link to={ROUTES.bucket}>Bucket</Link>
        </li>
      </ul>
      <button className="bg-sky-900 text-white px-3 py-2 rounded-lg">
        Get App
      </button>
    </header>
  );
};
