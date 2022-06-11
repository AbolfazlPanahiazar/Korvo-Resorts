import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BucketContextProvider from "hooks/useBucket";

interface IProviderProps {
  children: ReactNode;
}

const Provider: FC<IProviderProps> = ({ children }) => {
  return (
    <BucketContextProvider>
      <BrowserRouter>{children}</BrowserRouter>
      <ToastContainer />
    </BucketContextProvider>
  );
};

export default Provider;
