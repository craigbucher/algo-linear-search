const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(target, arr) {
    for (let i = 0; i < arr.length; i++){	
        if (arr[i] === target){	
          return arr.indexOf(arr[i]);	
        }	
      }	
      return undefined;
};

exports.linearSearchGlobal = function(target, arr) {
  let result = [];	
  for (let i = 0; i < arr.length; i++){	
    if (arr[i] === target){	
      result.push(i);	
    }	
  }	
  return result;
}

// console.log(exports.linearSearch(7, arrayToSearchThrough))