import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import textLogo from "../../assets/textLogo.svg";
import Login from "../Login/Login";

import AboutUsNav from "./AboutUsNav";

import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
	List,
	ListItem,
	Button
} from "@material-tailwind/react";
import {
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";

import ConsultationNav from "./ConsultationNav";
import ShopNav from "./ShopNav";
import Dropdown from "../Dropdown/Dropdown";

function NavList() {
	

	return (
		<>
			<List className="items-center mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
				<AboutUsNav />
				<ConsultationNav />
				<ShopNav />

				<Link to="/seminar" className=" gap-2 py-2 px-2 font-light text-gray-900 hover:bg-[#f0f0f0] rounded-md ">Seminar</Link>
				<Link to="/partnership" className=" gap-2 py-2 px-2 font-light text-gray-900 hover:bg-[#f0f0f0] rounded-md ">Partnership Programme</Link>

				
			</List>

			
		</>
	);
}

export default function MegaMenuWithHover() {
	const [openNav, setOpenNav] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const [loginOpen, setLoginOpen] = React.useState(false);
	const handleLoginOpen = () => setLoginOpen((cur) => !cur);

	return (
		<>
		<nav className="bg-[white] mx-auto w-screen px-4 py-2 fixed top-0 left-0 right-0 z-[100]">
			<div className="flex items-center justify-between text-blue-gray-900">
				<Link to="/">
					<div className="flex items-center justify-center gap-2">
						<img src={logo} alt="logo" className="h-16 w-16" />
						<img src={textLogo} alt="logo" className="h-22 w-20" />
					</div>
				</Link>
				<div className="hidden lg:block">
					<NavList />
				</div>
				<div className="hidden gap-2 lg:flex items-center ">
					<Button onClick={handleLoginOpen} variant="text" size="sm" color="blue-gray">
						Log In
					</Button>
					<Link to="/register">
					<Button color="green"  variant="gradient" size="sm">
						Sign In
					</Button>
					</Link>
					<Dropdown />
				</div>
				<IconButton
					variant="text"
					color="blue-gray"
					max-		className="lg:hidden"
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<XMarkIcon className="h-6 w-6" strokeWidth={2} />
					) : (
						<Bars3Icon className="h-6 w-6" strokeWidth={2} />
					)}
				</IconButton>
				
			</div>
			<Collapse open={openNav}>
				<NavList />
				<div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
					<Button onClick={handleLoginOpen} variant="outlined" size="sm" color="blue-gray" fullWidth>
						Log In
					</Button>
					<Link to="/register">
						<Button color="green" variant="gradient" size="sm" fullWidth>
							Sign In
						</Button>
					</Link>
				</div>
			</Collapse>
		</nav>

		<Login loginOpen={loginOpen} handleLoginOpen={handleLoginOpen} />
		</>
	);
}
