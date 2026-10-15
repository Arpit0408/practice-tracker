import { createSlice } from "@reduxjs/toolkit";

const savedQuestions = localStorage.getItem("questionsData");

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: savedQuestions ? JSON.parse(savedQuestions) : [],
  },

  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem("questionsData", JSON.stringify(state.data));
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
      localStorage.setItem("questionsData", JSON.stringify(state.data));
    },
    updateData: (state, action) => {
      state.data = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
      localStorage.setItem("questionsData", JSON.stringify(state.data));
    },
  },
});

export default dataSlice.reducer;
export const { addData, deleteData, updateData } = dataSlice.actions;
