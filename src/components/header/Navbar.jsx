import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavDownBox from './NavDownBox'

const Navbar = () => {
    const [navcon, setNavcon] = useState(false)

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
            <header>
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
                            (<div className='flex gap-4 h-full relative ml-48 pt-2'>
                                <div className='flex gap-3 text-lg'>
                                    <div>
                                        <button className='w-16 py-1'>Stays</button>
                                    </div>
                                    <div>
                                        <button className='hover:bg-slate-100 px-5 py-1 rounded-3xl'>Experiences</button>
                                    </div>
                                </div>

                                {/* second Down */}
                                <div className="absolute top-20 -left-[25vw] outline outline-1 outline-slate-200 rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-medium p-0">
                                    <div className='  w-[66vw] flex items-center h-20'>
                                        <div onMouseEnter={() => setFirst(true)} onMouseLeave={() => setFirst(false)} className='flex  h-full w-fit hover:bg-slate-300 rounded-full pl-10 py-3'>
                                            <div className="">
                                                <div>Where</div>
                                                <input className='h-4 w-52 outline-none font-normal bg-transparent' type="text" placeholder='Search destinatios' />
                                            </div>
                                            <div style={hoverEffect} className="border-r-2 h-[80%] w-1  ml-28 my-auto"></div>
                                        </div>

                                        <div onMouseEnter={() => { setFirst(true); setSecond(true) }} onMouseLeave={() => { setFirst(false); setSecond(false) }} className='mr-3 flex pl-10 py-3 hover:bg-slate-300 rounded-full h-full'>
                                            <div>
                                                <div>Chech in</div>
                                                <input className='outline-none font-normal h-4 w-28 bg-transparent' placeholder='Add dates' type="text" />
                                            </div>
                                            <div style={hoverSecond} className="border-r-2 h-[80%] w-1 my-auto"></div>
                                        </div>

                                        <div onMouseEnter={() => { setThrid(true); setSecond(true) }} onMouseLeave={() => { setThrid(false); setSecond(false) }} className='flex rounded-full pl-10 py-3 h-full hover:bg-slate-300'>
                                            <div className="">
                                                <div>Chech out</div>
                                                <input className='outline-none font-normal h-4 w-20 bg-transparent' placeholder='Add dates' type="text" />
                                            </div>
                                            <div style={hoverThrid} className="border-r-2 h-[80%] w-1 my-auto"></div>
                                        </div>

                                        <div onMouseEnter={() => setThrid(true)} onMouseLeave={() => setThrid(false)} className='flex gap-4 pl-10 py-3 h-full hover:bg-slate-300 rounded-full w-full'>
                                            <div>
                                                <div>Who</div>
                                                <input className='outline-none font-normal h-4 w-32 bg-transparent' placeholder='Add guests' type="text" />
                                            </div>
                                            <div className=''>
                                                <img className='p-4 bg-red-600 rounded-full' src="images/navbar/search.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                            : (
                                <div className="outline outline-2 outline-slate-200  rounded-full ml-32">
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
                            <div className='flex gap-3 justify-center '>
                                <h3 className='m-auto hover:bg-slate-100 rounded-3xl px-3 py-2'>Airbnb your home </h3>
                                <button className='hover:bg-slate-100 rounded-full px-4 '><img className='h-4 m-auto' src="images/navbar/earth.svg" alt="" /></button>
                            </div>
                            <button className=' flex gap-2 rounded-full px-4 py-2 h-12 outline outline-slate-300 outline-1 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                <img className='h-4 m-auto' src="images/navbar/threelines.svg" alt="" />
                                <img className='h-8 rounded-full bg-slate-400 p-1' src="images/navbar/profile.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </nav>
                <NavDownBox/>
            </header>
        </>
    )
}

export default Navbar
