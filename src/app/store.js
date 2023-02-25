import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../features/music/musicSlice";

const store = configureStore({

    reducer: {
        music: musicReducer,
    },
});

export default store;