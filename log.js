const log = {
  info:function (info) {
    console.log('info'+info);
  },
  warning:function (warning) {
    console.log('warning'+warning);
  },
  error:function (ereor) {
    console.log('error'+ereor);
  }
}
module.exports = log;