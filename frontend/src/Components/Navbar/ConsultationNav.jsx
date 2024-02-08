import React from 'react'
import { Link } from "react-router-dom";

import {
	Collapse,
	Typography,
	ListItem,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";
import {
	ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
	PhoneIcon,
} from "@heroicons/react/24/solid";

import Consultation from '../Consultation/Consultation'

const consultationMenuItems = [
	{
		title: "Choose Ved Ji",
		description: "Find the perfect solution for your needs.",
		icon: PhoneIcon,
		link: "/consultation"
	},
];



function ConsultationNav() {
	const [isConsultationMenuOpen, setisConsultationMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const [isConsultOpen, setIsConsultOpen] = React.useState(false);
	const handleConsultOpen = () => setIsConsultOpen((cur) => !cur);

	const renderItems = consultationMenuItems.map(
		({ icon, title, description, link }, key) => (
			<>
			<Link onClick={handleConsultOpen} key={key}>
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
			<Consultation open={isConsultOpen} handler={handleConsultOpen} />
			</>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isConsultationMenuOpen}
				handler={setisConsultationMenuOpen}
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
							selected={isConsultationMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							<Typography>Consultation</Typography>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isConsultationMenuOpen ? "rotate-180" : ""
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

export default ConsultationNav