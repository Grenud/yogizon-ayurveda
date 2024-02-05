import React from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import {
	CogIcon,
	UserIcon,
	BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

import Footer from "../Footer/Footer";
import MegaMenuWithHover from "../Navbar/MegaMenu";

function Login() {

	return (
		<div>
			<MegaMenuWithHover />
			<div className="min-h-screen w-full px-[17rem] py-4 flex flex-col justify-center items-center gap-7">
				<div className="flex flex-col items-center justify-center gap-5">
					<Typography variant="h3" color="green">
						Login
					</Typography>
					<Typography color="gray">
						Complete the form to login.
					</Typography>

                    <form className="mt-[7rem]">
                        <div className="flex flex-col justify-center items-center gap-7 w-full">
                            <div className="w-[50rem]">
                                <Input type="email" label="Email" />
                            </div>
                            <div className="w-[50rem]">
                                <Input type="password" label="Password" />
                            </div>
                        </div>

                        <div className="mt-5 flex justify-between w-full">
                                <Button color="green">
                                    Login
                                </Button>
                            
                        </div>
				</form>

				</div>

				<form className="mt-[7rem]">
					

					
				</form>
			</div>
			<Footer />
		</div>
	);
}

export default Login;
