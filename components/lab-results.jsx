import React from 'react'
import {Download} from 'lucide-react'

const LabResults = ({patientData}) => {
  return (
    <div className='p-3 w-full lg:w-[25%] bg-white rounded-3xl'>
                      <h2 className="font-bold mb-4 text-2xl">Lab Results</h2>

      {
        patientData.lab_results.map(report => (
          <div className="flex w-full justify-between px-3 py-2" key={report}>
            {report} <Download/>
          </div>
        ))
      }
    </div>
  )
}

export default LabResults