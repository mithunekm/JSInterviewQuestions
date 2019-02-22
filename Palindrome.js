var Palindrome = function (str) {
  var reversed = "";
  reversed = str.split("").reverse().join("");
  if (str === reversed) {
    return "Given string is palindrome";
  } else {
    return "Given string is not palindrome";
  }
}

debug(Palindrome("malayalam"));
debug(Palindrome("racecar"));
debug(Palindrome("racecar1"));