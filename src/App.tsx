import "./App.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPermisson } from "./stores/permission";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPermisson());
  }, []);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
