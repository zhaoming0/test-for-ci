console.log("-----------------------------------------------------")
console.log($TRAVIS_COMMIT)
console.log("-----------------------------------------------------")
git log -1 $TRAVIS_COMMIT --pretty="%cE"
