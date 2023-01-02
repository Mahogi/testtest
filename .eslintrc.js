module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'airbnb-base',
        'airbnb-typescript/base'
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "tsconfigRootDir": "./"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
