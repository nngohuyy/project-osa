import Image from 'next/image';
import logo from "/public/osaX-vertical.svg";

export default function Footer () {
  return (
    <main>
      <div className="bg-neutral-100 mt-12">
        <div className="container px-10 py-20 max-w-screen-xl">
          <div>
            <div className="section-about">
              <p className="mr-20">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex saepe velit laborum pariatur, rem aperiam repellendus fuga culpa a modi ad omnis fugiat nihil. Magnam a eos ipsum minima iste.
              </p>
              <ul className="social-links">Social
                <li>
                  <a href="https://facebook.com">Facebook</a>
                </li>
                <li>
                  <a href="https://facebook.com">Facebook</a>
                </li>
                <li>
                  <a href="https://facebook.com">Facebook</a>
                </li>
                <li>
                  <a href="https://facebook.com">Facebook</a>
                </li>
              </ul>
              <div>
                <Image
                  src={logo}
                  alt="OSA Logo"
                />
              </div>
            </div>
            <div className="logo">

            </div>
          </div>
          <p className="mt-10">
            Copyright © 2024 OISP Student Ambassadors. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}