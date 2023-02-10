import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/userSlice";
import {postReducer} from "./slices/postsSlice";

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};




