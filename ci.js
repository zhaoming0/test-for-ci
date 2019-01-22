console.log($TRAVIS_COMMIT)
git log -1 $TRAVIS_COMMIT --pretty="%cE"
