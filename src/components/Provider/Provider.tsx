import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface IProviderProps {
  children: ReactNode;
}

const Provider: FC<IProviderProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Provider;
