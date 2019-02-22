var StringCompression = function(string) {
 var count = 0;
 var compressedString = "";
 for (var i = 0; i < string.length; i++) {
    if (string[i] != string[i+1]) {
      if (count != 0) {
        compressedString += string[i] + count;
      }
      else {
        compressedString += string[i];
      }
      count = 0;
    } else {
      count++;
    }
 }
 return compressedString;
};


debug(StringCompression("aaaaaaaaabbbbbbbbcddddddddnnnnnnnnnnnfffffd"));