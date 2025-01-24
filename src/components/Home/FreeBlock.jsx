/** @format */

import React from "react";
import GetButton from "../core/GetButton";

const FreeBlock = ({ position, heroImage, title1, title2, desc, text }) => {
	return (
		<div
			className={`flex ${
				position ? position : ""
			} gap-10 justify-center items-center`}>
			<div className="w-[50%]">
				<img className=" rounded-lg shadow-xl shadow-blue-100" src={heroImage} alt="Not" />
			</div>
			<div className="w-[50%] flex flex-col gap-6">
				<p className="text-2xl font-bold text-blue-600">{title1}</p>
				<div className="flex flex-col gap-4">
					<h2 className="text-4xl font-bold">{title2}</h2>
					<p className="text-xl font-medium text-gray-600">{desc}</p>
				</div>

				<GetButton
					text={text}
					bgColor="bg-blue-900"
					Color="text-white"
					hoverBgColor={"hover:bg-white"}
					hoverColor={"hover:text-blue-900"}
				/>
			</div>
		</div>
	);
};

export default FreeBlock;
