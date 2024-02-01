import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

function Features() {
  return (
    <div className='flex items-center justify-center'>
        <Card className='items-center justify-center'>
            <CardHeader>
                <img src='https://unsplash.com/photos/wooden-ladle-and-chopping-board-with-ginger-during-daytime-vuDXJ60mJOA'/>
            </CardHeader>
            <CardBody>
                <Typography variant='h4'>
                    Book a Consultation
                </Typography>
            </CardBody>
            <CardFooter>
                <Button color="blue" buttonType="link" size="small" ripple="dark">
                    Know More
                </Button>
            </CardFooter>
        </Card>

        <Card className='items-center justify-center'>
            <CardHeader>
                <img src='https://unsplash.com/photos/five-gray-spoons-filled-with-assorted-color-powders-near-chilli-vA1L1jRTM70'/>
            </CardHeader>
            <CardBody>
                <Typography variant='h4'>
                    Our Products
                </Typography>
            </CardBody>
            <CardFooter>
                <Button color="blue" buttonType="link" size="small" ripple="dark">
                    Know More
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Features