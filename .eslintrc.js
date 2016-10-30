module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended"
    // "eslint-config-airbnb"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true
    }
  },
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [],
  "rules": {
    // Best Practices
    "array-callback-return": ["error"],
    "no-useless-escape": ["error"],

    // Variables

    // Node.js and CommonJS

    // Stylistic Issues
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-array-constructor": ["error"],
    "no-new-object": ["error"],
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],

    // ECMAScript 6
    "prefer-const": ["error"],
    "no-var": ["error"],
    "object-shorthand": ["error"],
    "prefer-template": ["error"],
    "template-curly-spacing": ["error", "never"]
  }
};
