module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    rules:{
        "linebreak-style": 0,
        "indent": ["error", 2],
        "func-names": ["error", "never"],
        "object-curly-newline": ["error", {
            "ImportDeclaration": "never",
        }],
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};
