import { createSlice } from "@reduxjs/toolkit";
// Schema types
import { schemas } from "../../utils/schema";

export const qrSchemaSlice = createSlice({
  name: "QR schema",
  initialState: {
    type: "wifi",
    data: {
      ...schemas["wifi"],
    },
  },
  reducers: {
    changeSchema(state, action) {
      const { newType } = action.payload;
      if (newType === state.type) return state;

      return { data: schemas[newType], type: newType };
    },
    updateQrData(state, action) {
      const { payload } = action;
      if (payload.parentObject) {
        return {
          ...state,
          data: {
            ...state.data,
            [payload.parentObject]: {
              ...state.data[payload.parentObject],
              [payload.name]: payload.value,
            },
          },
        };
      } else {
        console.log("(●)");
        return {
          ...state,
          data: {
            ...state.data,
            [payload.name]: payload.value,
          },
        };
      }
    },
  },
});

export const { changeSchema, updateQrData } = qrSchemaSlice.actions;

export default qrSchemaSlice.reducer;
