import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Provider from "components/Provider/Provider";
import { ROUTES } from "const";

const ResortsList = lazy(() => import("pages/ResortsList/ResortsList"));
const ResortDetails = lazy(() => import("pages/ResortDetails/ResortDetails"));
const Bucket = lazy(() => import("pages/Bucket/Bucket"));

const App: FC = () => {
  return (
    <Provider>
      <Suspense
        fallback={
          <div className="w-screen h-screen flex justify-center items-center text-6xl">
            LOADING
          </div>
        }
      >
        <Routes>
          <Route path={ROUTES.resortsList} element={<ResortsList />} />
          <Route path={ROUTES.resortDetails} element={<ResortDetails />} />
          <Route path={ROUTES.bucket} element={<Bucket />} />
          <Route
            path="*"
            element={
              <div className="w-screen h-screen flex justify-center items-center text-6xl">
                404 NOT FOUND
              </div>
            }
          />
        </Routes>
      </Suspense>
    </Provider>
  );
};

export default App;
