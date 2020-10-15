{
    "parser": "babel-eslint",
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
        "react-hooks",
        "prettier"
    ],
    "rules": {
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "prettier/prettier": "error"
    }
};
