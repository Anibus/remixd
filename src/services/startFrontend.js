module.exports = function (path, port) {
  function kill () {
    console.log('\x1b[31m%s\x1b[0m', '[ERR] Front end capability is not available anymore')
  }
  return kill
}
