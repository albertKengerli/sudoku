
module.exports = function solveSudoku(matrix) {

  Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
  };

  let allValues = Array(9).fill([]);
  allValues.forEach((e, i) => {
    allValues[i] = i+1;
  })


  //меняем нули на все варианты
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix.length; x++){
      if (matrix[y][x] === 0){
        matrix[y][x] = Array();
        matrix[y][x] = Array(9).fill(null);
        matrix[y][x].forEach((e, i) => {
          matrix[y][x][i] = i+1;
        })
      }
    }
  }

  //отсеиваем горизонталь
  function horizontalCheck(matrix){
    for (let y = 0; y < 9; y++){
      for (let x = 0; x < 9; x++){
        if (typeof(matrix[y][x]) === "object"){
          for (let z = 0; z < 9; z++){
            if (typeof(matrix[y][z]) != "object"){
              matrix[y][x].remove(matrix[y][z]);
            }
          }
        }
        if (matrix[y][x].length === 1) matrix[y][x] = matrix[y][x][0];
      }
    }
    return matrix;
  }

  //отсеиваем вертикаль
  function verticalCheck(matrix){
    for (let y = 0; y < 9; y++){
      for (let x = 0; x < 9; x++){
        if (typeof(matrix[y][x]) === "object"){
          for (let z = 0; z < 9; z++){
            if (typeof(matrix[z][x]) != "object"){
              matrix[y][x].remove(matrix[z][x]);
            }
          }
        }
        if (matrix[y][x].length === 1) matrix[y][x] = matrix[y][x][0];
      }
    }
    return matrix;
  }

  function squareCheck(matrix){
    for (let y = 0; y < 9; y++){
      for (let x = 0; x < 9; x++){
        if (typeof(matrix[y][x]) === "object"){
          let sqrY = Math.floor(y/3)*3;
          let sqrYMax = sqrY + 2;
          for (sqrY; sqrY <= sqrYMax; sqrY++){
            let sqrX = Math.floor(x/3)*3;
            let sqrXMax = sqrX + 2;
            for (sqrX; sqrX <= sqrXMax; sqrX++){
              if (typeof(matrix[sqrY][sqrX]) != "object"){
                matrix[y][x].remove(matrix[sqrY][sqrX]);
              }
            }
          }
          if (matrix[y][x].length === 1) matrix[y][x] = matrix[y][x][0];
        }
      }
    }
    return matrix;
  }



  return matrix;
}
