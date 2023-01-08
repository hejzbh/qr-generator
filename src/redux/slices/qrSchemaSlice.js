import { createSlice } from "@reduxjs/toolkit";
// Schema types
import { schemas } from "../../utils/schema";
const initialState = {};

export const qrSchemaSlice = createSlice({
  name: "QR schema",
  initialState: {
    type: "wifi",
  },
  reducers: {
    changeSchema(state, action) {
      const { newType } = action.payload;
      if (newType === state.type) return state;

      return { ...state, type: newType };
    },
  },
});

export const { changeSchema } = qrSchemaSlice.actions;

export default qrSchemaSlice.reducer;
