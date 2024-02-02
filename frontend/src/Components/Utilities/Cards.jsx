import React from 'react'

import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function Cards(props) {

	const { title, description, image, buttonLink, buttonText } = props

	return (
		<div className='sm:m-0 m-4'>
			<Card className="max-w-[24rem] overflow-hidden">
				<CardHeader
					floated={false}
					shadow={false}
					color="transparent"
					className="m-0 rounded-none"
				>
					<img
						src={image}
						alt="Card Image"
						className='h-48 w-full object-cover'
					/>
				</CardHeader>
				<CardBody>
					<Typography variant="h4" color="blue-gray">
						{title}
					</Typography>
					<Typography variant="lead" color="gray" className="mt-3 font-normal">
						{description}
					</Typography>
				</CardBody>
				<CardFooter>
					<Button color="green" buttonType="link" size="small" ripple="dark">
						<Link to={buttonLink}>{buttonText}</Link>
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}

export default Cards