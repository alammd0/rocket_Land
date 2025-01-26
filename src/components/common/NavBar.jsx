/** @format */

import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import GetButton from "../core/GetButton";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="lg:w-11/14 sm:w-11/12 mx-auto bg-white px-4 py-4">
			<div className="flex justify-between items-center relative">
				<div>
					<img className="h-[45px]" src={Logo} alt="Not" />
				</div>

				<div className="hidden lg:flex flex-row gap-x-14 items-center">
					<div className="relative group">
						{/* Menu */}
						<div className="text-[18px] font-semibold cursor-pointer hover:text-cyan-600 hover:shadow-blue-600 transition-all duration-200">
							Menu
						</div>
						<div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
							<ul className="bg-cyan-600 px-5 py-2 flex flex-col gap-3 rounded-md items-start shadow shadow-pink-200">
								<li>
									<Link className="text-[18px] text-blue-200" to="/Home">
										Home
									</Link>
								</li>
								<li>
									<Link className="text-[18px] text-blue-200" to="/about">
										About
									</Link>
								</li>
								<li>
									<Link className="text-[18px] text-blue-200" to="/services">
										Services
									</Link>
								</li>
								<li>
									<Link className="text-[18px] text-blue-200" to="/contact">
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<GetButton
						text="Get Started"
						bgColor="bg-blue-900"
						Color="text-white"
					/>
				</div>

				<div className="lg:hidden">
					<button
						className="text-[24px] text-gray-800 focus:outline-none"
						onClick={() => setIsOpen(!isOpen)}>
						☰
					</button>
				</div>

				{isOpen && (
					<div className="lg:hidden bg-cyan-600 px-5 py-4 mt-2 flex flex-col gap-3 rounded-md shadow shadow-pink-200 absolute top-10 right-0">
						<ul>
							<li>
								<Link
									className="text-[18px] text-blue-200 hover:text-white"
									to="/Home">
									Home
								</Link>
							</li>
							<li>
								<Link
									className="text-[18px] text-blue-200 hover:text-white"
									to="/about">
									About
								</Link>
							</li>
							<li>
								<Link
									className="text-[18px] text-blue-200 hover:text-white"
									to="/services">
									Services
								</Link>
							</li>
							<li>
								<Link
									className="text-[18px] text-blue-200 hover:text-white"
									to="/contact">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default NavBar;
