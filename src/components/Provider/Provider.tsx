import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

import BucketContextProvider from "hooks/useBucket";

interface IProviderProps {
  children: ReactNode;
}

const Provider: FC<IProviderProps> = ({ children }) => {
  return (
    <BucketContextProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </BucketContextProvider>
  );
};

export default Provider;
