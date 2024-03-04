import Image from "next/image";
import { Manrope } from "next/font/google";
import HomePage from "./HomePage";
import NavBar from "./navbar";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={manrope.className}>
      <NavBar />
      <HomePage />
    </div>
  );
}
