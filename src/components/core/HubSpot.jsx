/** @format */

import React from "react";
import GetButton from "./GetButton";

const HubSpot = () => {
	return (
		<div className="bg-[#060F1E] pt-[90px] pb-[90px]">
			<div className="lg:w-11/14 sm:w-11/12  mx-auto flex lg:flex-row flex-col gap-10 justify-between lg:items-center">
				<h2 className="text-4xl font-bold lg:w-[50%] text-white">
					Sprocket Rocket. The easiest and fastest way to build on HubSpot.
				</h2>

				<GetButton
					text={"Get Started"}
					bgColor={"bg-[#0C63FF]"}
					Color={"text-white"}
				/>
			</div>
		</div>
	);
};

export default HubSpot;
