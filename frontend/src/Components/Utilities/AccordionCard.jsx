import React from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
	Typography,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
	mount: { scale: 1 },
	unmount: { scale: 0.9 },
};

function AccordionCard(props) {
	const [open, setOpen] = React.useState(0);
	const { title, description, id } = props;

	const handleOpen = (value) => setOpen(open === value ? 0 : value);

	return (
		<div>
			<Accordion open={open === id} animate={CUSTOM_ANIMATION}>
				<AccordionHeader onClick={() => handleOpen(id)}>
					{title}
				</AccordionHeader>
				<AccordionBody>{description}</AccordionBody>
			</Accordion>
		</div>
	);
}

export default AccordionCard;
