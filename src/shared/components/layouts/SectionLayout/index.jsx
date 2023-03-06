import React from "react"

export const SectionLayout = ({title, children,id="",align="center"}) => {
	console.log(align)
	return(
		<section className="w-full max-w-[1240px] flex items-center justify-center flex-col px-4 lg:px-4 xl:px-0 mt-5 md:mt-6 lg:mt-10" id={`${id}`}>
			<h2 className="font-gilroy font-semibold text-2xl md:text-3xl lg:text-4xl text-center text-secondary mt-6">
				{title}
			</h2>
			{children}
		</section>
	)
}
