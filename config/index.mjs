import extendsConfig from "./extends/index.mjs";
import plugins from "./plugins/index.mjs";
import rules from "./rules/index.mjs";

export default {
	extends: [
		...extendsConfig.extends
	],
	plugins: [
		...plugins.plugins
	],
	rules: {
		...rules.rules
	}
}