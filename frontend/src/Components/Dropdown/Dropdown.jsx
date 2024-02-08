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
	const [language, setLanguage] = React.useState(0);
	const { name, flags } = countries[language];
	const languageSetter = [
		{
			id: 0,
			name: "United Kingdom",
			language: "English",
			src: "gb",
		},
		{
			id: 1,
			name: "France",
			language: "French",
			src: "fr",
		},
		{
			id: 2,
			name: "German",
			language: "German",
			src: "de",
		},
		{
			id: 3,
			name: "Spain",
			language: "Spanish",
			src: "es",
		},
		{
			id: 4,
			name: "Italy",
			language: "Italian",
			src: "it",
		},
		{
			id: 5,
			name: "Netherlands",
			language: "Dutch",
			src: "nl",
		},
		{
			id: 6,
			name: "Portugal",
			language: "Portuguese",
			src: "pt",
		},
		{
			id: 7,
			name: "Russia",
			language: "Russian",
			src: "ru",
		},
		{
			id: 8,
			name: "China",
			language: "Chinese",
			src: "cn",
		},
		{
			id: 9,
			name: "Japan",
			language: "Japanese",
			src: "jp",
		},
		{
			id: 10,
			name: "Korea",
			language: "Korean",
			src: "kr",
		},
		{
			id: 11,
			name: "India",
			language: "Hindi",
			src: "in",
		},
		{
			id: 12,
			name: "Singapore",
			language: "Malay",
			src: "sg",
		},
		{
			id: 13,
			name: "Thailand",
			language: "Thai",
			src: "th",
		},
		{
			id: 14,
			name: "Vietnam",
			language: "Vietnamese",
			src: "vn",
		},
		{
			id: 15,
			name: "Indonesia",
			language: "Indonesian",
			src: "id",
		},
		{
			id: 16,
			name: "Philippines",
			language: "Filipino",
			src: "ph",
		},
		{
			id: 17,
			name: "Malaysia",
			language: "Malay",
			src: "my",
		},
		{
			id: 18,
			name: "United States",
			language: "English",
			src: "us",
		},
	];
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
							src="https://flagcdn.com/us.svg"
							alt="United States"
							className="h-4 w-4 rounded-full object-cover"
						/>
						English
					</Button>
				</MenuHandler>
				<MenuList className="max-h-[20rem] max-w-[18rem]">
					{languageSetter.map((item) => (
						<MenuItem
							key={item.id}
							onClick={() => {
								setLanguage(item.id);
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
					))}
				</MenuList>
			</Menu>
		</div>
	);
}

export default Dropdown;
