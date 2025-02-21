import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"appSlice",
    initialState:
    {
        open:false,
        emails:[],
        selectedEmail:null,
        searchInput:""
    },
    reducers:
    {
        setOpen:(state,action)=>{state.open=action.payload},
        setEmails:(state,action)=>{state.emails=action.payload},
        setSelectedEmail:(state,action)=>{state.selectedEmail=action.payload},
        setSearchInput:(state,action)=>{state.searchInput=action.payload}
    }

    }
)

export const {setOpen,setEmails,setSelectedEmail,setSearchInput}=appSlice.actions;
export default appSlice.reducer;