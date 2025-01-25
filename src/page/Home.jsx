/** @format */

import React from "react";
import { Link } from "react-router-dom";
import macImage from "../assets/MacbookPro_P9.webp";
import CompanyLog from "../components/common/CompanyLog";
import heroImage1 from "../assets/Hero_img1.webp";
import heroImage2 from "../assets/Hero_img2.webp";
import FreeBlock from "../components/Home/FreeBlock";
import GetButton from "../components/core/GetButton";
import leftDemo from "../assets/leftDemo.webp";
import DemoSection from "../components/Home/DemoSection ";
import TestemoNialCard from "../components/Main/TestemoNialCard";
import Footer from "../components/common/Footer";
import HubSpot from "../components/core/HubSpot";

const Home = () => {
	return (
		<div>
			{/* section : 01 */}
			<section className="bg-[#1075FF] pt-[65px] pb-[65px]">
				<div className="w-11/14 mx-auto flex flex-row justify-between items-center">
					{/* left side */}
					<div className="flex flex-col gap-6 justify-between w-[50%]">
						<h2 className="text-4xl font-semibold w-[70%] text-white">
							Put Your Best Page Forward
						</h2>
						<p className="text-[24px] text-[#f4ededb8]">
							Sprocket Rocket lets you transform your rapid prototype into a
							beautiful design by adjusting every aspect of the design to fit
							brand standards.
						</p>

						<div className="flex flex-row gap-10">
							<GetButton
								text="Get Start Now"
								bgColor="bg-[#1075FF]"
								Color="text-white"
								hoverBgColor="hover:bg-white"
								hoverColor="hover:text-[#1075FF]"
							/>
							<button className="px-4 py-3 text-[16px] hover:bg-[#1075FF] bg-white text-[#1075FF] hover:text-white transition-all duration-200 font-semibold rounded-md shadow shadow-cyan-400">
								<Link
									to="#"
									className="flex flex-row gap-2 items-center justify-center">
									<p>Watch the video</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="size-6">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
										/>
									</svg>
								</Link>
							</button>
						</div>
					</div>
					{/* right side */}
					<div className="w-[50%] flex justify-center items-center">
						<img src={macImage} alt="Not Availabe" />
					</div>
				</div>
			</section>

			<div className="lg:h-[140px]"></div>

			{/* Section : 02 */}
			<section>
				<div className="w-11/14 mx-auto px-4 py-[50px] flex flex-col gap-30">
					<CompanyLog />

					<div>
						{/* top Section */}
						<div>
							<FreeBlock
								position="flex-row"
								heroImage={heroImage1}
								title1="Sprocket Rocket Free"
								title2="Stunning HubSpot websites, effortlessly"
								desc="Create a best-practice website without writing a single line of code and bring your vision to life."
								text="Start Bulding- it's Free"
							/>
						</div>
						<div>
							<FreeBlock
								position="flex-row-reverse"
								heroImage={heroImage2}
								title2="Complete design control"
								desc="Powerful theme settings help maintain brand
consistency across the entire website, enabling you to customize even the smallest detail."
								text="Start Bulding"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Section : 03 */}
			<section className="bg-[#060F1E]">
				<DemoSection
					image={leftDemo}
					title="Modular Themes for HubSpotters"
					desc="Use pre-built modules to create high-performing, user-friendly pages"
					text="Watch video"
				/>
			</section>

			{/* Section: 04 */}
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

			{/* Section: 05 */}
			<section>
				<HubSpot />
			</section>
			
			<Footer />
		</div>
	);
};

export default Home;
