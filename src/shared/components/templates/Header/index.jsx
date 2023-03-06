import {nav} from "/src/shared/const"
import {Link} from "react-router-dom"
import React, {useState} from "react"
import classNames from "classnames"
import {Social} from "../../atoms/index.jsx"

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	function onClickMenu() {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<header className={classNames(isOpen?"h-screen lg:h-auto":"","w-full bg-gradient-green flex flex-col items-center justify-start fixed z-[9999]")}>
				{/*<section className="bg-white h-8 w-full flex flex-col items-center justify-center">*/}
				{/*	<div className="flex flex-row items-center justify-between max-w-[1240px] w-full">*/}
				{/*		<div>phone</div>*/}
				{/*		<div>social icons</div>*/}
				{/*	</div>*/}
				{/*</section>*/}
				<section className="container max-w-[1240px] px-4 xl:px-0 w-full flex flex-row items-center justify-between gap-5 py-5">
					<Link to="/" className="flex-3">
						{/*<img src="" alt="logo" className="flex"/>*/}
					</Link>

					<div className="flex-2 hidden lg:flex flex-row items-center justify-center gap-4">
						<Social/>
						{/*<div className="py-3 px-6 bg-white rounded-full">*/}
						{/*	<Mail/>*/}
						{/*</div>*/}
						{/*<span className="text-white font-gilroy font-normal text-xl  break-all">orientaluniversitiuz@gmail.com</span>*/}
					</div>
					<div className="flex-2 hidden lg:flex flex-row items-center justify-center gap-4">
						<div className="py-3 h-auto px-6 bg-white rounded-full">
						</div>
						<div className="flex flex-col">
							<span className="text-white font-gilroy font-normal text-xl">Murojaat uchun / Call center</span>
							<span className="text-white font-gilroy font-normal text-xl">+998958832131 / +998950682131</span>
						</div>
					</div>

					<div className="flex-4 flex items-center justify-start gap-4">
						{/*<a href="">*/}
						<div className="bg-white flex items-center justify-center px-2 sm:px-6 py-5 rounded-full">
							<span className="font-gilroy font-semibold text-transparent text-base sm:text-xl md:text-2xl lg:text-3xl bg-clip-text bg-gradient-green">QABUL 2023</span>
						</div>
						{/*</a>*/}
						<button onClick={onClickMenu} className="w-[64px] h-[64px] flex lg:hidden">
							{isOpen?"close":"open"}
						</button>
					</div>
				</section>
				<div className={classNames(isOpen?"flex lg:hidden":"hidden","flex-col w-full")}>
					<div className="w-full flex flex-col items-start justify-start">
						{nav.filter(item=>(item.isActive===true)).map((item, index) => (
							<Link key={index} to={item.route} className="w-full border-white border-b-[1px]">
								<div className="font-gilroy font-normal text-2xl hover:bg-primary border-b-2 px-8 py-5 text-white">
									{item.name}
								</div>
							</Link>
						))}
					</div>
					<div className="flex flex-col items-center justify-center mt-8">
						<div className="flex flex-col">
							<span className="text-white font-gilroy font-normal text-xl">Murojaat uchun / Call center</span>
							<span className="text-white font-gilroy font-normal text-xl">+998958832131 / +998950682131</span>
						</div>
						<Social/>
					</div>
				</div>
				<nav className="bg-white w-full hidden lg:flex flex-col lg:flex-row items-center justify-center gap-4 py-4 font-gilroy font-normal text-xl shadow-secondary-50 shadow-lg">
					{nav.filter(item=>(item.isActive === true)).map((item, index) => (
						<Link key={index} to={item.route}>
							<div className="hover:bg-primary px-4 py-3 hover:text-white rounded-full">
								{item.name}
							</div>
						</Link>
					))}
				</nav>
			</header>
		</>
	)
}
