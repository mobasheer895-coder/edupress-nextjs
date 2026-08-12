import { allCourses, Course } from "@/data/coursesData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CoursesState {
  allCourses: Course[];
  currentPage: number;
  itemsPerPage : number
}

const initialState: CoursesState = {
  allCourses: allCourses,
  currentPage: 1,
  itemsPerPage: 6,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // التعديل: هنا نحدث الـ currentPage وليس allCourses
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    nextPage: (state) => {
      state.currentPage += 1;
    },

    prevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    }
  }
});

export const { setPage, nextPage, prevPage } = coursesSlice.actions;

export default coursesSlice.reducer;