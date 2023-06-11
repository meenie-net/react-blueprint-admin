import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ResCodeEnum, api } from "../../api";

export interface IPermissionStore {
  ready: boolean;
  buttonPermission: { [key: string]: string[] };
  menuPermission: object;
}

const initialState: IPermissionStore = {
  ready: false,
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
    builder
      .addCase(fetchPermisson.pending, (state) => {
        state.ready = false;
      })
      .addCase(fetchPermisson.fulfilled, (state, { payload }) => {
        state.buttonPermission = payload;
        state.ready = true;
      })
      .addCase(fetchPermisson.rejected, (state) => {
        state.ready = false;
      });
  },
});

export const fetchPermisson: any = createAsyncThunk(
  "permission",
  async (type: "admin" | "guest") => {
    const data = await api.getPermission(type);
    if (data.code === ResCodeEnum.SUCCESS) {
      return data.data;
    }
  }
);

export const { setButtonPermission, setMenuPermission } =
  permissionStore.actions;
export default permissionStore;
