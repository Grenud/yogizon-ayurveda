import React from "react";
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	IconButton,
	ButtonGroup,
} from "@material-tailwind/react";

function StickyNavbar() {
	const [openNav, setOpenNav] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="black"
				className="p-1 font-normal"
			>
				<a href="#" className="flex items-center">
					Our Programs
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="black"
				className="p-1 font-normal"
			>
				<a href="#" className="flex items-center">
					Book an Appointment
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="black"
				className="p-1 font-normal"
			>
				<a href="#" className="flex items-center">
					Shop
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="black"
				className="p-1 font-normal"
			>
				<a href="#" className="flex items-center">
					About Us
				</a>
			</Typography>
		</ul>
	);
	return (
		<div className="">
			<Navbar className="fixed top-0 left-0 z-[100] h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
				<div className="flex items-center justify-between text-green-900">
					<div className="flex items-center justify-center">
						<Button variant="text">
							<div className="flex gap-2 justify-center items-center">
								<Typography
									variant="h5"
									color="green"
									textGradient
									as="a"
									href="/"
									className="cursor-pointer font-bold lowercase"
								>
									Ayurveda
								</Typography>
							</div>
						</Button>
					</div>

					<div className="flex items-center gap-4">
						<div className="mr-4 hidden lg:block">{navList}</div>
						<div className="flex items-center gap-x-1">
							{/* <ButtonGroup variant="text"> */}
							<Button
								variant="text"
								size="sm"
								color="green"
								className="hidden lg:inline-block"
							>
								<span>Log In</span>
							</Button>
							<Button
								variant="gradient"
								size="sm"
								color="green"
								className="hidden lg:inline-block"
							>
								<span>Sign Up</span>
							</Button>
							{/* </ButtonGroup> */}
						</div>
						<IconButton
							variant="text"
							className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									className="h-6 w-6"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</IconButton>
					</div>
				</div>
				<MobileNav open={openNav}>
					{navList}
					<div className="flex items-center gap-x-1">
						<Button fullWidth variant="text" size="sm" className="">
							<span>Log In</span>
						</Button>
						<Button color="green" fullWidth size="sm" className="">
							<span>Sign in</span>
						</Button>
					</div>
				</MobileNav>
			</Navbar>
		</div>
	);
}

export default StickyNavbar;
