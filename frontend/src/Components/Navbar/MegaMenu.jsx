import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import textLogo from "../../assets/textLogo.svg";

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

const aboutUsMenuItems = [
	{
		title: "Our Philosophy",
		description: "Learn about our mission and values.",
		icon: SquaresPlusIcon,
		link: "/philosophy",
	},
	{
		title: "Gallery",
		description: "View our gallery of photos and videos.",
		icon: PhotoIcon,
		link: "/gallery",
	},
	{
		title: "Customer Feedback",
		description: "Read what our customers are saying about us.",
		icon: UserGroupIcon,
		link: "/feedback",
	},
	{
		title: "Research",
		description: "Explore our research and development initiatives.",
		icon: SunIcon,
		link: "/research",
	},
	{
		title: "Contact Us",
		description: "Find the perfect solution for your needs.",
		icon: PhoneIcon,
		link: "/contactus",
	},
];

const consultationMenuItems = [
	{
		title: "Choose Ved Ji",
		description: "Find the perfect solution for your needs.",
		icon: PhoneIcon,
		link: "/consultation"
	},
];

const shopMenuItems = [
	{
		title: "Body Care",
		description: "Find the perfect solution for your needs.",
		icon: PhoneIcon,
		link: "/bodycare"
	},
];

function AboutUs() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const renderItems = aboutUsMenuItems.map(
		({ icon, title, description, link }, key) => (
			<Link to={link} key={key}>
				<MenuItem className="flex items-center gap-3 rounded-lg">
					<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
						{" "}
						{React.createElement(icon, {
							strokeWidth: 2,
							className: "h-6 text-gray-900 w-6",
						})}
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="flex items-center text-sm font-bold"
						>
							{title}
						</Typography>
						<Typography
							variant="paragraph"
							className="text-xs !font-medium text-blue-gray-500"
						>
							{description}
						</Typography>
					</div>
				</MenuItem>
			</Link>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler>
					<Typography
						as="div"
						variant="small"
						className="font-medium"
					>
						<ListItem
							className="flex justify-center items-center gap-2 py-2 pr-4 font-medium text-gray-900"
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							<Typography>About Us</Typography>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavList() {
	return (
		<List className="items-center mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
			<AboutUs />
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
