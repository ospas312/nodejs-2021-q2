module.exports = {
  "root": true,
  "env": {
    "es2020": true,
    "jasmine": true,
    "jest": true,
    "node": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2021,
    "ecmaFeatures": {
      "impliedStrict": true
    },
    "project": "./tsconfig.json"
  },
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "settings": {
    "noInlineConfig": true,
    "node": {
      "tryExtensions": [".js", ".json", ".ts", ".d.ts"]
    }
  },
  "extends": [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "eslint:recommended",
    "plugin:node/recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "prettier"
  ],
  "rules": {
    "dot-notation": "off",
    "no-param-reassign": "off",
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "import/extensions": "off",
    "linebreak-style": "off",
    "node/no-unsupported-features/es-syntax": "off",
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "node/no-missing-import": 0,
    "import/no-cycle": "off",
    "prefer-destructuring": "off",
    "consistent-return": "off",
    "class-methods-use-this": "off",
    "import/no-unresolved": "off"
  }
}
/*module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};*/
