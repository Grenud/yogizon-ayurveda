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
    UserIcon,
    SunIcon,
} from "@heroicons/react/24/solid";

const shopMenuItems = [
	{
		title: "Body Care",
		description: "Find the perfect solution for your needs.",
		icon: UserIcon,
		link: "/bodycare"
	},
    {
        title: "Soul Care",
        description: "Find the perfect solution for your needs.",
        icon: SunIcon,
        link: "/soulcare"
    },
];

function ShopNav() {
	const [isShopMenuOpen, setisShopMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const renderItems = shopMenuItems.map(
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
				open={isShopMenuOpen}
				handler={setisShopMenuOpen}
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
							selected={isShopMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							<Typography>Shop</Typography>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isShopMenuOpen ? "rotate-180" : ""
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

export default ShopNav