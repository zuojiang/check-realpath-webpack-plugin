function CheckRealPathPlugin () {
}

CheckRealPathPlugin.prototype.apply = function (compiler) {
  compiler.options.module.rules.push({
    test: /\.\w/,
    loader: require.resolve('./loader'),
    exclude: /node_modules/,
  })
}

module.exports = CheckRealPathPlugin
