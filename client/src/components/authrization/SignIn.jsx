import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { NavLink } from 'react-router-dom'
import axios from 'axios';

import { toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux'
import { setNotAllow, setAllow } from '../../redux/content/verify'



const SignIn = () => {
    const [show, setShow] = useState(true)
    const [typePW, setTypePW] = useState(true)

    const VerifyUser = useSelector((state) => state.VerifyUser)
    const dispatch = useDispatch()

    const {register,handleSubmit,watch,formState: { errors },} = useForm()

    // const notify = (e) => toast(e);


    const onSubmit = async (data) => {
           try {
            // debugger
            console.log(data)
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signin`,data,{

            })
            console.log(response,"responseeeee")
            const token = response.data.token
            const user = response.data.user
            if(response.status === 200 || response.status === 201 ){
                toast.success('successfully signin')
                console.log(response.data)
                dispatch(setAllow())
                setShow(false)
                console.log('kkkkkkkkkkkkkkk',token)
                // axios.defaults.headers.common['Authorization'] = `Bearer  ${token}`
                localStorage.setItem('user', user )
                localStorage.setItem('token', token  )
            } 
            if(response.status === 400 || response.status === 404 ) {
                toast(response.data.message)
                console.log(response.data.message)
            }

           } catch (error) {
            console.log('error',error)
            console.log(error.response.data.message,'-=----------------============')
            toast.error(error.response.data.message)
           }
    }

    return (
        <div className={show ? 'block' : 'hidden'}>
                <div className="absolute w-[100%] h-[100%]  py-4 md:py-8 bg-[#00000015] z-50 ">

                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-20">

                        <div
                            className="w-full bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
                            <button onClick={() => setShow(false)} className="mt-1 ml-1 {}"><img src="/images/signin/cancel.svg" alt="" /></button>
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">

                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" 
                                        {...register("email", 
                                            { required: "email is required"})}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>
                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <div className="flex bg-gray-50 border border-gray-300 rounded-lg ">
                                        <input type={typePW ? "password" : 'text'}
                                         {...register("password", { 
                                            required: "Password is required" , 
                                            minLength:{value:8, message:'Password must be at least 8 characters long'},
                                            maxLength:{value:18, message:'Password must not exceed 18 characters'}
                                        })} placeholder="••••••••" className="text-gray-900 bg-gray-50 sm:text-sm rounded-lg outline-none block w-full p-2.5" />
                                        <button type='button' className='px-3' onClick={(event) => {
                                        event.preventDefault(); // Stops form submission
                                        setTypePW(!typePW);
                                    }}>{typePW ? (<img src="/images/signin/closeeye.svg" alt="" />) : (<img src="/images/signin/openeye.svg" alt="" />)}</button>
                                        </div>
                                    </div>
                                  
                                    <button type="submit" className="text-white bg-red-600 py-1.5 px-4 rounded font-semibold w-full">
                                        Sign in
                                    </button>
                                   
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SignIn
