import React from "react"
import {Footer, Header} from "shared/components/templates"

export const MainLayout = ({ children, margin=true }) => {
	return(
		<main className="flex flex-col items-center bg-white font-gilroy">
			<Header />
			{
				margin
					? <div className="mt-[120px] lg:mt-[210px]"/>
					: <></>

			}
			{children}
			<Footer />
		</main>
	)
}
