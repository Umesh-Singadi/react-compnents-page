import { createSlice, configureStore } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {},
  },
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
  },
});
