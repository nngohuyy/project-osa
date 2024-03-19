import { Manrope } from "next/font/google";
import HomePage from "./HomePage";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

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
