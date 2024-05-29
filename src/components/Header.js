'use client'
import { useState, useEffect, useRef } from 'react';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 left-0 w-full bg-darkGreen text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <a href='/' className="text-2xl font-bold">AL-EHED</a>
                {/* Hamburger menu icon for mobile */}
                <div className="block px-4 lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.5 3h21a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0 8h21a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0 8h21a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.5 5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0 6h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0 6h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                {/* Regular navigation links for larger screens */}
                <ul className="hidden lg:flex space-x-6">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/destination" className="hover:underline">Destinations</a></li>
                    <li><a href="/about" className="hover:underline">About</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div ref={menuRef} className="lg:hidden bg-darkGreen absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl">
                    <ul className="py-4 list-none flex justify-end items-start flex-1 flex-col">
                        <li><a href="/" className="block py-2 px-4 text-white hover:bg-gray-800">Home</a></li>
                        <li><a href="/destination" className="block py-2 px-4 text-white hover:bg-gray-800">Destinations</a></li>
                        <li><a href="/about" className="block py-2 px-4 text-white hover:bg-gray-800">About</a></li>
                        <li><a href="/contact" className="block py-2 px-4 text-white hover:bg-gray-800">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
