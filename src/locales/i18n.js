import i18n from "i18next"
import {initReactI18next} from "react-i18next"

import EN from "locales/en"
import RU from "locales/ru"
import UZ from "locales/uz"

const resources = {
	en: EN,
	ru: RU,
	uz: UZ,
}

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: localStorage.getItem("locale") ?? "ru",
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
