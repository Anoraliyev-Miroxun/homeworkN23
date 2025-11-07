import React from "react"
import { AppContextWrapper } from "../context/app-context/app-context"
import { Form } from '../components/form.jsx';
import { Edit } from '../components/edit.jsx';

export const Info = ({ username, id }) => {
    const [data, setData] = React.useState({});

    const { dispatch } = React.useContext(AppContextWrapper);

    const ochir = () => {
        dispatch({ type: "DELETE_USER", id })
    }

    const update = () => {


        return (
            <>
                <div>
                    <Form />
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                <h1>{username}</h1>
                <button onClick={ochir} className="p-2 bg-red-700">
                    ochirish
                </button>

                <button onClick={<Edit />} className="p-2 bg-red-700">
                    edit
                </button>
            </div>
        </>
    )
}