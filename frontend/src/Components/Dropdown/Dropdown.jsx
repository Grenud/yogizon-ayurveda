import React from "react";
import {
	Input,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
	Typography,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";

function Dropdown() {
	const { countries } = useCountries();
	const [country, setCountry] = React.useState(0);
    const languageSetter = [
        {
            name: "United Kingdom",
            language: "English",
            src: "gb",
        },
        {
            name: "France",
            language: "French",
            src: "fr",
        },
        {
            name: "German",
            language: "German",
            src: "de",
        },
    ]
	return (
		<div>
			<Menu placement="bottom-start">
				<MenuHandler>
					<Button
						ripple={false}
						variant="text"
						color="blue-gray"
						className="flex h-10 items-center gap-2 border border-blue-gray-200 bg-blue-gray-500/10 pl-3"
					>
						<img
							src="https://flagcdn.com/gb.svg"
							alt="United Kingdom"
							className="h-4 w-4 rounded-full object-cover"
						/>
						English
					</Button>
				</MenuHandler>
				<MenuList className="max-h-[20rem] max-w-[18rem]">
                    {
                        languageSetter.map(
							(item, index) => (
								<MenuItem
									key={index}
									onClick={() => {
										setCountry(index);
									}}
								>
									<div className="flex items-center gap-2">
										<img
											src={`https://flagcdn.com/${item.src}.svg`}
											alt={item.name}
											className="h-4 w-4 rounded-full object-cover"
										/>
										<Typography color="blue-gray">
											{item.language}
										</Typography>
									</div>
								</MenuItem>
							)
                        )
                    }
				</MenuList>
			</Menu>
		</div>
	);
}

export default Dropdown;
