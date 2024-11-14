import { Route, Routes } from "react-router-dom";
import { routeComponents } from "./Utilities/routeComponents";

function App() {
  return (
    <Routes>
      {routeComponents.map((component) => {
        return (
          <Route
            element={component.component}
            path={component.route}
            key={component.title}
          />
        );
      })}
    </Routes>
  );
}

export default App;
