/** @format */

import React from "react";

const testimonials = [
	{
		text: "This template is really nice and offers quite a large set of options.",
		name: "Mark Robinson",
		title: "Product Designer, Google",
		image:
			"https://www.sprocketrocket.co/hs-fs/hubfs/sr-assets/pattern-library/sr-cards-testimonial-slider-02/02.jpg?width=90&height=90&name=02.jpg",
	},
	{
		text: "This template is really nice and offers quite a large set of options",
		name: "Meg Riley",
		title: "Product Designer, Google",
		image:
			"https://www.sprocketrocket.co/hs-fs/hubfs/sr-assets/pattern-library/sr-cards-testimonial-slider-02/06.jpg?width=90&height=90&name=06.jpg",
	},
];

const TestemoNialCard = () => {
	return (
		<div className="flex lg:flex-row flex-col lg:gap-20 gap-10 justify-center items-center p-[15px]">
			{testimonials.map((data, index) => (
				<div
					className="lg:w-[30%] bg-[#FFFFFF] flex flex-col lg:gap-20 gap-10 p-[30px] shadow-xl shadow-blue-300 border border-blue-600 rounded-lg"
					key={index}>
					<p className="text-[20px] font-light">
						<span>&ldquo;</span>
						{data.text}
					</p>

					<div className="flex flex-col gap-2">
						<img className="h-20 w-20 rounded-full" src={data.image} alt="Not Image" />
						<h2 className=" text-[20px] font-semibold">{data.name}</h2>
						<p className="text-[16px]">{data.title}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default TestemoNialCard;
