var ReverseString = function(str) {
  var reversed = "";
  reversed = str.split("").reverse().join("");
  return reversed;
}

debug(ReverseString('hello'));

