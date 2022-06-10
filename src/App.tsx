import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Provider from "components/Provider/Provider";
import { ROUTES } from "const";

const ResortsList = lazy(() => import("pages/ResortsList/ResortsList"));

const App: FC = () => {
  return (
    <Provider>
      <Suspense fallback={<span>loading page</span>}>
        <Routes>
          <Route path={ROUTES.resortsList} element={<ResortsList />} />
          <Route
            path={ROUTES.resortDetails}
            element={<h1>single resport</h1>}
          />
          <Route path={ROUTES.bucket} element={<h1>bucket</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </Provider>
  );
};

export default App;
