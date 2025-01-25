import React from "react";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";

const IconDetails = ({ iconName, link }) => {
	const Icon = Icons[iconName];

	return (
		<div>
			<Link to={link}>
				<Icon className="text-3xl text-[#87909E]" />
			</Link>
		</div>
	);
};

export default IconDetails;
