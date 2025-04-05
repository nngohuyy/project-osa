import Image from "next/image";

type MemberCardProps = {
  memberFirstName: string;
  memberLastName: string;
  memberPosition: string;
  memberImage: string;
  marginTop?: string;
}

export const MemberCard = ({ memberFirstName, memberLastName, memberPosition, memberImage, marginTop }: MemberCardProps) => {
  return (
    <main
      className={`group p-10 h-fit flex flex-col gap-6 border-3 border-black bg-white
                  rounded-tl-3xl rounded-br-3xl hover:bg-black hover:text-white overflow-hidden
                  ${marginTop ? marginTop : 'mt-0'}
                `}
    >
      <Image
        className="rounded-3xl border-3 border-black"
        src={memberImage}
        alt="member"
        width={0} height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <p className="font-extrabold leading-none text-5xl uppercase">{memberFirstName}<br />{memberLastName}</p>
      <p className="bg-black group-hover:bg-white group-hover:text-black font-extrabold text-white text-2xl p-3 transition duration-500 ease-in-out">{memberPosition}</p>
    </main>
  );
}
