import { useSelector } from "react-redux";
import { RootState } from "../stores";

function useGlobalStore() {
  return useSelector((state: RootState) => state.global);
}

export default useGlobalStore;
