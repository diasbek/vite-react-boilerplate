import {Routing} from "pages"
// import {store} from "/src/services/api/store.js"
// import {Provider} from "react-redux"
import "assets/css/index.css"
import "leaflet/dist/leaflet.css"
import "locales/i18n"
import "swiper/css"
import React, {createContext, useEffect, useState} from "react"
import axios from "axios"

const base = "https://api.orientaluniversity.uz"
const url = "https://api.orientaluniversity.uz/api/v1/faculties/public"

const initial = [
	{
		"id": 4,
		"type": "bachelor",
		"title": "Tarix",
		"slug": "tarix",
		"code": 60111100,
		"description": "<p style=\"margin-left:0px;\">O‘zbekiston Respublikasi Prezidentining Vazirlar Mahkamasi huzuridagi ta’lim sifatini nazorat qilish davlat inspeksiyasi tomonidan Nodavlat ta’lim xizmatlarini ko‘rsatish sohasidagi faoliyatni amalga oshirish uchun 2021-yil 25-maydagi 0022-sonli Litsenziyasi asosdida “ORIENTAL UNIVERSITETI” tashkil etilib, bugungi kunda universitet tarkibida “Tarix” fakulteti faoliyat yuritmoqda.</p><p style=\"margin-left:0px;\">O‘zbekiston Respublikasi “Ta’lim to‘g‘risida”gi qonun, “Oliy ta’lim to‘g‘risida”gi Nizom, O‘zbekiston Respublikasi Prezidentining 2020-yil 16-apreldagi “Sharqshunoslik sohasida kadrlar tayyorlash tizimini tubdan takomillashtirish va ilmiy salohiyatni oshirish chora-tadbirlari to‘g‘risida”gi PQ-4680-sonli Qarori asosida Tarix fakulteti to‘g‘risidagi nizom tashkil etish tartibi va faoliyat yo‘nalishlarini belgilandi.</p><p style=\"margin-left:0px;\">Fakultet “Ijtimoiy - gumanitar fanlar” kafedrasini o‘z tarkibiga oladi hamda quyidagi mutaxassisliklar bo‘yicha darslar olib boriladi:</p><p style=\"margin-left:0px;\">&nbsp;</p><ul><li>60111100 – Tarix;</li><li>60220300 – Tarix (sharq mamlakatlari va mintaqalari bo‘yicha).</li></ul><p style=\"margin-left:0px;\">Tarix fakultetida jami 1277 nafar talaba mavjud. Xususan,</p><ul><li>60111100 – Tarix mutaxassisligi bo‘yicha jami 258 nafar talaba o‘qib kelmoqda. Shundan,</li><li>kunduzgi ta’lim shaklida – 24 nafar;</li><li>kechki ta’lim shaklida – 23 nafar;</li><li>sirtqi ta’lim shaklida – 211 nafar.</li><li>kunduzgi ta’lim shaklida – 107 nafar;</li><li>kechki ta’lim shaklida –49 nafar;</li><li>sirtqi ta’lim shaklida – 863 nafar.</li></ul><p style=\"margin-left:0px;\">Bugungu kunda Tarix fakultetida jami 36 nafar professor-o‘qituvchilar faoliyat yuritib, shundan 1 nafari professor, t.f.d akademik, 7 nafari t.f.d. professor, 8 nafari dotsent, 8 tarix fanlari nomzodi (PHD), 4 nafari katta o‘qituvchi, 10 nafari o‘qituvchi va stajer-o‘qituvchilarni tashkil qiladi.</p>",
		"short_description": "O‘zbekiston Respublikasi “Ta’lim to‘g‘risida”gi qonun, “Oliy ta’lim to‘g‘risida”gi Nizom, O‘zbekiston Respublikasi Prezidentining 2020-yil 16-apreldagi “Sharqshunoslik sohasida kadrlar tayyorlash tizimini tubdan takomill",
		"thumbnail": "/media/upload/faculties/u0s4ub7f.png",
		"contract": [
			{
				"id": 87,
				"type": "daytime",
				"price": "18 000 000"
			},
			{
				"id": 88,
				"type": "evening",
				"price": "16 000 000"
			},
			{
				"id": 89,
				"type": "external",
				"price": "13 000 000"
			}
		],
		"representative": [
			{
				"id": 40,
				"name": "Qayumov Jaxongir Raxim o‘g‘li",
				"job": {
					"id": 6,
					"job": "Dekanning o‘quv ishlari bo‘yicha o‘rinbosari",
					"department": 38
				},
				"time": "9:00–12:00",
				"picture": "/media/upload/representative/qayumov-jaxongir-raxim-ogli.png",
				"phone": "+99893-534-12-23",
				"email": "jahon.qayum@gmail.com",
				"telegram": "+99893-534-12-23"
			},
			{
				"id": 41,
				"name": "Xakimov Nodir Nurilloevich",
				"job": {
					"id": 6,
					"job": "Dekanning o‘quv ishlari bo‘yicha o‘rinbosari",
					"department": 38
				},
				"time": "9:00–12:00",
				"picture": "/media/upload/representative/placeholder.png",
				"phone": "+99890-203-11-70",
				"email": "xakimovnodir5@bk.ru",
				"telegram": "+99890-203-11-70"
			},
			{
				"id": 42,
				"name": "Sultanov Shohrux Eshberdievich",
				"job": {
					"id": 7,
					"job": "Dekanning ma’naviy-ma’rifiy va yoshlar ishlari bo‘yicha o‘rinbosari",
					"department": 38
				},
				"time": "9:00–12:00",
				"picture": "/media/upload/representative/placeholder_d59VE6k.png",
				"phone": "+99897-700-44-68",
				"email": "shoxruxsultanov84@gmail.com",
				"telegram": "+99897-700-44-68"
			},
			{
				"id": 39,
				"name": "Yusupova Xurshida Mamatkarimovna",
				"job": {
					"id": 5,
					"job": "Tarix va tarix (mamlakat mintaqa) fakulteti dekani",
					"department": 38
				},
				"time": "9:00–12:00",
				"picture": "/media/upload/representative/yusupova-xurshida-mamatkarimovna.png",
				"phone": "+99897-744-74-09",
				"email": "hmyusupova@gmail.com",
				"telegram": "+99897-744-74-09"
			}
		],
		"is_active": true
	}
]
export const StateContext = createContext(initial)

export default function App () {

	const [faculties, setFaculties] = useState(initial)

	const getData = async () => {
		const { data } = await axios.get(url)
		setFaculties(data.map(({ thumbnail, ...data }) => ({
			...data,
			thumbnail: base + thumbnail,
			// representative: representative.map({picture, ...representative})=>({picture: base + picture, ...representative})
		})))	}

	useEffect(() => {
		getData()
	}, [])

	return (
		// <Provider store={store} >
		<StateContext.Provider value={faculties}>
			<Routing />
		</StateContext.Provider>
		// </Provider>
	)
}


