/** @format */

import React from "react";
import { BiWorld } from "react-icons/bi";

const EasyToUse = ({ EasyToUseData }) => {
	return (
		<div className="flex lg:flex-row flex-col lg:gap-12 gap-10 justify-between items-center">
			{EasyToUseData.map((data) => (
				<div key={data.id} className="flex flex-col gap-4">
					<BiWorld className="text-5xl font-bold text-blue-500" />

					<div className="flex flex-col gap-4">
						<h2 className="text-2xl font-bold">{data.title}</h2>
						<p className="text-[16px] font-semibold text-gray-600">{data.desc}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default EasyToUse;
