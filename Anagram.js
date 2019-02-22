var Anangram = function(string1, string2) {

  string1 = string1.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  string2 = string2.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  string1 = string1.split("").sort().join("");
  string2 = string2.split("").sort().join("");

  if (string1 === string2 ) {
    return "The given strings are Anangrams."
  } else {
    return "The given strings are not Anangrams."
  }

}

debug(Anangram("Race cars", "cars Race"));