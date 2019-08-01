const os = require('os')
const fs = require('fs')
const path = require('path')

module.exports = function (content, map, meta) {
  const resourcePath = upperCaseDriverLetter(this.resourcePath)
  const callback = this.async()
  fs.realpath.native(resourcePath, (err, realPath) => {
    if (err) {
      callback(err)
    } else {
      realPath = upperCaseDriverLetter(realPath)
      if (realPath != resourcePath) {
        callback(new Error(`File paths don't match:\n * ${ resourcePath }\n * ${ realPath }`))
      } else {
        callback(null, content, map, meta)
      }
    }
  })
}

module.exports.raw = true

function upperCaseDriverLetter (realPath) {
  if (os.platform() == 'win32') {
    return realPath.replace(/^[a-z]:/, (match) => {
      return match.toUpperCase()
    })
  }
  return realPath
}
