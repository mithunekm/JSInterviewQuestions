var ReverseInteger = function(int) {
  var str = Math.abs(int).toString();
  str = str.split("").reverse().join("");
  if (Math.sign(int) == -1) {
    str = '-' + str;
  }
  return str
}

debug(ReverseInteger(1002));
debug(ReverseInteger(-3002));