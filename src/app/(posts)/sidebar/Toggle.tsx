'use client'
import React, { useState } from 'react'
import SideBar from '@/app/(posts)/sidebar/SideBar'

export default function Toggle() {
const [isOpen, setIsOpen] = useState(false);

const getLocalDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    return `${year}-${month}-${day} ${hour}:${minute}:${minute}`;
}

    return (
        <>
            <header className="sticky top-0 lfet-0 flex w-full md:hidden p-2 bg-white justify-between">
                <button className='flex-none ml-2 hover:bg-stone-200 rounded-sm' onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor'
                         viewBox='0 0 32 32'>
                        <path
                            d='M26 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h20a1 1 0 0 1 1 1ZM5 9h18a1 1 0 1 0 0-2H5a1 1 0 0 0 0 2Zm16 14H5a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z'></path>
                    </svg>
                </button>
                <span className=" self-center mr-5">{getLocalDate()}</span>
            </header>

            <aside className={`w-[260px] h-svh absolute transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
                <SideBar />
                <button className="absolute top-3 right-3 p-2 md:hidden" onClick={() => setIsOpen(false)}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'
                         viewBox='0 0 256 256'>
                        <path
                            d='M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z'></path>
                    </svg>
                </button>
            </aside>
        </>

    )
}


