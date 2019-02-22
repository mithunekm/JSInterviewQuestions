/*
Input: 1
Output #

Input 2:
Output: #
        ##

Input 3
Output: #
        ##
        ###
*/

var Steps = function (count) {
    for (i=1; i<count; i++) {
      counter = 0;
      str = "";
      while (counter < i) {
        str = str + "#";
        counter++;
      }
      debug(str);
    }
}

Steps(10);