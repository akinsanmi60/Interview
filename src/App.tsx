import React from "react";
import { Route, Routes } from "react-router-dom";
import LoaderLayout from "./common/LoaderLayout";
import { APPROUTES } from "./Routes";
import Dashboard from "./UserApp";

const HomePage = React.lazy(() => import("./Pages/Home"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<LoaderLayout />}>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<HomePage />} />
            {Object.entries(APPROUTES).map(appRoute => {
              const [key, value] = appRoute;
              const AppRouteComponent = value.element;
              return (
                <Route
                  key={key}
                  path={value.path}
                  element={<AppRouteComponent />}
                />
              );
            })}
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
