/** @format */

import React from "react";
import { useForm } from "react-hook-form";

const ContactFrom = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	function clickHandle(data) {
		console.log(data);
		reset();
	}

	return (
		<div>
			<form className="flex flex-col gap-6" onSubmit={handleSubmit(clickHandle)}>
				{/* name Section */}
				<div className="flex flex-row gap-5 w-[100%]">
					{/* First Name */}
					<div className="flex flex-col w-full gap-2">
						<label className="text-[16px] font-semibold text-stone-500" htmlFor="fName">First Name : <sup className="text-red-500">*</sup></label>
						<input
							type="text"
							id="fName"
                            placeholder="Enter First Name"
                            className="w-full px-1 py-2 text-[16px] rounded-md border"
							{...register("fName", { required: true })}
						/>
						{errors.fName && <p className="text-red-500 text-[12px] capitalize font-semibold">Please Enter First Name <sup className="text-red-500">*</sup> </p>}{" "}
					</div>

					{/* Last Name Section */}
					<div className="flex flex-col w-full gap-2">
						<label className="text-[16px] font-semibold text-stone-500"  htmlFor="lName">Last Name : <sup className="text-red-500">*</sup> </label>
						<input
							type="text"
							id="lName"
                            className="w-full px-1 py-2 text-[16px] rounded-md border"
                            placeholder="Enter Last Name"
							{...register("lName", { required: true })}
						/>
						{errors.lName && <p className="text-red-500 text-[12px] capitalize font-semibold">Please Enter Last Name <sup className="text-red-500">*</sup></p>}{" "}
					</div>
				</div>

				{/* Email Section */}
				<div className="flex flex-col w-full gap-2">
					<label className="text-[16px] font-semibold text-stone-500"  htmlFor="email">
						Email : <sup className="text-red-500">*</sup>
					</label>
					<input
						type="email"
						id="email"
                        placeholder="Enter Your Email"
                        className="w-full px-1 py-2 text-[16px] rounded-md border"
						{...register("email", { required: true })}
					/>
					{errors.email && <p className="text-red-500 text-[12px] capitalize font-semibold">Please Enter Your Email <sup>*</sup> </p>}
				</div>

				<button type="submit" className='bg-blue-900 px-4 py-3 text-[16px] text-white font-semibold rounded-md shadow shadow-cyan-400 cursor-pointer w-fit mx-auto hover:bg-black transition-all dura20'> Get Started</button>
			</form>
		</div>
	);
};

export default ContactFrom;
