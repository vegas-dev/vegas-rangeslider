import { defineConfig } from "vite";
import packageJson from "./package.json";
import autoprefixer from "autoprefixer";

const getPackageName = () => {
	return packageJson.name;
};

const getPackageNameCamelCase = () => {
	try {
		return getPackageName().replace(/-./g, char => char[1].toUpperCase());
	} catch (err) {
		throw new Error("Name property in package.json is missing.");
	}
};

const fileName = {
	es: `${getPackageName()}.js`
};

const formats = Object.keys(fileName);
export default defineConfig({
	base: "./",
	build: {
		outDir: "./build",
		lib: {
			entry: "./index.js",
			name: getPackageNameCamelCase(),
			formats,
			fileName: format => fileName[format],
		},
	},
	css: {
		devSourcemap: true,
		postcss: {
			plugins: [autoprefixer],
		},
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
			}
		}
	},
});