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

    // Variables

    // Node.js and CommonJS

    // Stylistic Issues
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"]

    // ECMAScript 6
  }
};
