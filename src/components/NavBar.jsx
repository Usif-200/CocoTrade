import { Command, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // إغلاق القائمة عند النقر على رابط
    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            <header className={`fixed cursor-pointer top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
                isScrolled ? " h-14 bg-[#1b1b1b]/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-2xl": " h-14 bg-[#1b1b1b] w-[95%] max-w-3xl"
            } `}>
                <div className='mx-auto h-full px-6'>
                    <nav className='centered-row justify-between h-full'>
                        {/* logo */}
                        <div className="centered-row gap-2 hover:-translate-y-1 duration-200 transition-all ease-out">
                            <Command className='w-5 h-5 text-indigo-400' />
                            <span className='font-bold text-base clash-display '>
                                CocoTrade
                            </span>
                        </div>
                        
                        {/* desktop nav */}
                        <div className="hidden md:centered-row gap-6">
                            {["Features","Prices","Testmonials"].map((item, index) => (
                                <a key={index} href="#nav_link" className='text-sm text-zinc-300/90 hover:text-indigo-300 hover:translate-y-1 duration-300 transition-all ease-out'>
                                    {item}
                                </a>
                            ))}
                            {/* button */}
                            <button className="clash-display text-base bg-gradient-to-r from-indigo-400 to-indigo-600 px-4 py-2 rounded-full cursor-pointer hover:-translate-y-0.5 duration-200 transition-all ease-out hover:shadow-xl hover:shadow-indigo-900">
                                Start Trading
                            </button>
                        </div>

                        {/* mobile nav button */}
                        <div className="md:hidden glass p-1 rounded-md" onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <X className="w-8 h-8 text-white" />
                            ) : (
                                <img src="/menu.svg" alt="menu-icon" className="w-8" />
                            )}
                        </div>
                    </nav>
                </div>
            </header>

            {/* Mobile menu with animation */}
            <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {/* Overlay */}
                <div 
                    className={`absolute inset-0 bg-black transition-opacity duration-500 ${isMenuOpen ? 'opacity-70' : 'opacity-0'}`}
                    onClick={() => setIsMenuOpen(false)}
                ></div>
                
                {/* Menu content */}
                <div className={`absolute top-0 right-0 h-full w-3/4 max-w-sm bg-[#1b1b1b] backdrop-blur-xl border-l border-white/10 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col h-full pt-20 px-6">
                        <div className="flex flex-col space-y-8">
                            {["Features","Prices","Testmonials"].map((item, index) => (
                                <a 
                                    key={index} 
                                    href="#nav_link" 
                                    className='text-lg text-zinc-300/90 hover:text-indigo-300 transition-all duration-300 py-2 border-b border-white/10'
                                    onClick={handleLinkClick}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        
                        <button className="clash-display text-base bg-gradient-to-r from-indigo-400 to-indigo-600 px-6 py-3 rounded-full cursor-pointer mt-10 hover:shadow-xl hover:shadow-indigo-900 transition-all duration-300">
                            Start Trading
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar