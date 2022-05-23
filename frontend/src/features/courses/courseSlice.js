import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  courses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    reset: (state) => initialState
  }
})

export const {reset} = courseSlice.actions
export default courseSlice.reducer