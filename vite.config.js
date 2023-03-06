import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import eslint from "vite-plugin-eslint"


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(),svgr(),eslint()],
	server: {
		port: 3000,
	},
	build: {
		rollupOptions: {
			output:{
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return id.toString().split("node_modules/")[1].split("/")[0].toString()
					}
				}
			}
		}
	},
	resolve: {
		alias: [
			{ find: "assets", replacement: "/src/assets" },
			{ find: "modules", replacement: "/src/modules" },
			{ find: "pages", replacement: "/src/pages" },
			{ find: "shared", replacement: "/src/shared" },
			{ find: "locales", replacement: "/src/locales" },
			{ find: "app", replacement: "/src/app" },
		],
	},
})
