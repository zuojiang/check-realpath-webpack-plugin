# check-realpath-webpack-plugin

This is a webpack plugin that check native real path in Windows and MacOS.

## Installation

```sh
npm i check-realpath-webpack-plugin -D
```

## Usage
**webpack.config.js**
```js
const CheckRealPathPlugin = require('check-realpath-webpack-plugin')
// ...

module.exports = {
  // ...
  plugins: [
    new CheckRealPathPlugin(),
    // ...
  ],
}
```

## Notice

1. Used with **html-webpack-plugin**

    ```js
    // ...
    module.exports = {
      // ...
      module: {
        rules: [
          // ...
          {
            test: /\.html$/i,
            loader: require.resolve('html-webpack-plugin/lib/loader'),
            options: {
              force: true,
            }
          }
        ]
      }
    }
    ```


## License
MIT
