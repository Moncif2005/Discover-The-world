import Image from "next/image";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import About from "./Components/About";
import Search from "./Components/Search";
import Contact from "./Components/Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Search/>
      <Contact/>
      <Footer/>
    </div>
  );
}
