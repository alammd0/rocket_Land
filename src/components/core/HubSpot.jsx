/** @format */

import React from "react";
import GetButton from "./GetButton";

const HubSpot = () => {
	return (
		<div className="bg-[#060F1E] pt-[90px] pb-[90px]">
			<div className="w-11/14 mx-auto flex justify-between items-center">
				<h2 className="text-4xl font-bold w-[50%] text-white">
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
