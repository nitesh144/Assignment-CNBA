import React from 'react';

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 z-50 w-full'>
            <nav className="bg-gray-800 text-white p-6 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold">Logo</div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex space-x-6 gap-7">
                        <li className="hover:text-gray-400 cursor-pointer">Home</li>
                        <li className="hover:text-gray-400 cursor-pointer">Vision</li>
                        <li className="hover:text-gray-400 cursor-pointer">About Us</li>
                        <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
                        <li className="hover:text-gray-400 cursor-pointer">Services</li>
                    </ul>

                    {/* Membership Button */}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md">Membership</button>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="text-gray-400 hover:text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
