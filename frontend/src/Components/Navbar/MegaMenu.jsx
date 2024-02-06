import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import textLogo from "../../assets/textLogo.svg";

import AboutUsNav from "./AboutUsNav";

import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
	List,
	ListItem,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
} from "@material-tailwind/react";
import {
	ChevronDownIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import {
	Bars4Icon,
	PhoneIcon,
	SquaresPlusIcon,
	SunIcon,
	UserGroupIcon,
	PhotoIcon,
} from "@heroicons/react/24/solid";
import ConsultationNav from "./ConsultationNav";
import ShopNav from "./ShopNav";

function NavList() {
	return (
		<List className="items-center mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
			<AboutUsNav />
			<ConsultationNav />
			<ShopNav />
			<Link to="/register">
				<ListItem>
					<Typography variant="h6" color="">
						Sign Up
					</Typography>
				</ListItem>
			</Link>
			<Link to="/login">
				<ListItem className="bg-green-500 text-white hover:text-black">
					<Typography variant="h6" color="white">
						Login
					</Typography>
				</ListItem>
			</Link>
		</List>
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
				<a href="/">
					<div className="flex items-center justify-center gap-2">
						<img src={logo} alt="logo" className="h-16 w-16" />
						<img src={textLogo} alt="logo" className="h-22 w-20" />
					</div>
				</a>
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
