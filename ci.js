const childprocess = require('child_process');
console.log("-----------------------------------------------------")
childprocess.exec('git log -1 process.argv.slice(2) --pretty="%cE"', function (err, stdout, stderr) {
  if (err != null) {
    console.log("error is : " , err);
  }else {
    let data = JSON.parse(stdout);
    console.log(data);
    console.log("this is line 1111")
  }
  if (stdout){
    console.log(stdout)
    console.log("this is line 333333")
  }
});
console.log("-----------------------------------------------------")
console.log(process.argv.slice(2))
