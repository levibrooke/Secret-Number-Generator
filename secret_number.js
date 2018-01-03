'use strict';
module.exports = function() {

    var num = Math.random() * 100000;

    var secretNumber = function() {
      return num;
    };

    return secretNumber;

    // Shorter method utilizing anonymous function

    // var secretNumber = Math.random() * 100000;
    //
    // return function() {
    //   return secretNumber;
    // };

};
