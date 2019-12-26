var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }
    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(
  filePathOne , 
  filePathTwo , 
  callback) {

  getWordCount(filePathOne, function(err, count){

    if(err){
      return callback(err, null);
    }
    getWordCount(filePathTwo, function(err, count2){
      if(err){
        return callback(err, null);
      }
      callback(err, count + count2);
    });

  });

};

//function call
getTotalWordCount(path.join(__dirname, 'files/fileOne.txt'),path.join(__dirname, 'files/fileTwo.txt'), (err, total) => {
  console.log(total);
});

module.exports = getTotalWordCount;
