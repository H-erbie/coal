'use client'
import React, { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler } from 'chart.js'
import Image from 'next/image'
import heart from '@/public/HeartBPM.svg'
import resp from '@/public/respiratory rate.svg'
import temp from '@/public/temperature.svg'
import {MdArrowDropDown, MdArrowDropUp} from 'react-icons/md'
ChartJS.register(
  LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler
)
const DiagnosisHistory = ({ history }) => {
  // console.log(history)
  // const truncatedHistory = history.splice(history.length - 6, history.length)
  // console.log(truncatedHistory)
  const data = {

    labels: history.map(data => `${data.month},${data.year}`),
    datasets: [{
      data: history.map(data => data.blood_pressure.systolic.value),
      borderColor: "#C26EB4",
      borderWidth: 3,
      pointBorderColor: "#E66FD2",
      pointBorderWidth: 3,
      tension: 0.5,
      label: "Systolic",
    },
    {
      data: history.map(data => data.blood_pressure.diastolic.value),
      borderColor: "#7E6CAB",
      borderWidth: 3,
      pointBorderColor: "#8C6FE6",
      pointBorderWidth: 3,
      tension: 0.5,
      label: "Diastolic",
    }
    ],

  }
  const options = {
    responsive: true,
    plugins: {
      legend: false
    },

    scales: {
      x: {
        grid: {
          display: false,
        }
      },


    }


  }

  return (
    <div className='p-5 w-full lg:w-[75%] bg-white rounded-3xl' >

      <h2 className="font-bold text-2xl mb-3">Diagnosis History</h2>

      <div className="bg-[#F4F0FE] flex flex-col-reverse md:flex-row w-full gap-x-3  p-4 rounded-3xl" >
        <div className="w-full md:w-[70%] h-[250px]" >
          <div className="flex justify-between w-full mb-3">
            <h2 className="font-semibold text-lg ">Blood Pressure</h2>

            <p className="flex gap-x-2 items-center text-sm font-normal">Last 6 months <ChevronDown /></p></div>
          <Line data={data} options={options} />
        </div>
        <div className="w-full md:w-[30%] justify-center flex flex-row md:flex-col gap-y-2">
          <div className="flex flex-col gap-y-3 border-r md:border-b border-gray-300  md:pb-3">
            <div className="flex items-center gap-x-2">
              <div className="h-2 w-2 rounded-[100%] bg-[#E66FD2]"></div>
              <p className="text-sm font-semibold">Systolic</p>
            </div>
            <p className="font-semibold text-xl">{history[5].blood_pressure.systolic.value}</p>
            <p className="flex text-sm font-normal  items-center gap-x-3"><MdArrowDropUp className='text-2xl'/>{history[history.length -1].blood_pressure.systolic.levels}</p>
          </div>


          <div className="flex pl-3 md:pl-0 flex-col gap-y-3">
            <div className="flex items-center gap-x-2">
              <div className="h-2 w-2 rounded-[100%] bg-[#7E6CAB]"></div>
              <p className="text-sm font-semibold">Diastolic</p>
            </div>
            <p className="font-semibold text-xl">{history[5].blood_pressure.diastolic.value}</p>
            <p className="flex text-sm font-normal items-center gap-x-3"><MdArrowDropDown className='text-2xl'/>{history[history.length - 1].blood_pressure.diastolic.levels}</p>
          </div></div>
      </div>
      <div className="sm:flex grid grid-cols-2 gap-3 mt-5 items-center">
        {[0, 1, 2].map((card) =>
          <div className={`${card === 0 ? "bg-[#E0F3FA]" : card === 1 ? "bg-[#FFE6E9]" : "bg-[#FFE6F1]"} w-full sm:w-[33.3%] p-3 rounded-3xl flex flex-col gap-y-3`} key={card}>
            <Image src={card === 0 ? resp : card === 1 ? temp : heart} alt='' width={80} height={80} />
            <p className="font-medium">{card === 0 ? 'Respiratory rate' : card === 1 ? 'Temperature ' : 'Heart rate'} </p>
            <p className="text-3xl font-bold">{card === 0 ? history[5].respiratory_rate.value + ' bpm' : card === 1 ? history[5].temperature.value + '°F' : history[5].heart_rate.value + ' bpm'}</p>
            <p className="flex gap-x-1 text-sm items-center">{card === 2 && <MdArrowDropDown className='text-2xl'/>}{card === 0 ? history[5].respiratory_rate.levels : card === 1 ? history[5].temperature.levels :  history[5].heart_rate.levels}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DiagnosisHistory