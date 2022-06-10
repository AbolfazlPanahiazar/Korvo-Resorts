import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Provider from "components/Provider/Provider";

const App: FC = () => {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<h1>resorts</h1>} />
        <Route path="/resorts/:id" element={<h1>single resport</h1>} />
        <Route path="/bucket" element={<h1>bucket</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Provider>
  );
};

export default App;
