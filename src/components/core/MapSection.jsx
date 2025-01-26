/** @format */

import React from "react";

const MapSection = () => {
	return (
		<div className="lg:w-11/14 sm:w-11/12 sm:mx-auto flex flex-col rounded-lg justify-between gap-10 items-center md:flex-row bg-white shadow">
			{/* Map Section */}
			<div className="w-full md:w-2/3">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.6812215995763!2d-0.1277582842298385!3d51.50735047963598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b31cce9b791%3A0x8b1c2b8f11c3e3cd!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1616561087471!5m2!1sen!2sin"
					className="w-full h-96 border-0 rounded-lg"
					allowFullScreen=""
					loading="lazy"></iframe>
			</div>

			{/* Contact Info Section */}
			<div className="w-full lg:ml-0 ml-6 flex flex-col gap-4">
				<h2 className="text-xl font-bold">Contact Us</h2>
				<a
					href="https://www.google.com/maps"
                    className="text-blue-500 hover:underline"
					>
					View Google Maps
				</a>
				<ul className="text-gray-700  flex flex-col gap-1">
					<li>Monday 10am–6pm</li>
					<li>Tuesday 10am–6pm</li>
					<li>Wednesday 10am–6pm</li>
					<li>Thursday 10am–6pm</li>
					<li>Friday 10am–6pm</li>
					<li>Saturday 10am–6pm</li>
					<li>Sunday 10am–6pm</li>
				</ul>
				<p className="text-blue-500 hover:underline">hi@SprocketRocket.co</p>
				<a href="tel:+55534567890" className="text-blue-500 hover:underline">
					+555 345 678 90
				</a>
			</div>
		</div>

        
	);
};

export default MapSection;
