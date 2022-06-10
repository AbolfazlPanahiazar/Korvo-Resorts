import { FC, ReactNode } from "react";

import { Header } from "components/common";

interface IPageCotainerProps {
  children: ReactNode;
}

export const PageContainer: FC<IPageCotainerProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full min-h-full max-w-6xl">
        <Header />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};
