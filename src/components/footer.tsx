'use client'

import Image from 'next/image';
import logo from "/public/osaX-vertical.svg";

export default function Footer() {
  return (
    <main>
      <div className="bg-neutral-100 mt-12">
        <div className="container px-5 py-4 xl:py-10 max-w-screen-xl">
          <div className="section-about">
            <div>
              <h3 className="xl:mr-60 font-normal">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex saepe velit laborum pariatur, rem aperiam repellendus fuga culpa a modi ad omnis fugiat nihil. Magnam a eos ipsum minima iste.
              </h3>
              <div className='section-social mt-10'>
                <h3>Follow us on social media</h3>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-2xl">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#" className="text-2xl">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                  <a href="#" className="text-2xl">
                    <i className="fab fa-instagram-square"></i>
                  </a>
                  <a href="#" className="text-2xl">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={logo}
                alt="OSA Logo"
              />
            </div>
          </div>
          <div className="line mt-6">
          </div>
          <h3 className="mt-1 font-normal">
            Copyright © 2024 OISP Student Ambassadors. All rights reserved.
          </h3>
        </div>
      </div>
    </main>
  );
}