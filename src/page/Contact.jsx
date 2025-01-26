/** @format */

import React from "react";
import { Link } from "react-router-dom";
import ContactFrom from "../components/Main/ContactFrom";
import MapSection from "../components/core/MapSection";
import Footer from "../components/common/Footer";

const Contact = () => {
	return (
		<div>
			{/* Section : 01 */}
			<section>
				<div className="mx-auto bg-amber-50 py-[100px] flex flex-col gap-30">

					<div className="lg:w-11/14 sm:w-11/12 mx-auto flex lg:flex-row flex-col justify-between items-start lg:gap-20 gap-10">
						<div className="lg:w-[50%] w-[90%] lg:ml-0 ml-6 flex flex-col gap-6">
							<div className="text-2xl   text-[#87909E]">
								Sprocket Rocket lets you transform your rapid prototype into a
								beautiful design by adjusting every aspect of the design to fit
								brand standards.
							</div>

							<div className="flex flex-col gap-6">
								<div className="flex flex-col gap-2">
									<h2 className="text-[#87909E] text-2xl font-bold">ADDRESS:</h2>
									<p className="text-[#87909E] text-2xl">11184 Antioch Rd, Ste 524</p>
									<p className="text-[#87909E] text-2xl">Overland Park, Kansas, 66210</p>
								</div>

								<div className="flex flex-col gap-2">
									<h2 className="text-[#87909E] text-2xl font-bold">PHONE:</h2>
									<Link to={"/"} className="text-blue-600 text-2xl hover:underline" >777-456-9810</Link>
								</div>

								<div className="flex flex-col gap-2">
									<h2 className="text-[#87909E] text-2xl font-bold">EMAIL:</h2>
									<Link className="text-blue-600 text-2xl hover:underline" to={"mailto:OY3X9@example.com"}>
										team@sprocketrocket.com
									</Link>
								</div>
							</div>
						</div>

						<div className="lg:w-[50%] lg:ml-0 ml-6 px-4 py-5 flex flex-col gap-8 justify-center">
							<div className="flex flex-col gap-1">
								<p className=" text-black text-xl font-bold">Contact Us</p>
								<h2 className="text-5xl font-bold text-[#30343B]">We’d Love To Hear From You!</h2>
							</div>

							<ContactFrom />
						</div>

					</div>

					<div>
						<MapSection/>
					</div>

				</div>
			</section>

			{/* Section : 02 */}
			<section>
				<Footer />
			</section>
		</div>
	);
};

export default Contact;
