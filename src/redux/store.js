import { configureStore } from "@reduxjs/toolkit";
// Slices
import qrSchemaSlice from "./slices/qrSchemaSlice";
export default configureStore({
  reducer: {
    qrSchema: qrSchemaSlice,
  },
});
