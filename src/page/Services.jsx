/** @format */

import React from "react";
import TrueandFalse from "../components/core/TrueandFalse";
import bg_value from "../assets/bg-corevalues.webp";

const Services = () => {
	return (
		<div className="mx-auto bg-amber-50 py-[100px] flex flex-col gap-30">
			<div className="w-11/14 mx-auto flex justify-between items-start gap-20">
				<div className="w-[50%] flex flex-col gap-6">
					<div>
						<h2>Deliver a dramatic website experience.</h2>
						<p>
							Sprocket Rocket lets you transform your rapid prototype into a
							beautiful design by adjusting every aspect of the design to fit
							brand standards.
						</p>
					</div>

					<div>
						<button>
							<TrueandFalse active={true} text={"Get Start Now"} />
						</button>

						<button>
							<TrueandFalse active={false} text={"Lern More"} />
						</button>
					</div>
				</div>

				<div className="w-[50%] px-4 py-5 flex flex-col gap-8 justify-center">
					<img src={bg_value} alt="not" />
				</div>
			</div>
		</div>
	);
};

export default Services;
