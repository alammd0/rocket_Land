/** @format */

import React from "react";
import GetButton from "../core/GetButton";

const DemoSection = ({ image, title, desc, text }) => {
	return (
		<div className="flex flex-row gap-30 items-center">
			<div className="w-[50%]">
				<img src={image} alt="Not" />
			</div>

			<div className="flex flex-col gap-10">
				<div className="flex flex-col gap-4">
					<h2 className="text-4xl text-white font-bold w-[90%]">{title}</h2>
					<p className="text-xl font-medium text-[#f4ededb8] w-[75%]">{desc}</p>
				</div>

				<div>
					<GetButton
						text={text}
						bgColor={"bg-white"}
						Color={"text-blue-900"}
						hoverBgColor={"hover:bg-blue-900"}
						hoverColor={"hover:text-white"}
					/>
				</div>
			</div>
		</div>
	);
};

export default DemoSection;
