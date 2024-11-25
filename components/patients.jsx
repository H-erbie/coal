import React from 'react'
import { Search, Ellipsis } from 'lucide-react'
import Image from 'next/image'

const Patients = ({ patients }) => {
    return (
        <div className='w-full lg:w-[20%] lg:h-full bg-white  rounded-3xl'>
            <div className="flex lg:py-3 px-3 py-2 lg:px-5 items-center justify-between">
                <h2 className="font-bold text-2xl">Patients</h2>
                <Search />
            </div>
            <div className="flex gap-5 lg:h-[85%]  flex-row overflow-x-scroll scroll-none lg:flex-col scroll-thin overflow-y-scroll w-full lg:mt-4">
                {
                    patients.map(patient => (
                        <div className={`flex items-center relative h-max justify-between px-3 py-2 w-full ${patient.name === "Jessica Taylor" ? 'bg-[#D8FCF7]' : ""}`} key={patient.name}>
                            <div className="flex flex-col lg:flex-row gap-x-2">
                                <Image src={patient.profile_picture} alt={patient.name} width={50} height={30} />
                                <div className="flex flex-col">
                                    <p className="font-medium">{patient.name}</p>
                                    <p className="hidden lg:block text-gray-400">{patient.gender}, {patient.age}</p>
                                </div>

                            </div>
                            <Ellipsis className='absolute top-2 right-3 lg:relative'/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Patients