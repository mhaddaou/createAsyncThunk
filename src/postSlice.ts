import { createSlice , createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
const JSON_PLACEHOLDER_API = "https://jsonplaceholder.typicode.com/posts"
export interface Post{
    userId : number;
    id : number;
    title : string;
    body : string
}
interface PostState {
    loading : boolean,
    error : null | string,
    data : Post[],
}

const initialState = {
    loading : false,
    error : null,
    data : [],
}

export const getPosts = createAsyncThunk('posts/getPosts', async (data, thunkApi) =>{
    try{
        const res = await axios.get<Post[]>(JSON_PLACEHOLDER_API)
        console.log('afen')
        console.log('here return ', res.data)
        return res.data;

    }catch(e : any){
        return thunkApi.rejectWithValue(e.message);
    }
})

//slice method

const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers : {},
    extraReducers (builder) {
        builder.addCase(getPosts.pending, ()=>{
            return {
              ...initialState,
                loading : true,
            }
        })
        .addCase(getPosts.fulfilled, (state : PostState, action : PayloadAction<Post[]>) =>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getPosts.rejected, (state, action : PayloadAction<any> ) =>{
            state.loading = false;
            state.error = action.payload;
        })
    }

})

export default postSlice.reducer;