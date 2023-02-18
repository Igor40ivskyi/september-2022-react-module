import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/userSlice";
import {postsReducer} from "./slices/postsSlice";

const rootReducer = combineReducers({
    users: userReducer,
    posts: postsReducer,

});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};