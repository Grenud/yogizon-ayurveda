import React from "react";
import Features from "./Features/Features";
import StickyNavbar from "../Navbar/Navbar";
import Hero from "./Hero/Hero";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <div>
        <StickyNavbar />
      </div>
      <div className="h-screen">
        <Hero />
      </div>
      <div className="h-screen">
        <Features />
      </div>
	  <div className="mt-[10rem]">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
