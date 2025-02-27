import plugins from "./config/plugins/index.mjs";
import rules from "./config/rules/index.mjs";
import extendsConfig from "./config/extends/index.mjs";

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