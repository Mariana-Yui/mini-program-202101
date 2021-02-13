module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    parser: 'babel-eslint',
    'extends': [
      'alloy'
    ],
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'globals': {
      'module': true,
      'App': true,
      'Page': true,
      'Component': true,
      'Behavior': true,
      'wx': true,
    },
    'rules': {
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-var': 'error',
      'no-unused-vars': 0,
      'no-empty': 0,
      'object-shorthand': ['error', 'always', { 'avoidQuotes': false }]
    }
};
