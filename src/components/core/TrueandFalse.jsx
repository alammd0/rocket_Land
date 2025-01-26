/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

const TrueandFalse = ({ active, text }) => {
	return (
		<Link
			className={`${
				active
					? "bg-[#0C63FF] text-white hover:text-[#9fb6e1]"
					: "bg-white text-[#0C63FF] hover:text-[#9fb6e1]"
			} px-4 py-3 text-[16px] flex items-center gap-2 font-semibold rounded-md shadow shadow-cyan-400 cursor-pointer transition-all duration-200`}
			to="/">
			{text} <GrFormNextLink />
		</Link>
	);
};

export default TrueandFalse;
