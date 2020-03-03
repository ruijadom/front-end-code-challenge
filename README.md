# Front-end-code-challenge

This repository contains the project requested in the front-end code challenge at Vizzuality.

- [Front-end-code-challenge](#front-end-code-challenge)
  - [Scripts](#scripts)
    - [Instalation](#instalation)
    - [Run Project](#run-project)
    - [Build for Producion](#build-for-producion)
    - [Start Production for testing](#start-production-for-testing)
    - [Build for Producion](#build-for-producion-1)
  - [Features](#features)
    - [Webpack - Module Blunder](#webpack---module-blunder)
      - [Features](#features-1)
    - [Babel - JavaScript Compiler](#babel---javascript-compiler)
      - [Features](#features-2)
      - [Production optimizations](#production-optimizations)

---

## Scripts

### Instalation

```
npm install
```

### Run Project

```
npm start
```

### Build for Producion

```
npm run build
```

### Start Production for testing

```
npm run start:prod
```

### Build for Producion

```
npm run deploy
```

---

## Features

### Webpack - Module Blunder

https://webpack.js.org/

Webpack configuration is define in **webpack.config.js**

#### Features

- **devtool**: Enables source-map generation in development mode.
- **entry**: Main file of our application.
- **output.path**: Root directory to store output files.
- **output.filename**: Filename pattern to use for script files.
- **output.publicPath**: Path to the root directory where the files will be deployed on the web server.

  - because de publicPath is diferent in Development environment ('/') and Production environment ('https://ruijadom.github.io/front-end-code-challenge') this will be a dinamic value.

  To make it easier to change paths, I have a file with the values ​​that are used in the webpack configuration in **config/paths.js**

  ```
  const path = require('path');
  const packageJSON = require('../package.json');

  module.exports = {
    // Webpack
    entryPath: path.resolve(__dirname, '../', 'src/index.js'),
    outputPath: path.resolve(__dirname, '../', 'dist'),
    templatePath: path.resolve(__dirname, '../', 'src/index.html'),
    // publicPath
    publicDevPath: '/',
    publicProdPath: packageJSON.homepage
  };
  ```

### Babel - JavaScript Compiler

https://babeljs.io/

Babel configuration is define in **babel.config.js**

#### Features

- **@babel/preset-env**: Is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms. Takes any target environments you've specified and checks them against its mappings to compile a list of plugins and passes it to Babel.
- **@babel/preset-react**: Transforms JSX syntax into plain-vanilla JavaScript function calls.
- **@babel/plugin-transform-runtime**: Reduces code duplication by extracting Babel helpers into shared modules.
- **@babel/plugin-syntax-dynamic-import**: Enables dynamic import() syntax in browsers lacking native Promise support.
- **@babel/plugin-proposal-class-properties**: Enables support for the public instance field syntax proposal, for writing class-based React components.

#### Production optimizations

- **babel-plugin-transform-react-remove-prop-types** removes unnecessary prop-types from production code.
- **@babel/plugin-transform-react-inline-elements** evaluates React.createElement during compilation and inlines the result.
- **@babel/plugin-transform-react-constant-elements** extracts static React elements as constants.

---

author: Rui Domingues
