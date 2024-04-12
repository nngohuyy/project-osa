'use client'

import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <div className="px-10">
        <div className="home-top-card border-4 flex flex-col justify-center h-[608px] rounded-[36px]">
          <div className="max-w-screen-xl mx-auto px-10">
            <div className="flex flex-col gap-10 items-center">
              <p className="font-bold text-center text-7xl">We are<br/>OISP Student Ambassadors!</p>
              <p className="text-center text-xl">
                We are a group of enthusiastic students who are passionate about
                promoting the image of OISP students. We are here to support you in
                your journey at HCMUT.
              </p>
              <Button size="lg" color="primary">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}