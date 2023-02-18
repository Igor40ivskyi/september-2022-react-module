import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../../services";

const initialState = {
    posts: [],
    errors: null,
    loading: null,
    selectedPost: null,

};
const getAllPosts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const getSelectedPost = createAsyncThunk(
    'postsSlice/getSelectedPost',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        saveSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
    },
    extraReducers: (builder => {
        builder
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(getSelectedPost.fulfilled, (state, action) => {
                state.selectedPost = action.payload;
            });
    }),
});

const {reducer: postsReducer,actions:{saveSelectedPost}} = postsSlice;

const postsActions = {getAllPosts,saveSelectedPost,getSelectedPost};

export {postsReducer, postsActions};