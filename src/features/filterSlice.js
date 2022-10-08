const { createSlice } = require('@reduxjs/toolkit')
const initialState = {
    page: 1,
    search: "",
    year : "",
};
const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setYear: (state, action) => {
            state.year = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    }

});

export default filterSlice.reducer;
export const { setYear, setPage, setSearch } = filterSlice.actions;