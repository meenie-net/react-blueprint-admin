import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ResCodeEnum, api } from "../../api";

export interface IPermissionStore {
  buttonPermission: { [key: string]: string[] };
  menuPermission: object;
}

const initialState: IPermissionStore = {
  buttonPermission: {},
  menuPermission: {},
};
const permissionStore = createSlice({
  name: "permission-store",
  initialState,
  reducers: {
    setButtonPermission: (state) => {
      state.buttonPermission = {};
    },
    setMenuPermission: (state) => {
      state.menuPermission = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPermisson.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export const fetchPermisson = createAsyncThunk("permission", async () => {
  const { data } = await api.getPermission();
  if (data.status === ResCodeEnum.SUCCESS) {
    return data.data;
  }
});

export const { setButtonPermission, setMenuPermission } =
  permissionStore.actions;
export default permissionStore;
