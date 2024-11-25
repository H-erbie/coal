import React from 'react'

const DiagnosticList = ({patientData}) => {
  return (
    <div className='p-3 w-full lg:w-[75%] bg-white rounded-3xl'>
                <h2 className="font-bold mb-4 text-2xl">Diagnosis List</h2>
<table className="w-full h-[25vh] scroll-thin overflow-scroll">
  <thead className='w-full rounded-3xl p-2 bg-[#F6F7F8]'>
    <tr className='font-medium w-full '>
      
      <th className=''>Problems/Diagnosis</th>
      <th className=''>Description</th>
      <th className=''>Status</th>
    </tr>
  </thead>
  <tbody className=''>
    {patientData.diagnostic_list.map( (diagnosis,index) => (
      <tr className={`${index === patientData.diagnostic_list.length - 1 ? "" : "border-b border-gray-300" } text-sm p-5`} key={diagnosis.name}>
      <td className='p-2'>{diagnosis.name}</td>
      <td className='p-2'>{diagnosis.description}</td>
      <td className='p-2'>{diagnosis.status}</td>
    </tr>))}
  </tbody>
</table>
    </div>
  )
}

export default DiagnosticList