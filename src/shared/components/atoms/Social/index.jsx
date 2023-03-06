import React from "react"

export function Social() {
	return (
		<div className="flex flex-row gap-4 py-4 mt-0">
			<a className="w-auto" href="https://www.instagram.com/oriental_universiteti/" target="_blank" rel="noreferrer">
				<div className="fill-secondary bg-white hover:bg-gradient-instagram fill-primary-700 hover:fill-white rounded-full w-10 h-10 flex items-center justify-center">
				</div>
			</a>

			<a className="w-auto" href="https://www.facebook.com/profile.php?id=100088338788010" target="_blank" rel="noreferrer">
				<div className="fill-secondary bg-white hover:bg-facebook fill-primary-700 hover:fill-white rounded-full w-10 h-10 flex items-center justify-center">
				</div>
			</a>

			{/*<a className="w-auto" href="#">*/}
			{/*	<div className="fill-secondary bg-white hover:bg-twitter fill-primary-700 hover:fill-white rounded-full w-10 h-10 flex items-center justify-center">*/}
			{/*		<Twitter />*/}
			{/*	</div>*/}
			{/*</a>*/}

			<a className="w-auto" href="https://www.youtube.com/channel/UC-NL59S6wuClr6p3K7QGaWA" target="_blank" rel="noreferrer">
				<div className="fill-secondary bg-white hover:bg-youtube fill-primary-700 hover:fill-white rounded-full w-10 h-10 flex items-center justify-center">
				</div>
			</a>

			<a className="w-auto" href="https://t.me/orientaluniversityuz" target="_blank" rel="noreferrer">
				<div className="fill-secondary bg-white hover:bg-telegram fill-primary-700 hover:fill-white rounded-full w-10 h-10 flex items-center justify-center">
				</div>
			</a>

		</div>
	)
}


