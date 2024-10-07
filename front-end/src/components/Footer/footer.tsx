'use client'

import Image from 'next/image';
import logo from "/public/osaX-vertical.svg";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <main className='bg-white'>
      <div className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 py-4 xl:py-10">
        <div className="section-about">
          <div>
            <h3 className="xl:mr-60 font-normal">
              OISP Student Ambassadors, established in 2015, aims at promoting the image of OISP students and being a bridge between OISP and students, between Vietnamese students and international student, and between students and employers.
            </h3>
            <div className='section-social mt-10'>
              <h3 className='font-bold'>Follow us on social media!</h3>
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
              </div>
            </div>
          </div>
          <div className='osa-logo'>
            <Image
              src={logo}
              alt="OSA Logo"
            />
          </div>
        </div>
        <div className="line mt-6">
        </div>
        <h3 className="mt-1 font-normal">
          Copyright © {currentYear} OISP Student Ambassadors. All rights reserved.
        </h3>
      </div>
    </main>
  );
}