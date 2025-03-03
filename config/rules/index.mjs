const rules = {
	rules: {
		'at-rule-no-unknown': [true, {
			ignoreAtRules: [
				'include',
				'forward',
				'mixin',
				'function',
				'return',
				'use',
			],
		}],
		"declaration-block-no-duplicate-properties": true,
		'declaration-property-value-no-unknown': [true, {
			ignoreProperties: {
				'/.+/': [
					/^(.*base\(\d*(\.\d+)?\).*)|(spacing\([a-zA-Z]+\))|(colors\([a-zA-Z]+\))|(zIndex\([a-zA-Z]+\))$/
				],
			}
		}],
		"font-weight-notation": "numeric",
		"no-duplicate-selectors": true,
		"no-unknown-animations": true,
		"order/properties-alphabetical-order": true,
		"prettier/prettier": [true, {
			"singleQuote": true,
			"tabWidth": 2,
		}],
		"property-no-unknown": [
			true,
			{
				"ignoreSelectors": [
					"/export/"
				]
			}
		],
		"unit-disallowed-list": [
			"px"
		],
		"scss/dollar-variable-pattern": null,
		"scss/operator-no-unspaced": null,
		"selector-pseudo-class-no-unknown": [
			true,
			{
				"ignorePseudoClasses": [
					"export"
				]
			}
		],
	}
};

export default rules;