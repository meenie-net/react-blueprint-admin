import "./App.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import { AliveScope } from "react-activation";
import Progress from "./components/Progress";

function App() {
  return (
    <>
      <AliveScope>
        <RouterProvider
          router={router}
          fallbackElement={<Progress />}
        ></RouterProvider>
      </AliveScope>
    </>
  );
}

export default App;
