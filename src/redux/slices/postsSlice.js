import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../../services";

let initialState = {
    posts: [],
    errors: null,
    loading: null,
    selectedPost: null
};

const getAll = createAsyncThunk(
    'postsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const getById = createAsyncThunk(
    'postsSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getById(id)
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);


const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.selectedPost = action.payload;
            });
    },
});

const {reducer: postReducer} = postsSlice;

const postActions = {
    getAll,getById
};

export {postReducer,postActions};