import React from 'react'
import Image from 'next/image'
import { Calendar, Phone, ShieldCheck } from 'lucide-react'
import { BsGenderFemale } from 'react-icons/bs'
const PatientProfile = ({ patientData }) => {

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const patientDOB = patientData.date_of_birth.split('/')
  const patientInfo = [
    {
      id: 1,
      icon: <Calendar />,
      title: 'Date of birth',
      value: `${months[Number(patientDOB[0]) - 1]}, ${patientDOB[1]} ${patientDOB[2]}`
    },
    {
      id: 2,
      icon: <BsGenderFemale className='text-3xl'/>,
      title: 'Gender',
      value: patientData.gender
    },
    {
      id: 3,
      icon: <Phone />,
      title: 'Contact Info.',
      value: patientData.phone_number
    },
    {
      id: 4,
      icon: <Phone />,
      title: 'Emergency Contacts',
      value: patientData.emergency_contact
    },

    {
      id: 5,
      icon: <ShieldCheck />,
      title: 'Insurance Provider',
      value: patientData.insurance_type
    },
  ]
  return (
    <div className='p-3 bg-white rounded-3xl w-full lg:w-[25%]'>
      <Image src={patientData.profile_picture} alt={patientData.name}  width={150} height={100} className='mx-auto' sizes='responsive'/>
      <p className="my-3 font-bold text-2xl text-center">{patientData.name}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex flex-col gap-y-5 ml-3">
        {
          patientInfo.map(info => (
            <div className="flex gap-x-3 items-center" key={info.id}>
              {info.icon}
              <div className="flex flex-col gap-y-1">
                <p className="text-sm">{info.title}</p>
                <p className="text-sm font-semibold">{info.value}</p>

              </div>
            </div>
          ))
        }</div>
        <div className="w-full flex justify-center items-center">
      <button className="bg-[#01F0D0] w-max px-3 py-2 mx-auto mt-5 rounded-3xl">Show All Information</button>
    </div></div>
  )
}

export default PatientProfile