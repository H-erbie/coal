import React from 'react'
import DiagnosisHistory from './diagnosis-history'
import DiagnosticList from './diagnostic-list'
import PatientProfile from './patient-profile'
import LabResults from './lab-results'

const PatientAnalytics = ({patientData}) => {

  return (
    <div className='w-full lg:w-[80%] overflow-y-scroll scroll-thin flex-col h-full gap-x-5 flex '>
        <div className="flex flex-col-reverse lg:flex-row w-full gap-3">
        <DiagnosisHistory history={patientData.diagnosis_history.splice(0,6 ).slice().reverse()}/>
        <PatientProfile patientData={patientData}/>
       
        </div>
        <div className="w-full flex-col lg:flex-row flex gap-3 mt-5">
             <DiagnosticList patientData={patientData}/>
            <LabResults patientData={patientData}/>
        </div>
    </div>
  )
}

export default PatientAnalytics