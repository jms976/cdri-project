import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";

const Main = lazy(() => import("./pages/Main"))
const App = () => {
  return (
     <Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path="*">
              <React.Fragment>NotFound</React.Fragment>
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
  );
}

export default App;
