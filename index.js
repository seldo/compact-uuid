var uuid = require('uuid')

exports.generate = function() {
  var longUuid = uuid.v1();
  return exports.convert(longUuid)
}

exports.convert = function(longUuid) {
  return parseInt('0x'+longUuid.replace('-',''))
}