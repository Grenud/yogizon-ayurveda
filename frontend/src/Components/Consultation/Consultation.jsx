import React from 'react'
import {
	Typography,
	Button,
	Dialog,
	Card,
	CardBody,
	Input,
	Checkbox,
	CardFooter,
  Popover,
	PopoverHandler,
	PopoverContent,
} from "@material-tailwind/react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import TimePicker from 'react-time-picker';
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { toast } from 'react-hot-toast';

function Consultation({open, handler}) {

  const [date, setDate] = React.useState();
  const [time, setTime] = React.useState('10:00');
  return (
    <>
		<Dialog
        size="sm"
        open={open}
        handler={handler}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[80%]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Consult Ved Ji
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your details
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Full Name
            </Typography>
            <Input label="Full Name" size="lg" required />
            <Typography className="-mb-2" variant="h6">
              Your Phone Number
            </Typography>
            <Input label="Phone" size="lg" type='tel' required />
            <Typography className="-mb-2" variant="h6">
              Select an appointment date
            </Typography>
            <Popover placement="top">
						<PopoverHandler>
                <Input
									label="Date of Birth"
									onChange={() => null}
									value={date ? format(date, "PPP") : ""}
								/>
						</PopoverHandler>
						<PopoverContent className="z-[9999]">
							<DayPicker
								mode="single"
								selected={date}
								onSelect={setDate}
								showOutsideDays
								className="border-0"
								classNames={{
									caption:
										"flex justify-center py-2 mb-4 relative items-center",
									caption_label:
										"text-sm font-medium text-gray-900",
									nav: "flex items-center",
									nav_button:
										"h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
									nav_button_previous: "absolute left-1.5",
									nav_button_next: "absolute right-1.5",
									table: "w-full border-collapse",
									head_row: "flex font-medium text-gray-900",
									head_cell: "m-0.5 w-9 font-normal text-sm",
									row: "flex w-full mt-2",
									cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
									day: "h-9 w-9 p-0 font-normal",
									day_range_end: "day-range-end",
									day_selected:
										"rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
									day_today:
										"rounded-md bg-gray-200 text-gray-900",
									day_outside:
										"day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
									day_disabled: "text-gray-500 opacity-50",
									day_hidden: "invisible",
								}}
								components={{
									IconLeft: ({ ...props }) => (
										<ChevronLeftIcon
											{...props}
											className="h-4 w-4 stroke-2"
										/>
									),
									IconRight: ({ ...props }) => (
										<ChevronRightIcon
											{...props}
											className="h-4 w-4 stroke-2"
										/>
									),
								}}

                required
							/>
						</PopoverContent>
					</Popover>
          <Typography className="-mb-2" variant="h6">
              Select an appointment time
            </Typography>
            <Input label="Select Time" size="lg" type='time' required />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={() => {
              handler();
              toast.success('Your slot has been booked!');
              }} fullWidth>
              Book Slot
            </Button>
            
          </CardFooter>
        </Card>
      </Dialog>
	</>
  )
}

export default Consultation