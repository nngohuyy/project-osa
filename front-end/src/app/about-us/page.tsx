import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main className="translate-y-[-75px] flex flex-col mt-40">
      <div className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 flex flex-col items-center">
        <h1>About us</h1>
        <div className="flex flex-col gap-10">
          <Image
            src="/osa_flag.jpg"
            alt="About us"
            width={1920}
            height={1080}
          />
          <div className="flex flex-col">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue orci dapibus condimentum lacinia. Donec viverra, augue quis lacinia semper, magna augue lobortis erat, ut placerat ex felis et enim. Quisque metus velit, ornare ut ultrices at, placerat et est. In varius laoreet commodo. Suspendisse at sollicitudin turpis, a pellentesque tortor. Sed cursus nisi vel porttitor porta. Pellentesque ultrices quis libero blandit placerat.
            </p>
            <p>
              Praesent consectetur convallis ante, a vestibulum ex finibus vel. Quisque elementum augue vitae interdum tempor. Curabitur pulvinar ex eu malesuada sodales. Quisque eu ex bibendum odio commodo condimentum. Nunc scelerisque consequat odio et elementum. Aliquam accumsan porta felis sit amet egestas. Nam tincidunt commodo neque sit amet laoreet. Curabitur vitae eleifend metus. Sed id dapibus diam.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}