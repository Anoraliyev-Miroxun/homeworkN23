import React from 'react';
import {useForm} from 'react-hook-form';
import {AppContextWrapper} from '../context/app-context/app-context.jsx';
import { nanoid } from 'nanoid';


export const Form=()=>{
    const {handleSubmit,reset,register}=useForm();
    const {dispatch}=React.useContext(AppContextWrapper)

    const sumbit=(data)=>{
        dispatch({type:"CREATE_USER",value:{...data,id:nanoid()}})
        reset();
    }

    return (
        <form className='flex gap-5' onSubmit={handleSubmit(sumbit)} action="">
            <input className='bg-amber-400' {...register("username")} type="text" />
            <button className='p-4 bg-blue-500' type='submit'>send</button>
        </form>
    )
}

