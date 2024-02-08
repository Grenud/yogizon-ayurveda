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
} from "@material-tailwind/react";
import {
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";

import ConsultationNav from "./ConsultationNav";
import ShopNav from "./ShopNav";

function NavList() {
	const [loginOpen, setLoginOpen] = React.useState(false);
	const handleLoginOpen = () => setLoginOpen((cur) => !cur);

	return (
		<>
			<List className="items-center mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
				<AboutUsNav />
				<ConsultationNav />
				<ShopNav />
				<ListItem
					className="flex items-center justify-center bg-black hover:bg-white text-white hover:text-black"
					onClick={handleLoginOpen}
				>
					<Typography variant="h6" color="">
						Login
					</Typography>
				</ListItem>

				<ListItem
					className="bg-green-500 text-white hover:text-black"
				>
					<Link to="/register">
						<Typography variant="h6" color="white">
								Sign Up
						</Typography>
					</Link>
				</ListItem>
			</List>

			<Login loginOpen={loginOpen} handleLoginOpen={handleLoginOpen} />
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

	return (
		<Navbar className="mx-auto max-w-screen-xl px-4 py-2 fixed top-0 left-0 right-0 z-[100]">
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
				<IconButton
					variant="text"
					color="blue-gray"
					className="lg:hidden"
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
			</Collapse>
		</Navbar>
	);
}
