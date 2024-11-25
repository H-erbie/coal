'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TestLogo from '@/public/TestLogo.svg'
import {Home, UsersRound, Calendar, MessageSquare, CreditCard, EllipsisVertical, Settings} from 'lucide-react'
import doctor from '@/public/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png'
const SiteHeader = () => {
    const navLinks = [
        {
            id:1,
            icon: <Home/>,
            name: 'Overview'
        },
        {
            id:2,
            icon: <UsersRound/>,
            name: 'Patients'
        },
        {
            id:3,
            icon: <Calendar/>,
            name: 'Schedule'
        },
        {
            id:4,
            icon: <MessageSquare/>,
            name: 'Message'
        },
        {
            id:5,
            icon: <CreditCard/>,
            name: 'Transactions'
        },
    ]
  return (
    <header className=" w-[95%] mx-auto justify-between items-center rounded-[3rem] px-5 p-3 mt-4 flex bg-white">
        <Link href='/'><Image src={TestLogo} alt='site logo' width={150} height={75} sizes='responsive' /></Link>
        <nav className="lg:flex item-center hidden  gap-x-[2%]">
            {navLinks.map(link => (
                <Link href='#' className={`${link.name === 'Patients' ? "bg-[#01F0D0]" : ""} px-3 py-2 font-medium rounded-2xl items-center gap-x-1 flex`} key={link.name}>{link.icon}{link.name}</Link>
            ))}
        </nav>
        <div className="flex items-center gap-x-3">
        <div className="flex items-center pr-2 gap-x-2 border-r border-gray-200">
            <Image src={doctor} alt='doctor profile' width={50} height={30} className='rounded-[100%]'/>
            <div className="sm:flex hidden flex-col gap-y-2">
                <p className="font-semibold">Dr. Jose Simmons</p>
                <p className="text-gray-400">General Practitioner</p>
            </div>
        </div>
        <div className="flex gap-x-2 items-center">
        <Settings/>
<EllipsisVertical/></div>
        </div>
    </header>
  )
}

export default SiteHeader