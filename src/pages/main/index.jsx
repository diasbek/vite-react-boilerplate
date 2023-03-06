import React from "react"
import {MainLayout} from "shared/components/layouts"
import {About, BookAMeeting, Contact, Hero, Reviews, Services} from "modules/main/templates"

function MainPage() {
	return (
		<MainLayout margin={false}>
			<Hero/>
			<Services/>
			<About/>
			<BookAMeeting/>
			<Reviews/>
			<Contact/>
		</MainLayout>
	)
}

export default MainPage
