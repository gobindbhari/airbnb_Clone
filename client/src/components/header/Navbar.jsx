import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import NavDownBox from './NavDownBox'
import SignIn from '../authrization/SignIn'
import SignUp from '../authrization/SignUp'

import { useSelector, useDispatch } from 'react-redux'
import { setNotAllow, setAllow } from '../../redux/content/verify'
import axios from 'axios'


const Navbar = () => {
    const [navcon, setNavcon] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [signShow, setSignShow] = useState(false)
    const [signupShow, setSignupShow] = useState(false)
    const [valid, setValid] = useState(false)
    const [id, setId] = useState()
    const [just, setjust] = useState(0)

    const VerifyUser = useSelector((state) => state.VerifyUser)
    const dispatch = useDispatch()
    console.log(VerifyUser)

    const navigate = useNavigate()


    const getdata = async (e) => {
        const User = await axios(`${import.meta.env.VITE_BACKEND_URL}/user/${e}`)
        console.log(User)
        User ? dispatch(setAllow()) : dispatch(setNotAllow())
    }
    useEffect(() => {
        let user = localStorage.getItem('user') || null
        console.log(user, 'user is logged in this device')
        getdata(user)
        setId(user)
    }, [dispatch])

    useEffect(() => {
        let user = localStorage.getItem('user') || null
        console.log(user, 'user is logged in this device')
        getdata(user)
        setId(user)
    })

    useEffect(() => {
        const handleScroll = () => {
            // Check if the page has scrolled past 200px
            if (window.scrollY > 50) {
                setNavcon(false);
            } else {
                setNavcon(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [thrid, setThrid] = useState(false)

    const hoverEffect = {
        visibility: first ? 'hidden' : 'visible'
    }
    const hoverSecond = {
        visibility: first ? 'hidden' : 'visible',
        visibility: second ? 'hidden' : 'visible'
    }
    const hoverThrid = {
        visibility: second ? 'hidden' : 'visible',
        visibility: thrid ? 'hidden' : 'visible'
    }

    function handleLogout() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setIsOpen(false)
        dispatch(setNotAllow())
        setjust(just + 1)
        navigate('/')
    }

    const handleClick = () => {
        VerifyUser ? (navigate(`/host-home/${id}`), setIsOpen(false)) : (setSignShow(true),
        window.scrollTo({top:0, behavior: 'smooth'}),
        // setIsOpen(false)
        setIsOpen(isOpen ? false : true)
    )
    }

    const handleMenu = () => {
        setIsOpen(isOpen ? false : true)
        setSignShow(false)
        setSignupShow(false)
        // setTimeout(() => {
        //     setIsOpen(false)
        // }, 3000);
    }

    return (
        <>
            <header className='top-0 sticky w-screen my-auto bg-white z-10 max-h-80 min-h-44' >
                <nav className='mx-9 my-2 font-semibold  max-md:mr-2 max-md:ml-3 '>
                    <div className='flex justify-between pt-2'>

                        {/* first */}
                        <div>
                            <NavLink to={'/'}>
                                <img className='h-16 rounded-full  ' src="/images/navbar/logo.webp" alt="" />
                            </NavLink>
                        </div>

                        {/* second */}
                        {navcon ?
                            (<div className='flex flex-col justify-center h-full  pt-2 lg:visible '>
                                <div className='flex justify-center mb-3 gap-3 text-lg max-lg:hidden duration-500'>
                                    <div>
                                        <button className='w-16 py-1'>Stays</button>
                                    </div>
                                    <div>
                                        <button className='hover:bg-slate-100 px-5 py-1 rounded-3xl'>Experiences</button>
                                    </div>
                                </div>


                            </div>)
                            : (
                                <div 
                                // data-aos="bottom-top" data-aos-duration="1000" 
                                className="outline outline-2 outline-slate-200  rounded-full ml-20 max-lg:hidden py-2">
                                    <div className="w-full h-12 flex gap-2 pl-3 px-2 justify-between items-center duration-[500ms]">
                                        <div className="border-r-2 pr-5"><button>Anywhere</button></div>
                                        {/* <div className="border-r-2 h-[80%] w-1 my-auto"></div> */}
                                        <div className="border-r-2 pr-5"><button>Any Week</button></div>
                                        {/* <div className="border-r-2 h-[80%] w-1 my-auto"></div> */}
                                        <div className="flex justify-center items-center gap-3"><button>Add Guests</button>
                                            <div className='bg-red-500 flex justify-center items-center rounded-full '>
                                                <img className='p-2 h-10 w-10rounded-full' src="/images/navbar/search.svg" alt="" />
                                            </div></div>
                                    </div>
                                </div>
                            )

                        }

                        {/* third */}
                        <div className='flex gap-4 justify-center align-middle h-full'>
                            <div className='flex gap-2 justify-center '>
                                <h3 className='m-auto hover:bg-slate-100 rounded-3xl px-3 py-2'>Homenest your home </h3>
                                <button className='hover:bg-slate-100 rounded-full px-2'><img className='h-4 m-auto' src="/images/navbar/earth.svg" alt="" /></button>
                            </div>
                            <button onClick={() => handleMenu()} className=' flex gap-2 rounded-full px-4 py-2 h-12 outline outline-slate-300 outline-1 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                <img className='h-4 m-auto' src="/images/navbar/threelines.svg" alt="" />
                                <img className='h-8 rounded-full bg-slate-400 p-1' src="/images/navbar/profile.svg" alt="" />
                            </button>
                            {/* Dropdown menu */}
                            <div className="">
                                {isOpen && (
                                    <div className="absolute right-10 z-10 mt-16 w-48 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ">
                                        <div className="py-1">
                                            {!VerifyUser ? <> <button
                                                onClick={() => { setSignupShow(true), setIsOpen(false), setIsOpen(false), window.scrollTo({top:0,behavior:'smooth'}) }}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                                            >
                                                Sign up
                                            </button>
                                                <button
                                                    onClick={() => handleClick()}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                                                >
                                                    Sign in
                                                </button> </> : null}
                                            {VerifyUser ? <button
                                                onClick={() => handleLogout()}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                                            >
                                                Log-out
                                            </button> : null}
                                            {/* <NavLink
                                                to={VerifyUser ? `/host-home/${id}`:''}
                                                onClick={(e) => {
                                                    if (!VerifyUser) {
                                                      e.preventDefault(); // Prevent navigation
                                                      handleClick();      // Trigger the custom function
                                                    }
                                                  }}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Airbnb your home
                                            </NavLink> */}
                                            <button
                                                onClick={() => handleClick()}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Homenest your home
                                            </button>
                                            <NavLink
                                                to="/host-an-experience"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Host an experience
                                            </NavLink>
                                            <NavLink
                                                to="/help-center"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Help Centre
                                            </NavLink>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>



                    {/* second Down */}
                    <div className={navcon ? 'visible' : 'hidden '}>
                        <div className="w-[750px] mx-auto max-lg:hidden duration-[2000ms]">
                            <div className="max-lg:invisible  top-20 -left-[25vw] outline outline-1 outline-slate-200 rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-medium w-fit">
                                <div className='  w-fit flex items-center h-[70px]'>

                                    <div onMouseEnter={() => setFirst(true)} onMouseLeave={() => setFirst(false)} className='flex  h-full w-fit hover:bg-slate-200 rounded-full pl-10 py-2 duration-200'>
                                        <div className="">
                                            <div>Where</div>
                                            <input className='h-4 max-w-fit outline-none font-normal bg-transparent' type="text" placeholder='Search destinatios' />
                                        </div>
                                        <div style={hoverEffect} className="border-r-2 h-[80%] w-1 my-auto max-lg:hidden"></div>
                                    </div>

                                    <div onMouseEnter={() => { setFirst(true); setSecond(true) }} onMouseLeave={() => { setFirst(false); setSecond(false) }} className=' flex pl-4 py-3 hover:bg-slate-200 rounded-full h-full  duration-200'>
                                        <div>
                                            <div>Chech in</div>
                                            <input className='outline-none font-normal h-4 w-28 bg-transparent' placeholder='Add dates' type="text" />
                                        </div>
                                        <div style={hoverSecond} className="border-r-2 h-[80%] w-1 my-auto max-lg:hidden"></div>
                                    </div>

                                    <div onMouseEnter={() => { setThrid(true); setSecond(true) }} onMouseLeave={() => { setThrid(false); setSecond(false) }} className='flex rounded-full pl-4 py-3 h-full hover:bg-slate-200 duration-200'>
                                        <div className="pr-10">
                                            <div>Chech out</div>
                                            <input className='outline-none font-normal h-4 w-20 bg-transparent' placeholder='Add dates' type="text" />
                                        </div>
                                        <div style={hoverThrid} className="border-r-2 h-[80%] w-1 my-auto max-lg:hidden"></div>
                                    </div>

                                    <div onMouseEnter={() => setThrid(true)} onMouseLeave={() => setThrid(false)} className='flex gap-2 px-4 py-2 h-full hover:bg-slate-200 rounded-full w-fit duration-200'>
                                        <div>
                                            <div>Who</div>
                                            <input className='outline-none font-normal h-4 w-32 bg-transparent' placeholder='Add guests' type="text" />
                                        </div>
                                        <div className=' bg-red-600 rounded-full flex min-w-fit justify-center'>
                                            <img className='scale-50' src="/images/navbar/search.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <NavDownBox />
            </header>
            {!VerifyUser ? <>
                {signShow ? (
                    <div className="absolute h-[100%] w-[100%] top-0">
                        <SignIn />
                    </div>) : null}
                {signupShow ? (
                    <div className="absolute h-[100%] w-[100%] top-0 ">
                        <SignUp />
                    </div>) : null}
            </> : null}
        </>
    )
}

export default Navbar
