import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    selectedDestination: "mars",
    selectedCrew: "commander",
    selectedTechTab: "1",
  },
  reducers: {
    setDestination(state, action) {
      state.selectedDestination = action.payload;
    },
    setCrew(state, action) {
      state.selectedCrew = action.payload;
    },
    setSelectedTechTab(state, action) {
      state.selectedTechTab = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
