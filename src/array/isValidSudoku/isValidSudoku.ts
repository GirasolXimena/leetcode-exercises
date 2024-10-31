// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

export function isValidSudoku(board: string[][]): boolean {
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
