const path = require('path')
const fs = require('fs')

module.exports = function (content, map, meta) {
  const resourcePath = this.resourcePath 
  const callback = this.async()
  fs.realpath.native(resourcePath, function (err, realPath) {
    if (err) {
      callback(err)
    } else {
      if (realPath != resourcePath) {
        callback(new Error(`File paths don't match:\n * ${ resourcePath }\n * ${ realPath }`))
      } else {
        callback(null, content, map, meta)
      }
    }
  })
}

module.exports.raw = true
