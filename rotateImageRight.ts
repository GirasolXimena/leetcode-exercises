// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

type MatrixRow = Array<number>
type MatrixGrid = Array<MatrixRow>
type SwapFnProps = {
  matrix: MatrixGrid,
  x1: number,
  x2: number,
  y1: number,
  y2: number
}

type MapMatrixCbProps = {
  matrix: MatrixGrid,
  i: number,
  j: number
}

// swap 
const swap = function ({ matrix, x1, y1, x2, y2 }: SwapFnProps) {
  // save first cell value
  const tmp = matrix[y1][x1];
  // assign second cell value to first cell
  matrix[y1][x1] = matrix[y2][x2];
  // assign first cell saved value to second cell
  matrix[y2][x2] = tmp;
};

const mapMatrix = (callBack: ({ matrix, i, j }: MapMatrixCbProps) => void) =>
  (matrix: MatrixGrid) => matrix.forEach((row, i) =>
    row.forEach((cell, j) => callBack({ matrix, i, j })));

const reflectDiagonal = mapMatrix(({ matrix, i, j }) => {
  // i is vertical position
  // j is horizontal position
  // if vertical pos > horizontal pos
  // we are in bottom left of grid
  if (i >= j) return;
  swap({
    matrix,
    x1: j,
    y1: i,
    x2: i,
    y2: j
  })
})

const reflectHorizontal = mapMatrix(({ matrix, i, j }) => {
  const sideLength = matrix.length
  const pos = sideLength - 1;
  // horizontal pos should be greater than halfway
  // since we don't want to swap to swap back
  if (j < (sideLength / 2)) return;

  // for horizontal reflection the y coords will always be equal
  swap({
    matrix,
    x1: j,
    y1: i,
    x2: pos - j,
    y2: i
  });
})

/**
 Do not return anything, modify matrix in-place instead.
 */

function rotate(matrix: number[][]): void {
  reflectDiagonal(matrix);
  reflectHorizontal(matrix);
};