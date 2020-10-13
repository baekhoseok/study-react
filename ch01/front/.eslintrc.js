module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "react",
        "react-hooks"
    ],
    "rules": {
        "indent":[
            "error",
            4
        ],
        "no-unused-vars": 1,
        "no-use-before-define": 1,
        "no-redeclare": 1,
        "no-console":0,
    }
};
