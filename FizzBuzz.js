/*
//   Input: list of numbers

//   Output: print numbers submitted except:
//   if divisable by 3 - write fizz
//   if divisable by 5 - write buzz
//   if divisable by 15 - write fizz buzz
*/

var FizzBuzz = function (numbers) {
  var str = "";
  for(var i = 1; i <= numbers; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      str = str + "FIZZBUZZ";
    } else if (i % 3 == 0) {
      str = str + "FIZZ";
    } else if (i % 5 == 0) {
      str = str + "BUZZ";
    } else {
      str = str + i;
    }
  }
  return str;
}

debug(FizzBuzz(10));