import React from "react";
import Features from "./Features/Features";

import StickyNavbar from "../Navbar/Navbar";
import MegaMenu from "../MegaMenu/MegaMenu";

import Hero from "./Hero/Hero";
import Footer from "../Footer/Footer";
import FAQs from "./FAQs";

function Home() {
	return (
		<div>
			<div>
				{/* <StickyNavbar /> */}
				<MegaMenu />
			</div>
			<div className="">
				<Hero />
			</div>
			<div className="">
				<Features />
			</div>
			<div>
				<FAQs />
			</div>
			<div className="mt-[10rem]">
				<Footer />
			</div>
		</div>
	);
}

export default Home;
