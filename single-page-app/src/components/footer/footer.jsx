import React from 'react';

function Footer() {
    return (
        <footer className="bg-white border-y border-gray-200">
            <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#home" className="flex items-center">
                            <span className="self-center text-2xl font-bold whitespace-nowrap text-orange-700">MySPA</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="#home" className="hover:underline">Home</a>
                                </li>
                                <li>
                                    <a href="#about" className="hover:underline">About</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © {new Date().getFullYear()} MySPA™. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
