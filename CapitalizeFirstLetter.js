var CapitalizeFirstLetter  = function (string) {
    var capitalList = [];
    var list = string.split(" ");
    list.forEach(function(word) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
       capitalList.push(word)
    });
     return capitalList.join(" ");
}

debug(CapitalizeFirstLetter("race car"));