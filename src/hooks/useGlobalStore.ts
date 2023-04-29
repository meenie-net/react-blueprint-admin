import { useSelector } from "react-redux";

function useGlobalStore() {
  return useSelector((state: RootState) => state.global);
}

export default useGlobalStore

  