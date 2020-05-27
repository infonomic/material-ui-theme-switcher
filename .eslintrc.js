module.exports = {
  // root: true,
  // env: {
  //   node: true,
  // },
  // parser: 'babel-eslint',
  // parserOptions: {
  //   ecmaVersion: 6,
  //   sourceType: 'module',
  //   ecmaFeatures: {
  //     jsx: true,
  //     modules: true,
  //     experimentalObjectRestSpread: true,
  //   },
  // },
  extends: [
    //'plugin:prettier/recommended', 
    'react-app',
    'airbnb'
  ],
  plugins: [
    // 'react', 
    // 'jsx-a11y', 
    // 'import', 
    // 'prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // indent: ['warn', 2, { ignoredNodes: ['TemplateLiteral'] }],
    // 'template-curly-spacing': 'off',
    // quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: ['warn', 'never'],
    // 'comma-style': ['warn', 'last'],
    // 'comma-spacing': ['warn', { before: false, after: true }],
    // 'object-curly-spacing': ['warn', 'always'],
    // 'array-bracket-spacing': ['warn', 'never'],
    // 'computed-property-spacing': ['warn', 'never'],
    // 'eol-last': ['warn', 'always'],
    // 'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1, maxBOF: 1 }],
    // 'no-trailing-spaces': ['warn'],
    // 'no-constant-condition': ['warn', { checkLoops: false }],
    // 'comma-dangle': [
    //   'warn',
    //   {
    //     arrays: 'always-multiline',
    //     objects: 'always-multiline',
    //     imports: 'always-multiline',
    //     exports: 'always-multiline',
    //     functions: 'never',
    //   },
    // ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     semi: false,
    //     printWidth: 100,
    //     singleQuote: true,
    //     bracketSpacing: true,
    //     trailingComma: 'all',
    //   },
    // ],
  },
}
