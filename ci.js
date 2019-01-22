const childprocess = require('child_process');
console.log("-----------------------------------------------------")
childprocess.exec('git log -1 --pretty="%cE"', function (err, stdout, stderr) {
  if (err != null) {
    console.log("error is : " , err);
  }
});
console.log("-----------------------------------------------------")
console.log(process.argv.slice(2))
