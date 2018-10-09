var matrix =
[ [0,1,2],
  [1,2,0],
  [2,0,1] ];

var numberArray = [0,1,2];

function colChecker(){
  var matchedCol = 0;
  for (j=0; j< 3; j++)
  {
    var storedArray = [];
    for (i=0; i< 3; i++) {
      storedArray.push(matrix[i][j]);
    }

    if(storedArray.sort().join('') === numberArray.join('')) {
      matchedCol++;
    }

  }

  if(matchedCol === 3){
    return true;
  } else {
    return false;
  }
}

function rowChecker(){
  var matchedRow = 0;
  for (i=0; i< 3; i++){
    if(matrix[i].sort().join('') === numberArray.join(''))
    {
      matchedRow++;
    }
  }

  if (matchedRow === 3) {
    return true;
  }
  else {
    return false;
  }
}
