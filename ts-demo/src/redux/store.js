import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "../demo/demoSlice";

export default configureStore({
  reducer: {
    demo: demoSlice,
  },
});
