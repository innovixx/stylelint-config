'use strict';

module.exports = {
  "plugins": [
    "stylelint-scss",
    "stylelint-order"
  ],
  "rules": {
    "declaration-block-no-duplicate-properties": true,
    "font-weight-notation": "numeric",
    "no-duplicate-selectors": true,
    "no-unknown-animations": true,
    "order/properties-alphabetical-order": true,
    "property-no-unknown": [
      true,
      {
        "ignoreSelectors": [
          "/export/"
        ]
      }
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