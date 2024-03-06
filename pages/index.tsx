import { Manrope } from "next/font/google";
import HomePage from "./HomePage";
import NavBar from "./navbar";
import Footer from "./footer";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={manrope.className}>
      <NavBar />  
      <HomePage />
      <Footer />
    </div>
  );
}
