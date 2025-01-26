/** @format */

import React from "react";
import TrueandFalse from "../components/core/TrueandFalse";
import bg_value from "../assets/bg-corevalues.webp";
import CompanyLog from "../components/common/CompanyLog";
import EasyToUse from "../components/core/EasyToUse";
import HubSpot from "../components/core/HubSpot";
import CardChange from "../components/core/CardChange";
import TestemoNialCard from "../components/Main/TestemoNialCard";
import Footer from "../components/common/Footer";

const EasyToUseData = [
	{
		id: "01",
		title: "Easy-To-Use Tools",
		desc: "Collaborate seamlessly across devices from wherever you may be - whether you're in office, on the go, or making last-minute changes before your next meeting.",
	},
	{
		id: "02",
		title: "Easy-To-Use Tools",
		desc: "Collaborate seamlessly across devices from wherever you may be - whether you're in office, on the go, or making last-minute changes before your next meeting.",
	},
	{
		id: "03",
		title: "Easy-To-Use Tools",
		desc: "Collaborate seamlessly across devices from wherever you may be - whether you're in office, on the go, or making last-minute changes before your next meeting.",
	},
];

const Services = () => {
	return (
		<div>
			<section>
				<div className="mx-auto bg-amber-50 lg:py-[100px] py-[50px] flex flex-col gap-30">
					<div className="lg:w-11/14 sm:w-11/12 mx-auto flex lg:flex-row flex-col justify-between items-start gap-20">
						<div className="lg:w-[50%] flex flex-col gap-6">
							<div className="flex flex-col gap-8 mt-8">
								<h2 className="text-4xl font-bold">
									Deliver a dramatic website experience.
								</h2>
								<p className="text-[20px] font-semibold text-[#57585a]">
									Sprocket Rocket lets you transform your rapid prototype into a
									beautiful design by adjusting every aspect of the design to
									fit brand standards.
								</p>
							</div>

							<div className="flex gap-10">
								<button>
									<TrueandFalse active={true} text={"Get Start Now"} />
								</button>

								<button>
									<TrueandFalse active={false} text={"Lern More"} />
								</button>
							</div>
						</div>

						<div className="lg:w-[60%] px-4 py-5 flex flex-col gap-8 justify-center">
							<img className=" rounded-lg" src={bg_value} alt="not" />
						</div>
					</div>
				</div>
			</section>

			{/* section - 02 */}
			<section>
				<div className="lg:w-11/14 sm:w-11/12 mx-auto px-4 py-[50px] flex flex-col gap-30">
					<CompanyLog />

					<EasyToUse EasyToUseData={EasyToUseData} />
				</div>
			</section>

			{/* Section : 03 */}
			<section>
				<HubSpot />
			</section>

			{/* Section : 04 */}
			<section>
				<div className="lg:w-11/14 sm:w-11/12 mx-auto mt-[90px] mb-[40px] flex flex-col gap-20">
					<div className="flex justify-center items-center flex-col gap-3">
						<h2 className="text-4xl font-bold">Headline Here</h2>
						<p className="text-[16px] font-semibold text-gray-500">
							Lorem ipsum dolor sit amet
						</p>
					</div>

					<div className="flex flex-col gap-10 m-3">
						<div>
							<CardChange
								position={"lg:flex-row"}
								card1Width={"lg:w-[60%]"}
								card2Width={"lg:w-[40%]"}
								title={"Easy-To-Use Tools"}
								desc={
									"Collaborate seamlessly across devices from wherever you may be - whether you're in office, on the go, or making last-minute changes before your next meeting."
								}
							/>
						</div>
						<div>
							<CardChange
								position={"lg:flex-row-reverse"}
								card1Width={"lg:w-[40%]"}
								card2Width={"lg:w-[60%]"}
								title={"Easy-To-Use Tools"}
								desc={
									"Collaborate seamlessly across devices from wherever you may be - whether you're in office, on the go, or making last-minute changes before your next meeting."
								}
							/>
						</div>
						<div>
							<CardChange
								position={"lg:flex-row"}
								title={"Easy-To-Use Tools"}
								card1Width={"lg:w-[50%]"}
								card2Width={"lg:w-[50%]"}
								desc={
									"Collaborate seamlessly across devices from wherever you may be - whether you're in office, on the go, or making last-minute changes before your next meeting."
								}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Section : 05 */}
			<section className="px-4 py-[50px] bg-amber-50">
				<div className="lg:w-11/14 sm:w-11/12 mx-auto flex flex-col gap-18 justify-center items-center">
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

			{/* footer section */}
			<section>
				<Footer />
			</section>
		</div>
	);
};

export default Services;
