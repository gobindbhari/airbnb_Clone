import React, { useState } from 'react'
import { NavLink     } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const [first, setfirst] = useState(true)
    const [typePW, setTypePW] = useState(true)

    const notify = (e) => toast(e);

    const blockdisplay = () => {
        setfirst(false)
        console.log('clickeddddd')
    }

    const onSubmit = async (data) => {
        // debugger
        try {
            console.log(data)
        const response = await axios.post('http://localhost:5500/user/register',data)
        console.log(response.data.message)
        if(response.status === 201 || response.status === 200 ){
            notify("Account is successfully created")
        }else{
            notify(response.data.message)
        }
    } catch (error) {
            console.log('Account is not submitted' , error)
            notify(error.response.data.message)
        }
    }

    return (
    <div className={first ? '' : "hidden"} >
        <section className="pt-3 z-20 relative bg-[#00000015]">
            <div className="flex flex-col items-center justify-center  py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow pb-5 relative md:mt-0 sm:max-w-md xl:p-0 ">
                    <button onClick={() => blockdisplay()} className='p-2'>
                        <img className=' object-center' src="public\images\signin\cancel.svg" alt="" />
                    </button>
                    <div className="px-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 " >
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email"
                                    {...register("email", { required: "email is required" })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" />
                            </div>
                            <div className='w-full '>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <div className="flex bg-gray-100  border-gray-300 rounded-lg">
                                    <input type={typePW ? "password" : 'text'}
                                        {...register("password", { 
                                            required: "Password is required" , 
                                            minLength:{value:8, message:'Password must be at least 8 characters long'},
                                            maxLength:{value:18, message:'Password must not exceed 18 characters'}
                                        })}
                                        placeholder="••••••••" className="bg-gray-100 rounded-lg text-gray-900 text-sm outline-none block w-[90%] p-2.5 " required="" />

                                    <button type='button' className='px-3' onClick={(event) => {
                                        event.preventDefault(); // Stops form submission
                                        setTypePW(!typePW);
                                    }}>{typePW ? (<img src="public\images\signin\closeeye.svg" alt="" />) : (<img src="public\images\signin\openeye.svg" alt="" />)}</button>

                                </div>

                            </div>

                            <button type='submit' className="w-full text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg text-lg px-5 py-2.5 text-center ">Create an account</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
        <ToastContainer/>
    </div>
    )
}

export default SignUp
