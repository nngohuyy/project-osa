'use client'

import Image from 'next/image';
import osa_gen10th_brush from "@/public/osa_gen10th_brush.svg";

export default function ContactPage() {
  return (
    <main className='max-w-screen-xl mx-auto my-10 lg:my-0'>
      <div className='flex justify-center px-5 items-center lg:h-[calc(100vh-64px)]'>
        <div className='grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20 xl:gap-40'>
          <div className='flex justify-center'>
            <div className='flex flex-col justify-center w-1/2 lg:w-full'>
              <Image
                src={osa_gen10th_brush}
                alt="OSA Logo"
              />
            </div>
          </div>
          <div className='w-full flex flex-col justify-center gap-12'>
            <div>
              <p className='text-4xl text-center font-bold'>Leave your message</p>
              <p className='text-center mt-6'>
                If you have any question, feel free to contact us via our fanpage or via our email.<br/> We will try to support your situation as soon as possible.
              </p>
            </div>
            <div>
              <p className='text-4xl text-center font-bold'>Stay connected!</p>
              <div className='flex flex-col sm:grid grid-cols-2 md:flex md:flex-row gap-6 justify-between mt-6 mx-12'>
                <a href="https://www.facebook.com/oisp.student.ambassadors" className='flex flex-col items-center gap-3 hover:text-slate-600 rounded-xl transition-[0.1s]'>
                  <i className="pi pi-facebook" style={{ fontSize: '3rem' }}></i>
                  <p className='text-center'>OISP Student<br/>Ambassadors</p>
                </a>
                <a href="https://www.instagram.com/osaxoi/" className='flex flex-col items-center gap-3 hover:text-slate-600 rounded-xl transition-[0.1s]'>
                  <i className="pi pi-instagram" style={{ fontSize: '3rem' }}></i>
                  <p>@osaxoi</p>
                </a>
                <a href="https://www.youtube.com/@oispstudentambassadors2015" className='flex flex-col items-center gap-3 hover:text-slate-600 rounded-xl transition-[0.1s]'>
                  <i className="pi pi-youtube" style={{ fontSize: '3rem' }}></i>
                  <p className='text-center'>OISP Student<br/>Ambassadors</p>
                </a>
                <a href="mailto:osa.hcmut@gmail.com" className='flex flex-col items-center gap-3 hover:text-slate-600 rounded-xl transition-[0.1s]'>
                  <i className="pi pi-inbox" style={{ fontSize: '3rem' }}></i>
                  <p>osa.hcmut@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}