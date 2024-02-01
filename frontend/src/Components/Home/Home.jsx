import React from "react";
import Features from "./Features/Features";
import StickyNavbar from "../Navbar/Navbar";
import Hero from "./Hero/Hero";

function Home() {
  return (
    <div>
      <div>
        <StickyNavbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Features />
      </div>
    </div>
  );
}

export default Home;
