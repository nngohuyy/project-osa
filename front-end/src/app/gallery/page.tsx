const imageList = [
  { key: "mem_19", value: "/images/bts/mem_19.jpg" },
  { key: "mem_18", value: "/images/bts/mem_18.jpg" },
  { key: "mem_17", value: "/images/bts/mem_17.jpg" },
  { key: "mem_16", value: "/images/bts/mem_16.jpg" },
  { key: "mem_01", value: "/images/bts/mem_01.jpg" },
  { key: "mem_02", value: "/images/bts/mem_02.jpg" },
  { key: "mem_03", value: "/images/bts/mem_03.jpg" },
  { key: "mem_04", value: "/images/bts/mem_04.jpg" },
  { key: "mem_05", value: "/images/bts/mem_05.jpg" },
  { key: "mem_06", value: "/images/bts/mem_06.jpg" },
  { key: "mem_07", value: "/images/bts/mem_07.jpg" },
  { key: "mem_08", value: "/images/bts/mem_08.jpg" },
  { key: "mem_09", value: "/images/bts/mem_09.jpg" },
  { key: "mem_10", value: "/images/bts/mem_10.jpg" },
  { key: "mem_11", value: "/images/bts/mem_11.jpg" },
  { key: "mem_12", value: "/images/bts/mem_12.jpg" },
  { key: "mem_13", value: "/images/bts/mem_13.jpg" },
  { key: "mem_14", value: "/images/bts/mem_14.jpg" },
  { key: "mem_15", value: "/images/bts/mem_15.jpg" },
];

export default function GalleryPage() {
  return (
    <main className={`translate-y-[-75px] relative flex flex-col`}>
      {
        imageList.map((image) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={image.key}
            alt={image.key}
            src={image.value}
            className="h-[30rem] md:h-full object-cover"
          />
        ))
      }
    </main>
  )
}