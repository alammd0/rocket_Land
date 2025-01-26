/** @format */

import React from "react";
import ContactFrom from "../components/Main/ContactFrom";

import left from "../assets/left.webp";
import TestemoNialCard from "../components/Main/TestemoNialCard";
import CompanyLog from "../components/common/CompanyLog";
import Footer from "../components/common/Footer";

const Main = () => {
	return (
		<div>
			{/* Section - 01 */}
			<div className="mx-auto bg-amber-50 py-[100px]">
				<div className="lg:w-11/14 sm:w-11/12 mx-auto flex md:flex-row justify-center items-center flex-col lg:justify-between lg:items-start gap-20">
					<div className="lg:w-[50%] sm:w-11/12 flex flex-col gap-6">
						<h2 className="text-4xl flex lg:items-start md:text-left items-center text-center font-semibold text-gray-800 md:w-[80%] w-[100%]">
							Level Up Your HubSpot Website
						</h2>
						<p className="text-[24px] lg:text-left md:pl-0 p-[12px] flex items-center text-gray-600">
							Use Sprocket Rocket's stackable modules or proven page templates
							to create a winning website without touching a line of code.
						</p>
					</div>

					<div className="lg:w-[50%] sm:w-11/12  bg-white px-4 py-5 flex flex-col gap-8 justify-center items-center rounded-lg shadow-blue-100">
						<h2 className="text-4xl flex items-start text-left font-semibold text-gray-800">
							Download a Free Trial Today
						</h2>
						<ContactFrom />
					</div>
				</div>
			</div>

			{/* Section - 02 */}
			<div className="lg:w-11/14 sm:w-11/12 mx-auto px-4 py-[50px] flex flex-col gap-40">
				<CompanyLog />

				<div className="flex lg:flex-row lg:mt-0 ml-4 flex-col justify-between lg:gap-20 gap-8">
					{/* left */}
					<div className="lg:w-[50%] ">
						<img src={left} alt="not" />
					</div>

					{/* right */}
					<div className="lg:w-[50%] mt-4  flex flex-col lg:gap-8 gap-6">
						<h2 className="text-4xl flex items-start text-left font-semibold text-gray-800">
							Build and launch landing pages in a matter of minutes.
						</h2>
						<p className="text-[18px] text-gray-600">
							Whether you build your own landing page layout or use one of our
							included landing page templates, you can launch your page and
							start gathering performance data quickly with Sprocket Rocket.
						</p>
					</div>
				</div>
			</div>

			{/* section - 03 */}
			<div className="px-4 py-[50px] bg-amber-50">
				<div className="w-11/14 mx-auto flex flex-col lg:gap-18 gap-10 justify-center items-center">
					<div className="flex flex-col gap-4 text-center items-center justify-center">
						<h2 className="text-4xl flex items-start text-left font-semibold text-gray-800">
							Built for Everyone
						</h2>
						<p className="text-[18px] text-gray-600">
							Easy-to-use ensures new users learn to use prototyping tools.
						</p>
					</div>

					<div>
						<TestemoNialCard />
					</div>
				</div>
			</div>


			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Main;
