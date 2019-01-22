const childprocess = require('child_process');
let commands = 'git log -1 ' + process.argv.slice(2) + ' --pretty="%cE"'
childprocess.exec(commands, function (err, stdout, stderr) {
  String.prototype.endWith = function (endStr) {
    let d = this.length - endStr.length;
    return (d >= 0 && this.lastIndexOf(endStr) == d);
  }
  if (err != null) {
    console.log('error is : ' , err);
  }
  if (stdout.match('intel')) {
    if (stdout.replace(/[\r\n]/g, '').endWith('@intel.com')) {
      console.log("555555555555555555555555555555555555555555555555555")
      process.exit(1);
    }
  }
});
