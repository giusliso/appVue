module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'linebreak-style': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "comma-dangle": [2, "never"],
    'no-unused-vars': ["off", { "args": "none" }],
    'no-param-reassign': "off",
    "vue/return-in-computed-property": ["off", {
      "treatUndefinedAsUnspecified": true
    }]
  },
};
