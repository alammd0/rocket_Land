/** @format */

import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import socialMedia from "../../data/iconData";
import menuData from "../../data/navBar";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import IconDetails from "./IconDetails";

const Footer = () => {
	return (
		<div className="pt-[60px] lg:ml-0 ml-6 pb-[40px]">
			<div className="lg:w-11/14 sm:w-11/12 mx-auto flex flex-col gap-8">

				<div>
					<Link to="/">
						<img src={logo} alt="Not" />
					</Link>
				</div>

				<div className="flex flex-row flex-wrap gap-5">
					{menuData.map((data, index) => {
						return (
							<div className="text-[18px] font-semibold text-[#87909E]" key={index}>
								<Link to={data.url}>{data.name}</Link>
							</div>
						);
					})}
				</div>

				<div className="flex lg:flex-row flex-col-reverse gap-8 justify-between lg:items-center">
					<div className="text-[18px] text-center font-semibold text-[#87909E]">
						@2025 All Rights Reserved by <Link to="/">Alam</Link>
					</div>
					<div className="flex flex-row gap-10">
						{socialMedia.map((item, index) => (
							<div key={index}>
								<IconDetails iconName={item.icon} link={item.link} />
							</div>
						))}
					</div>
				</div>

			</div>
		</div>
	);
};

export default Footer;
