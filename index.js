module.exports = {
  "extends": [
    "tslint:recommended",
    "tslint-config-prettier"
  ],
  "rulesDirectory": [
    "node_modules/codelyzer"
  ],
  "rules": {
    "callable-types": true,
    "class-name": true,
    "curly": true,
    "forin": true,
    "import-blacklist": [true, "rxjs"],
    "interface-over-type-literal": true,
    "label-position": true,
    "member-access": false,
    "member-ordering": [
      true,
      "static-before-instance",
      "variables-before-functions"
    ],
    "no-arg": true,
    "no-bitwise": true,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-variable": true,
    "no-empty": false,
    "no-empty-interface": true,
    "no-eval": true,
    "no-inferrable-types": [true, "ignore-params"],
    "no-shadowed-variable": true,
    "no-string-literal": false,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-unused-expression": true,
    "no-use-before-declare": false,
    "no-var-keyword": true,
    "object-literal-sort-keys": false,
    "prefer-const": true,
    "radix": true,
    "triple-equals": [
      true,
      "allow-null-check"
    ],
    "typeof-compare": true,
    "unified-signatures": true,
    "variable-name": false,
    "ordered-imports": false,
    "interface-name": [true, "never-prefix"],
    "directive-selector": [true, "attribute", "ssi", "camelCase"],
    "component-selector": [true, "element", "ssi", "kebab-case"],
    "use-input-property-decorator": true,
    "use-output-property-decorator": true,
    "use-host-property-decorator": true,
    "no-attribute-parameter-decorator": true,
    "no-output-rename": true,
    "no-forward-ref": true,
    "use-life-cycle-interface": true,
    "use-pipe-transform-interface": true,
    "pipe-naming": [true, "camelCase", "ssi"],
    "component-class-suffix": true,
    "directive-class-suffix": true,
    "templates-use-public": true,
    "no-access-missing-member": true,
    "invoke-injectable": true,
    "template-to-ng-template": true
  }
};