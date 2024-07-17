import Image from "next/image";

type MemberCardProps = {
  memberFirstName: string;
  memberLastName: string;
  memberPosition: string;
  memberImage: string;
}

function MemberCard({memberFirstName, memberLastName, memberPosition, memberImage}: MemberCardProps) {
  return (
    <main className="p-10 flex flex-col gap-6 border-3 border-black bg-white rounded-tl-3xl rounded-br-3xl">
      <Image
      className="rounded-3xl border-3 border-black"
        src={memberImage}
        alt="member"
        width={0} height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }} />
      <p className="font-extrabold text-5xl uppercase">{memberFirstName}<br />{memberLastName}</p>
      <p className="bg-black font-extrabold text-white text-2xl p-3">{memberPosition}</p>
    </main>
  );
}

export default MemberCard;