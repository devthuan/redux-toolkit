import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const getCompanies = (createAsyncThunk(
    'pokemon/fetchByName',

    async (url) => {

        try {
            const response = await fetch(url)

            const data = response ? response.json() : '';
            return data

        } catch (e) {
            console.log(e)
        }


    }
))

const initialState = {
    company: [],
    loading: false,
    error: false
}

const companySlice = createSlice({
    name: 'companyList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCompanies.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getCompanies.fulfilled, (state, action) => {
                state.company = action.payload;
                state.loading = false;
                state.error = false;
            })
            .addCase(getCompanies.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
    }
})



export default companySlice.reducer;
