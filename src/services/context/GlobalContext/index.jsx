// import React, { createContext, useState, useEffect } from "react"
// import {faculties as initialFaculties} from "../../../shared/const/index.js"
// import axios from "axios"
// const base = "https://api.orientaluniversity.uz"
// const url = "https://api.orientaluniversity.uz/api/v1/faculties/public"
// const StateContext = (props) => {
//
// 	const StateContext = createContext()
//
// 	const [faculties, setFaculties] = useState(initialFaculties)
//
//
// 	const getData = async () => {
// 		const { data } = await axios.get(url)
// 		setFaculties(data.map(({ thumbnail, ...data }) => ({
// 			...data,
// 			thumbnail: base + thumbnail,
// 			// picture: base + picture
// 		})))	}
//
//
// 	useEffect(() => {
// 		getData()
// 	}, [])
//
// 	return (
// 		<StateContext.Provider value={faculties}>
// 			{props.children}
// 		</StateContext.Provider>
// 	)
// }
//
// export default StateContext
