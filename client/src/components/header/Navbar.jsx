import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import NavDownBox from './NavDownBox'
import gsap from 'gsap'
import SignIn from '../authrization/SignIn'


const Navbar = () => {
    const [navcon, setNavcon] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [signShow, setSignShow] = useState(false)

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
    return (
        <>
            <header className='top-0 w-screen fixed bg-white z-10' >
                <nav className='mx-9 my-5 font-semibold '>
                    <div className='flex justify-between'>

                        {/* first */}
                        <div>
                            <NavLink to={'/'}>
                                <img className='h-10 w-28 ' src="images/navbar/logo.svg" alt="" />
                            </NavLink>
                        </div>

                        {/* second */}
                        {navcon ?
                            (<div className='flex flex-col justify-center h-full  pt-2 lg:visible'>
                                <div className='flex justify-center mb-3 gap-3 text-lg max-lg:hidden '>
                                    <div>
                                        <button className='w-16 py-1'>Stays</button>
                                    </div>
                                    <div>
                                        <button className='hover:bg-slate-100 px-5 py-1 rounded-3xl'>Experiences</button>
                                    </div>
                                </div>


                            </div>)
                            : (
                                <div className="outline outline-2 outline-slate-200  rounded-full ml-20 max-lg:hidden">
                                    <div className="w-96 h-12 flex gap-3 px-2 justify-between items-center">
                                        <div className=""><button>Anywhere</button></div>
                                        <div className="border-r-2 h-[80%] w-1 my-auto"></div>
                                        <div className=""><button>Any Week</button></div>
                                        <div className="border-r-2 h-[80%] w-1 my-auto"></div>
                                        <div className="flex justify-center items-center gap-3"><button>Add Guests</button>
                                            <div className='bg-red-500 flex justify-center items-center rounded-full '>
                                                <img className='p-2 h-10 rounded-full' src="images/navbar/smallsearch.svg" alt="" />
                                            </div></div>
                                    </div>
                                </div>
                            )

                        }

                        {/* third */}
                        <div className='flex gap-4 justify-center align-middle h-full'>
                            <div className='flex gap-2 justify-center '>
                                <h3 className='m-auto hover:bg-slate-100 rounded-3xl px-3 py-2'>Airbnb your home </h3>
                                <button className='hover:bg-slate-100 rounded-full px-2'><img className='h-4 m-auto' src="images/navbar/earth.svg" alt="" /></button>
                            </div>
                            <button onClick={() => {setIsOpen(isOpen ? false : true), setSignShow(false)}} className=' flex gap-2 rounded-full px-4 py-2 h-12 outline outline-slate-300 outline-1 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                <img className='h-4 m-auto' src="images/navbar/threelines.svg" alt="" />
                                <img className='h-8 rounded-full bg-slate-400 p-1' src="images/navbar/profile.svg" alt="" />
                            </button>
                            {/* Dropdown menu */}
                            <div className="">
                                {isOpen && (
                                    <div className="absolute right-10 z-10 mt-16 w-48 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
                                        <div className="py-1">
                                            <NavLink
                                                to="/signup"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Sign up
                                            </NavLink>
                                            <button
                                                onClick={() => setSignShow(true)}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Sign in
                                            </button>
                                            <NavLink
                                                to="/host-home"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Airbnb your home
                                            </NavLink>
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
                        <div className={navcon ? 'visible': 'hidden' }>
                        <div className="w-[67vw] mx-auto max-lg:hidden ">
                            <div className="max-lg:invisible  top-20 -left-[25vw] outline outline-1 outline-slate-200 rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-medium">
                                <div className='  w-[67vw] flex items-center h-[70px]'>
                                
                                    <div onMouseEnter={() => setFirst(true)} onMouseLeave={() => setFirst(false)} className='flex  h-full w-[40%] hover:bg-slate-300 rounded-full pl-10 py-2'>
                                        <div className="">
                                            <div>Where</div>
                                            <input className='h-4 w-52 outline-none font-normal bg-transparent' type="text" placeholder='Search destinatios' />
                                        </div>
                                        <div style={hoverEffect} className="border-r-2 h-[80%] w-1 my-auto lg:hidden"></div>
                                    </div>

                                    <div onMouseEnter={() => { setFirst(true); setSecond(true) }} onMouseLeave={() => { setFirst(false); setSecond(false) }} className=' flex pl-10 py-3 hover:bg-slate-300 rounded-full h-full'>
                                        <div>
                                            <div>Chech in</div>
                                            <input className='outline-none font-normal h-4 w-28 bg-transparent' placeholder='Add dates' type="text" />
                                        </div>
                                        <div style={hoverSecond} className="border-r-2 h-[80%] w-1 my-auto lg:hidden"></div>
                                    </div>

                                    <div onMouseEnter={() => { setThrid(true); setSecond(true) }} onMouseLeave={() => { setThrid(false); setSecond(false) }} className='flex rounded-full pl-10 py-3 h-full hover:bg-slate-300'>
                                        <div className="pr-10">
                                            <div>Chech out</div>
                                            <input className='outline-none font-normal h-4 w-20 bg-transparent' placeholder='Add dates' type="text" />
                                        </div>
                                        <div style={hoverThrid} className="border-r-2 h-[80%] w-1 my-auto lg:hidden"></div>
                                    </div>

                                    <div onMouseEnter={() => setThrid(true)} onMouseLeave={() => setThrid(false)} className='flex gap-4 pl-10 py-2 h-full hover:bg-slate-300 rounded-full w-full'>
                                        <div>
                                            <div>Who</div>
                                            <input className='outline-none font-normal h-4 w-[90%] bg-transparent' placeholder='Add guests' type="text" />
                                        </div>
                                        <div className='p-5 bg-red-600 rounded-full'>
                                            <img src="images/navbar/search.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </nav>
                <NavDownBox />
            </header>
                {signShow ? (
            <div className="absolute h-[100%] w-[100%] top-0">
            <SignIn/>
            </div>)  : null}
            
        </>
    )
}

export default Navbar
