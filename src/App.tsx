import { RouterProvider } from "react-router-dom";
import mainRouter from "./routes/MainRouter";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
}

export default App;
