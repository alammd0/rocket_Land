/** @format */

import React from "react";
import GetButton from "../core/GetButton";

const DemoSection = ({ image, title, desc, text }) => {
	return (
		<div className="flex lg:flex-row flex-col lg:gap-30 gap-10  items-center">
			<div className="lg:w-[50%]">
				<img src={image} alt="Not" />
			</div>

			<div className="flex flex-col lg:gap-10 gap-6 mb-10 lg:ml-0 ml-6">
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
