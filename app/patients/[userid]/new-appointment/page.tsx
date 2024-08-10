import AppointmentForm from '@/components/forms/AppointmentForm';
import { getPatient } from '@/lib/actions/patient.actions';
import Image from 'next/image';
import React from 'react';
import * as Sentry from '@sentry/nextjs';

const NewAppointment = async ({ params: { userid} }: SearchParamProps) => {
  const patient = await getPatient(userid);
  console.log('here', patient, userid);

  Sentry.metrics.set("user_view_new-appointment", patient.name);
  
  return (
    <div className='flex h-screen max-h-screen'>
       <section className='remove-scrollbar container my-auto'>
          <div className='sub-container max-w-[860px] flex-1 justify-between'>
           <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt='patient'
            className='mb-12 h-10 w-fit'
           />

           <AppointmentForm 
           type="create"
           userId={userid}
           patientId={patient?.$id}
           />

            <p className='copyright mt-10 py-12'>
              © 2024 CarePulse
            </p>
    
          </div>
       </section>
       <Image
       src="/assets/images/appointment-img.png"
       width={1000}
       height={1000}
       alt='appointment'
       className='side-img max-w-[30%] bg-bottom'

       />
    </div>
  );
};

export default NewAppointment;