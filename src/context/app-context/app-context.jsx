import React from "react"

export const AppContextWrapper = React.createContext();

const initialValue = {
    list: []
}

const appreducer = (state, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return { ...state, list: [...state.list, action.value] };
        case "DELETE_USER":
            return {
                ...state, list: state.list.filter((item) => item.id !== action.id)
            };
        case "UPDATE_USER":
            return {
                // ...state, list: state.list.map((i)=>{
                //     i.id==action.id?i.username=action.
                // })
            };
        default:
            return state;
    }
}

export const AppContext = ({ children }) => {
    const [data, dispatch] = React.useReducer(appreducer, initialValue)

    return (
        <>
            <AppContextWrapper.Provider value={{ data, dispatch }}>
                {children}
            </AppContextWrapper.Provider>
        </>
    )
}