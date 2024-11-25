import PatientAnalytics from "@/components/patient-analytics";
import Patients from "@/components/patients";
import Image from "next/image"
export default async function  Home () {
  const encodedCredentials = Buffer.from('coalition:skills-test').toString('base64');
  const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
      headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
  });
  const data = await response.json();
  const patientData = data[3]
  return (
    <div className="flex lg:flex-row flex-col gap-y-3 h-[80vh] mt-1 lg:mt-5 w-[95%] mx-auto gap-x-3">
      <Patients patients={data}/> 
       <PatientAnalytics patientData={patientData}/> 
    </div>
  );
}
