import { configureStore, createSlice } from "@reduxjs/toolkit";

interface Job {
    id: number,
    title: string,
    text: string,
    price: number
}

interface JobSliceState{
    jobs: Job[]
}

// const initialState

export default configureStore({
    reducer: {}
})