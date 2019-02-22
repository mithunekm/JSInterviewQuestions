var MostRepeatedCharacter = function (string) {
  var list = {};
  var maxCount = 0;
  var mostRepeatedCharacter = "";

  for (var i = 0; i < string.length; i++) {
    if (!list[string[i]]) {
      list[string[i]] = 1;
    } else {
      list[string[i]]++;
    }
  }

  Object.keys(list).forEach(function(key) {
    if (list[key] > maxCount) {
      maxCount = list[key];
      mostRepeatedCharacter = key;
    }
  });

  return "Most Repeated Character: " + mostRepeatedCharacter + " and is repeated " + maxCount + " times.";
}

debug(MostRepeatedCharacter("sssssssbbbccccssssssss"));