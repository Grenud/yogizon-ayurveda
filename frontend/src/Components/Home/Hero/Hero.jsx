import React from "react";

import { Typography, Button, IconButton } from "@material-tailwind/react";

const heroVideo = "/Videos/heroBackgroundVideo.mp4"

function Hero() {
    return (
        <div className="relative top-0 left-0 w-full bg-gradient-to-r from-[rgba(142,206,148,0.41)] to-[#6be9e957]">
            <div className="relative overflow-hidden min-h-screen flex justify-center items-center">
                {/* <div className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-300/50 to-green-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
                    <div className="bg-gradient-to-tl from-green-50 via-green-100 to-green-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]"></div>
                </div> */}

                <div className="relative z-10">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                        <div className="max-w-2xl text-center mx-auto">
                            <div className="mt-5 max-w-2xl">
                                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                                    <Typography variant="h1" color="black" className="font-poppins font-bold drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                        Ayurveda: The Solution to Your Ailments
                                    </Typography>
                                </h1>
                            </div>

                            <div className="mt-5 max-w-3xl">
                                <p className="">
                                    <Typography variant="p" color="gray" className="font-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi dolorem quibusdam, quas dolor ipsa beatae eligendi autem ea suscipit sed repellat voluptatum saepe ducimus fuga et recusandae culpa, odio labore!
                                    </Typography>
                                </p>
                            </div>

                            <div className="mt-8 gap-3 flex justify-center">
                                <Button
                                    color="green"
                                    size="sm"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <Typography variant="p">Get Started</Typography>
                                    <svg
                                        className="flex-shrink-0 w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-container absolute top-0 left-0 overflow-hidden w-[100%] h-[100%]">
                <video autoPlay loop muted playsInline className='absolute top-[50%] left-[50%] z-[-1] object-cover translate-x-[-50%] translate-y-[-50%] min-w-[100%] min-h-screen w-auto h-auto '>
                    <source src={heroVideo} type='video/mp4'/> 
                </video>
            </div>
        </div>
    );
}

export default Hero;
