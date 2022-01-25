import { createAction , createReducer } from "@reduxjs/toolkit";


export const startFetch = createAction("START_FETCH-DATA");
export const fetchSuccess = createAction("SUCCESS_FETCH-DATA");
export const fetchFailure = createAction("FALIURE_FETCH-DATA");


const initialValue = {
    data : []
}



const asyncReducer = createReducer(initialValue , {
    
    [startFetch.type] : (state , action)=>
    {
    }
    ,
    [fetchSuccess.type] : (state, action)=>
    {
        state.data = action.payload
    },
    [fetchFailure] : (state , action) =>
    {
    }
})

export default asyncReducer ; 

export const  fetchDate = async (dispatch)=>
{
    dispatch(startFetch());
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json();
        dispatch(fetchSuccess({data}));
    }catch(error){
        console.log(error.message);
    }
 
}