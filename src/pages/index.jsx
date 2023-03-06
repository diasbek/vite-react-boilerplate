import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainPage from "./main"
import {ScrollToTop} from "../shared/components/templates"

export const Routing = () => {

	return (
		<BrowserRouter>
			<ScrollToTop/>
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	)
}

