import { createSlice } from "@reduxjs/toolkit";

const LandingPage = createSlice({
  name: "LandingPage",
  initialState: { showModal: false ,loading:true},
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setShowModal ,setLoading} = LandingPage.actions;
export default LandingPage.reducer;
