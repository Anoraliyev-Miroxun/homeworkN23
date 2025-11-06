import React from "react"

export const AppContextWrapper=React.createContext();
const initialValue={
    list:[]
}

const appreducer=(state,action)=>{
switch(action.type){
    case "CREATE_USER":
        return {...state,list:[...state.list,action.value]};
    case "DELETE_USER":
        return {
            ...state,list: state.list.filter((item)=>item.id !==action.id)
        };
    default:
        return state;
}
}

export const AppContext=({children})=>{
    const [data,dispatch]=React.useReducer(appreducer,initialValue)

    return(
        <>
    <AppcontextWrapper.Provider value={{data,dispatch}}>
        {children}
    </AppcontextWrapper.Provider>
        </>
    )
}