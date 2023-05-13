import "./App.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import { AliveScope } from "react-activation";

function App() {
  return (
    <>
      <AliveScope>
        <RouterProvider router={router}></RouterProvider>
      </AliveScope>
    </>
  );
}

export default App;
