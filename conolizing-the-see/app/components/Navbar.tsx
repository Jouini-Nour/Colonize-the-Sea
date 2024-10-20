import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-[#fef9d9] opacity-70 hover:opacity-100  m-3 p-6 rounded-lg flex justify-between h-20 items-center ">
            <Link href={'/'} className="text-[#6B7280] text-3xl text-xl font-newsreader">Colonize The SEA</Link>
            <div className="flex gap-2">
                <Link href="/signin" className="text-[#6B7280] hover:text-gray-800 px-3 py-1">Log In</Link>
                <Link href="/signup" className="bg-[#ADBAB1] text-[#374151] hover:bg-gray-300 px-3 py-1 rounded">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
