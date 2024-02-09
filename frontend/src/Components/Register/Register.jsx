import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
	CogIcon,
	UserIcon,
	BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

import AccountInfo from "./AccountInfo";
import ContactInfo from "./ContactInfo";
import PersonalInfo from "./PersonalInfo";
import Footer from "../Footer/Footer";
import MegaMenuWithHover from "../Navbar/MegaMenu";

function Register() {
	const [activeStep, setActiveStep] = React.useState(0);
	const [isLastStep, setIsLastStep] = React.useState(false);
	const [isFirstStep, setIsFirstStep] = React.useState(false);

	const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
	const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

	return (
		<div>
			<MegaMenuWithHover />
			<div className="min-h-screen sm:px-[17rem] px-0 w-full my-[5rem] py-4 flex flex-col justify-center items-center gap-7">
				<div className="flex flex-col items-center justify-center gap-5 text-center ">
					<Typography variant="h3" color="green">
						Register
					</Typography>
					<Typography color="gray">
						Complete the form to create your account.
					</Typography>
				</div>

				<Stepper
					activeStep={activeStep}
					isLastStep={(value) => setIsLastStep(value)}
					isFirstStep={(value) => setIsFirstStep(value)}
					className="hidden md:flex"
				>
					<Step
						onClick={() => setActiveStep(0)}
						className="cursor-pointer"
					>
						1
						<div className="absolute -bottom-[4.5rem] w-max text-center">
							<Typography
								variant="h6"
								color={activeStep === 0 ? "blue-gray" : "gray"}
							>
								Account Information
							</Typography>
							<Typography
								color={activeStep === 0 ? "blue-gray" : "gray"}
								className="font-normal"
							>
								Enter your account details.
							</Typography>
						</div>
					</Step>
					<Step
						onClick={() => setActiveStep(1)}
						className="cursor-pointer"
					>
						2
						<div className="absolute -bottom-[4.5rem] w-max text-center">
							<Typography
								variant="h6"
								color={activeStep === 1 ? "blue-gray" : "gray"}
							>
								Contact Information
							</Typography>
							<Typography
								color={activeStep === 1 ? "blue-gray" : "gray"}
								className="font-normal"
							>
								Enter your contact details.
							</Typography>
						</div>
					</Step>
					<Step
						onClick={() => setActiveStep(2)}
						className="cursor-pointer"
					>
						3
						<div className="absolute -bottom-[4.5rem] w-max text-center">
							<Typography
								variant="h6"
								color={activeStep === 2 ? "blue-gray" : "gray"}
							>
								Personal Information
							</Typography>
							<Typography
								color={activeStep === 2 ? "blue-gray" : "gray"}
								className="font-normal"
							>
								Enter your personal details.
							</Typography>
						</div>
					</Step>
				</Stepper>
				<form className="mt-[7rem]">
					{activeStep === 0 && (
						<div>
							<AccountInfo />
						</div>
					)}
					{activeStep === 1 && (
						<div>
							<ContactInfo />
						</div>
					)}
					{activeStep === 2 && (
						<div>
							<PersonalInfo />
						</div>
					)}

					<div className="mt-5 flex justify-between md:w-full">
						<Button onClick={handlePrev} disabled={isFirstStep}>
							Prev
						</Button>
						{activeStep === 2 ? (
							<Button color="green" onClick={handleNext}>
								Finish
							</Button>
						) : (
							<Button color="green" onClick={handleNext}>
								Next
							</Button>
						)}
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}

export default Register;
