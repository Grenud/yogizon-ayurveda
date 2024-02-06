import React from "react";
import { Link } from "react-router-dom";

import {
	Collapse,
	Typography,
	ListItem,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
} from "@material-tailwind/react";
import {
	ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
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

function AboutUsNav() {
	const [isAboutUsMenuOpen, setisAboutUsMenuOpen] = React.useState(false);
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
				open={isAboutUsMenuOpen}
				handler={setisAboutUsMenuOpen}
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
							selected={isAboutUsMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							<Typography>About Us</Typography>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isAboutUsMenuOpen ? "rotate-180" : ""
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

export default AboutUsNav;
