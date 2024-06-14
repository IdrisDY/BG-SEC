import { configureStore } from "@reduxjs/toolkit";
import LandingPage from "./LandingPageSlice";
export const store = configureStore({
  reducer: { LandingPage },
});
