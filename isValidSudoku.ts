// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true


// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1,
// except with the 5 in the top left corner being modified to 8.
// Since there are two 8's in the top left 3x3 sub-box, it is invalid.

const input = [["8", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


function isValidSudoku(board: string[][]): boolean {
    // 9 rows
    // 9 columns
    // 9 grids

    const sudokuMap = new Map()
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        // if(!row || !row.length) return false;
        const rowStr = `row-${i}`
        // let 
        sudokuMap.set(rowStr, new Map())
        const rowMap = sudokuMap.get(rowStr)

        for (let j = 0; j < row.length; j++) {
            const colStr = `col-${j}`

            let colMap = sudokuMap.get(colStr)

            if (!colMap) {
                sudokuMap.set(colStr, new Map())
                colMap = sudokuMap.get(colStr)
            }


            let gridStr = `grid-${Math.floor(i / 3)}-${Math.floor(j / 3)}`
            const cell = row[j]

            if (cell === '.') {
                continue
            }

            // if (rowMap.has(cell)) {
            if (rowMap.has(cell)) {
                return false
            } else {
                rowMap.set(cell, `cell-${j}`)
            }

            if (colMap.has(cell)) {
                return false
            } else {
                colMap.set(cell, `cell-${i}`,)
            }

            let gridMap = sudokuMap.get(gridStr)

            if (!gridMap) {
                sudokuMap.set(gridStr, new Map())
                gridMap = sudokuMap.get(gridStr)
            }

            if (gridMap.has(cell)) {
                return false;
            } else {
                gridMap.set(cell, `cell-${i % 3}-${j % 3}`)
            }
        }
    }

    return true
};


console.log(isValidSudoku(input));