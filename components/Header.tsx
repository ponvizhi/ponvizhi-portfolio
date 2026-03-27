"use client";

import { useState } from "react";
import Link from "next/link";
import RippleButton from "@/components/RippleButton";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="header">
            <div className="navbar_component">
                <div className="navbar_container">
                    {/* { LOGO } */}
                    <Link href="/" className="text-lg font-medium">
                        ponvizhi.dev
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-sm">
                        <Link href="/" className="text-gray-500 transition">
                            Home
                        </Link>
                        <Link href="#service"  className="text-gray-500 transition">Services</Link>
                        <Link href="#work" className="text-gray-500 transition">
                            Work
                        </Link>
                        <Link href="#contact" className="">
                            <RippleButton title="Book a Free Call" variant="solid" to="#contact" />
                        </Link>
                    </nav>
                    <svg onClick={() => setIsOpen(true)} xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="navbar_open-button"><path d="M5.33325 6.66667H26.6666M5.33325 16H26.6666M5.33325 25.3333H26.6666" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
            </div>
            <div className="navbar_menu" style={{
                    transform: isOpen
                        ? "translate3d(0px, 0%, 0px)"
                        : "translate3d(0px, -102%, 0px)"
                }}>
                <svg onClick={()=> setIsOpen(false)} xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" data-navbar="close" className="navbar_close-icon"><path d="M28 4L4 28M28 28L4 4" stroke="#151410" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <nav className="mobile" >
                    <Link href="/" className="navbar_link-text" onClick={()=> setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="#service" className="navbar_link-text" onClick={()=> setIsOpen(false)}>Services</Link>
                        <Link href="#work" className="navbar_link-text" onClick={()=> setIsOpen(false)}>
                            Work
                        </Link>
                        <Link href="#contact" className="customBtn"onClick={()=> setIsOpen(false)}>
                            <RippleButton title="Book a Free Call" variant="solid" to="#contact" />
                        </Link>
                </nav>
            </div>
        </header>
    );
}