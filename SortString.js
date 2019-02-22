var SortString = function (str){
  var arr = str.split('');
  var tmp;
  for( i = 0; i < arr.length; i++){
    for( j = i + 1; j < arr.length; j++){
      /* if ASCII code greater then swap the elements position*/
      if(arr[i] > arr[j]){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr.join('');
}

debug(SortString("hello"));