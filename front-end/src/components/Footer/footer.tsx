'use client'

import Image from 'next/image';
import logo from "/public/osa_vertical_black.svg";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <main className='bg-white'>
      <div className='max-w-screen-xl mx-auto px-14 py-20'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-row justify-between gap-[240px]'>
            <div className='flex flex-col gap-10'>
              <p>
                Established in 2015, the OISP Student Ambassadors Club actively promotes the positive image of OISP students. The club acts as a bridge between OISP and the student body, fostering connections between Vietnamese and international students, and facilitating engagement between students and potential employers.
              </p>
              <div>
                <p className='font-bold'>Follow us on social media!</p>
                <div className="flex gap-4 mt-2">
                  <a href="https://www.facebook.com/oisp.student.ambassadors" className="text-2xl">
                    <i className="pi pi-facebook text-[2rem] hover:text-[#1877F2]"></i>
                  </a>
                  <a href="https://www.instagram.com/osaxoi/" className="text-2xl">
                    <i className="pi pi-instagram text-[2rem] hover:text-[#E1306C]"></i>
                  </a>
                  <a href="https://www.youtube.com/@oispstudentambassadors2015" className="text-2xl">
                    <i className="pi pi-youtube text-[2rem] hover:text-[#FF0000]"></i>
                  </a>
                  <a href="https://www.youtube.com/@oispstudentambassadors2015" className="text-2xl">
                    <i className="pi pi-tiktok text-[2rem] hover:text-[#2AF0EA]"></i>
                  </a>
                </div>
              </div>
            </div>
            <Image
              src={logo}
              alt="OSA Logo"
              className='h-[100px]'
            />
          </div>
          <div>
            <div className='h-1 bg-[#E4E4E7]'></div>
            <p className="mt-1 font-normal">
              Copyright © {currentYear} OISP Student Ambassadors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}