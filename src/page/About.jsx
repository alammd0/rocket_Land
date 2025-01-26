/** @format */

import React from "react";
import About01 from "../assets/about_01.webp";
import { MdOutlineViewModule } from "react-icons/md";
import { GrTemplate } from "react-icons/gr";
import { TbTemplate } from "react-icons/tb";
import TestemoNialCard from "../components/Main/TestemoNialCard";
import Footer from "../components/common/Footer";
import about02 from "../assets/about_02.webp";
import GetButton from "../components/core/GetButton";
import HubSpot from "../components/core/HubSpot";

const About = () => {
	return (
		<div>
			{/* Section : 01 */}
			<section className="lg:w-11/14 sm:w-11/12 mx-auto lg:pt-[100px] pt-[30px] lg:pb-[60px]">

				<div className="flex flex-col gap-12">

					<div className="flex flex-col gap-1 lg:ml-0 ml-6 lg:items-center lg:justify-center">

						<p className="text-2xl font-bold text-[#30343B]">
							About Sprocket Rocket
						</p>

						<h2 className="text-5xl font-bold lg:w-[50%] lg:text-center text-[#30343B]">
							Never build another page from scratch again.
						</h2>
					</div>

					<div className="flex flex-col gap-4 items-center justify-center">
						<img
							className="h-[500px] rounded-lg"
							src={About01}
							alt="Not Image"
						/>
						<p className="lg:w-[52%] w-[90%] text-center text-[18px] font-semibold text-[#87909E]">
							Stacking modules is rapid, responsive, and enables marketers to
							build on-brand pages easily.
						</p>
					</div>

				</div>

			</section>

			{/* Section : 02 */}
			<section className="bg-[#060F1E] pt-[60px] pb-[60px] mt-[30px] mb-[30px]">
				<div className="lg:w-11/14 sm:w-11/12 mx-auto flex lg:flex-row flex-col lg:gap-0 gap-12 items-center justify-between">

					<div className="flex flex-col items-center justify-center text-white">
						<MdOutlineViewModule className="text-4xl font-bold" />
						<p className="text-6xl font-bold">46</p>
						<p className="text-2xl font-bold">Stockable Modules</p>
					</div>

					<div className="flex flex-col items-center justify-center text-white">
						<GrTemplate className="text-4xl font-bold" />
						<p className="text-6xl font-bold">23</p>
						<p className="text-2xl font-bold">Proven Page Templates</p>
					</div>

					<div className="flex flex-col items-center justify-center text-white">
						<TbTemplate className="text-4xl font-bold" />
						<p className="text-6xl font-bold">13</p>
						<p className="text-2xl font-bold">System Page Templates</p>
					</div>

				</div>
			</section>

			{/* Section : 03 */}
			<section className="lg:w-11/14 sm:w-11/12 mx-auto pt-[60px] pb-[60px]">

				<div className="flex flex-col gap-4 items-start justify-center lg:w-[47%] w-[90%] mx-auto">
					<h2 className="text-2xl font-bold">Easy-To-Use Tools</h2>
					<div className="text-[19px] text-[#87909E]">
						Collaborate seamlessly across devices from wherever you may be -
						whether you're in office, on the go, or making last-minute changes
						before your next meeting.
					</div>
					<div className="text-[19px] text-[#87909E]">
						From start-to-finish, the design and strategy team provide all of
						the guidance and expertise necessary to build a high-conversion
						website.
					</div>
					<div className="text-[19px] text-[#87909E]">
						Without rigid templates, you can build the exact type of website
						necessary to hit your website performance goals.
					</div>
				</div>

			</section>

			{/* Section : 04 */}
			<section className="px-4 py-[50px] bg-amber-50">
				<div className="w-11/14 mx-auto flex flex-col gap-18 justify-center items-center">
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
			</section>

			{/* section : 05 */}
			<section>
				<div
					style={{
						backgroundImage: `url(${about02})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						filter: "brightness(70%)",
						backgroundRepeat: "no-repeat",
					}}
					className="h-[600px] mt-10 flex justify-center flex-col gap-4 items-center">
					<h2 className="text-6xl flex lg:items-start text-center font-bold text-white">
						Never feel stuck again.
					</h2>
					<p className="text-[24px] text-white lg:w-[40%] text-center">
						Proven modules, winning page templates, and support that's always
						there when you need it.{" "}
					</p>

					<GetButton
						text={"Get Started"}
						bgColor={"bg-blue-900"}
						Color={"text-white"}
					/>
				</div>
			</section>

			{/* Section : 06 */}
			<section >
				<HubSpot />
			</section>

			{/* Section : 06 */}
			<section>
				<Footer />
			</section>
		</div>
	);
};

export default About;
