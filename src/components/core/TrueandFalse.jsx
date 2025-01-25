/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

const TrueandFalse = ({ active, text }) => {
	return (
		<Link
			className={`${
				active ? "bg-[#0C63FF] text-white" : "bg-white text-[#0C63FF]"
			} px-4 py-3 text-[16px] font-semibold rounded-md shadow shadow-cyan-400 cursor-pointer transition-all duration-200`}
			to="/">
			{text}{" "}
			<span>
				<GrFormNextLink />
			</span>
		</Link>
	);
};

export default TrueandFalse;
