import { createSlice } from "@reduxjs/toolkit";
import { useRef } from "react";

const initialState = {
    tasks: [],
    isLoading: false,
}

const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    refreshTask(state, action) {
      state.tasks = window.location.reload();
    },
    refreshTask2(state, action) {
      if (action.payload === "mg7") {
        window.location.reload();
      }
      state.tasks = action.payload;
    },
  }
})

export const { refreshTask, refreshTask2 } = taskReducer.actions;

export default taskReducer.reducer;
