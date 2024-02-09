import React from "react";
import { useCountries } from "use-react-countries";
import {
	Input,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
	Typography,
} from "@material-tailwind/react";

function ContactInfo() {
	const { countries } = useCountries();
	const [country, setCountry] = React.useState(0);
	const { name, flags, countryCallingCode } = countries[country];

	return (
		<div className="flex flex-col justify-center items-center gap-7 w-full">
			<div className="flex flex-col justify-center items-center gap-3 w-full">
				<div className="flex gap-3">
					<Menu placement="bottom-start">
						<MenuHandler>
							<Button
								ripple={false}
								variant="text"
								color="blue-gray"
								className="flex h-10 items-center gap-2 border border-blue-gray-200 bg-blue-gray-500/10 pl-3"
							>
								<img
									src={flags.svg}
									alt={name}
									className="h-4 w-4 rounded-full object-cover"
								/>
								{countryCallingCode}
							</Button>
						</MenuHandler>
						<MenuList className="max-h-[20rem] max-w-[18rem]">
							{countries.map(
								(
									{ name, flags, countryCallingCode },
									index
								) => {
									return (
										<MenuItem
											key={name}
											value={name}
											className="flex items-center gap-2"
											onClick={() => setCountry(index)}
										>
											<img
												src={flags.svg}
												alt={name}
												className="h-5 w-5 rounded-full object-cover"
											/>
											{name}{" "}
											<span className="ml-auto">
												{countryCallingCode}
											</span>
										</MenuItem>
									);
								}
							)}
						</MenuList>
					</Menu>
					<div className="md:w-[44rem] flex items-center justify-center">
						<Input
							label="Mobile Number"
							type="tel"
							placeholder="Mobile Number"
						/>
					</div>
				</div>
				<div className="md:w-[50rem] w-[20rem]">
					<div className="my-4 md:text-left text-center">
						<Typography
							variant="h5"
							color="gray"
						>
							Address(Optional)
						</Typography>
					</div>
					<div className="flex flex-col justify-center items-center gap-5">
						<div className="flex flex-col gap-5">
							<div className="flex flex-col gap-5 md:w-[50rem] w-[20rem]">
								<Input type="text" label="Street Name" />
								<Input
									type="text"
									label="State/Province/Region"
								/>
							</div>
							<div className="flex md:flex-row flex-col gap-5 md:w-[50rem] w-[20rem]">
								<Input type="text" label="Postal Code" />
								<Input type="text" label="Country" />
							</div>
						</div>
						<div className="md:w-[50rem] w-[20rem]">
							<Input type="text" label="Additional Address Notes"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
