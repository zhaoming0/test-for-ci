const process = require('child_process');
console.log("-----------------------------------------------------")
console.log($TRAVIS_COMMIT)
console.log("-----------------------------------------------------")
process.exec('git log -1 $TRAVIS_COMMIT --pretty="%cE"', function (err, stdout, stderr) {
  if (err != null) {
    console.log("error is : " , err);
  }
});
