/** @format */

import React from "react";
import logo1 from "../../assets//logo-airbnb-01.webp";
import logo2 from "../../assets/logo-fitbit-02.webp";
import logo3 from "../../assets/logo-spotify-03.webp";
import logo4 from "../../assets/logo-slack-04.webp";
import logo5 from "../../assets/logo-alphabet-04.webp";

const CompanyLog = () => {
	return (
		<div className="flex flex-row gap-8 items-center justify-center">
			<img className="h-[40px]" src={logo1} />
			<img className="h-[40px]" src={logo2} />
			<img className="h-[40px]" src={logo3} />
			<img className="h-[40px]" src={logo4} />
			<img className="h-[40px]" src={logo5} />
		</div>
	);
};

export default CompanyLog;
