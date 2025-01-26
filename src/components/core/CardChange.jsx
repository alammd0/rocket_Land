/** @format */

import React from "react";
import { TbTemplate } from "react-icons/tb";
import { HiOutlineTemplate } from "react-icons/hi";

const CardChange = ({ position, title, desc, card1Width, card2Width }) => {
	return (
		<div className="flex lg:flex-row flex-col gap-10">

			<div className={`${card1Width} bg-white shadow-[2px_-1px_6px_8px_rgba(243,_43,_228,_0.13)] flex flex-col gap-4
              px-5 py-8 rounded-lg`}>
				<TbTemplate className="text-4xl font-bold" />

				<div className="flex flex-col gap-3">
					<h2 className="text-4xl font-bold">{title}</h2>
					<p className="text-[16px] font-semibold text-[#87909E]">{desc}</p>
				</div>
			</div>

			<div className={`${card2Width} bg-white shadow-[2px_-1px_6px_8px_rgba(243,_43,_228,_0.13)] flex flex-col gap-4
              px-5 py-8 rounded-lg`}>
				<HiOutlineTemplate className="text-4xl font-bold"  />
				<div className="flex flex-col gap-3">
					<h2 className="text-4xl font-bold">{title}</h2>
					<p className="text-[16px] font-semibold text-[#87909E]">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default CardChange;
