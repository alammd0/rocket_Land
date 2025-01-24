/** @format */

import React from "react";
import { Link } from "react-router-dom";

const GetButton = ({ text, bgColor, Color, hoverBgColor, hoverColor }) => {
	return (
		<div>
			<button
				className={`${bgColor ? bgColor : ""} ${Color ? Color : ""} ${
					hoverBgColor ? hoverBgColor : ""
				} ${
					hoverColor ? hoverColor : ""
				} px-4 py-3 text-[16px] font-semibold rounded-md shadow shadow-cyan-400
         cursor-pointer transition-all duration-200`}>
				<Link to="/">{text}</Link>
			</button>
		</div>
	);
};

export default GetButton;
