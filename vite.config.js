import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
	mode: "development",
	clearScreen: false,
	plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],
	server: {
		host: "0.0.0.0",
		port: 3000,
	},
	preview: {
		host: "0.0.0.0",
		port: 8080,
	}
})
