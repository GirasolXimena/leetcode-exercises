// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

type SudokuBoard = Array<string[]>
type HashType = "row" | "column" | "grid"
type HashGetterFnProps = {
    row: number,
    column: number,
}
type HashGetterFn = ({ row, column }: HashGetterFnProps) => number

/**
 * first intuition is to make a hash map
 * 
 * you need to index each row, column, and box, 9 of each
 * checking each cell has complexity O(n)
 * 
 * we already know each array is gonna have 9 numbers in it
 * so creating each row, column, and box array of 9 will be O(1) 
 * but done 3 times
 * O(rows[1]) * O(columns[1]) * O(grids[1]) = O(1)
 * 
 * O(n + 1) = O(n) 
 */

// this will hold the data structure for the sudoku so we don't have to traverse every row, column, and grid
// n amount of times



const hashTypes: Array<HashType> = ['row', 'column', 'grid']

export function isValidSudoku(board: SudokuBoard): boolean {
    // 9 rows
    // 9 columns
    // 9 grids

    const sudokuMap = new Map()
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        const rowStr = `row-${i}`

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

function createSudokuMap() {
    const sudokuMap = new Map<string, Array<number>>()
    // create a hash for each row, column, and grid
    hashTypes.forEach((hash) =>
        new Array(9).fill(0).forEach((val, i) =>
            sudokuMap.set(`${hash}-${i}`, new Array(9).fill(val))
        ))

    return sudokuMap
}

const n = 9

export function isValidSudokuSet(board: SudokuBoard): boolean {
    let isValid = true;
    let checkCounter = 0
    const sudokuMap = createSudokuMap()
    const rows = new Array(9).fill(new Array(9).fill(0))

    for (let row = 0; row < board.length; row++) {
        if (!isValid) break;
        for (let col = 0; col < board.length; col++) {
            if (!isValid) break;
            const cell = board[row][col]
            const hashStrings = {
                row: row,
                column: col,
                grid: Math.floor(row / 3) * 3 + Math.floor(col / 3)
            }

            for (let [hash, hashNum] of Object.entries(hashStrings)) {
                const key = `${hash}-${hashNum}`
                checkCounter++

                if (cell === '.') continue


                const set = sudokuMap.get(key)
                if (!set) throw new Error(`Set  at :${key} was not found`)
                const num = Number(cell)

                if (isNaN(num)) throw new Error(`problem turning cell ${cell} into number ${num}`)

                // check if we've seen any ones at index 0
                // any twos at index 1
                // any threes at index 2
                // etc
                const i = num - 1

                // 
                if (set[i] === 0) {
                    // we have not seeen this number,
                    // increment counter
                    set[i] = 1
                } else {
                    // if we have seen it then
                    // sudoku is invalid we can stop looking
                    isValid = false
                    break;
                }
            }
        }

    }

    return isValid
}

// create an array of 9 zeroes [0,0,0,0,0,0,0,0,0] `nums` to represent the numbers 1 - 9
// create 9 such arrays to represent one from each column, row, or grid
// when we see the a number, ie. `x` we will go to nums[x - 1] and increment it by 1
// since we know exactly where to look each time this is a constant time operation
const createLookupArray = (): number[][] => new Array(n).fill(0).map(() => new Array(n).fill(0)) 


/**
 * Time complexity: O(n^2)
 * 
 * Given a board with length n
 * We will have to traverse n arrays n times
 * creating new arrays for the lookup tables are linear time
 * each lookup table operation also will be linear time
 * since we know ahead of time where to look
 * 
 * Space complexity O(n)
 * 
 * we have to create an array of N to hold one for each
 * row, column, and grid
 * O(n)
 * We create 3 arrays of fixed length of 10
 * linear time O(1)
 * O(n) * O(1 * 3) = O(n)
 * 
 * 
 * do not need to store any more data
 * const declarations are only for ease of reading
 */
export function isValidSudokuFixedArray(board: SudokuBoard): boolean {
    let isValid = true

    const rows = createLookupArray()
    const columns = createLookupArray()
    const grids = createLookupArray()

    for (let y = 0; isValid && y < board.length; y++) {
        for (let x = 0; isValid && x < board.length; x++) {
            const cell = board[y][x]
            if (cell === ".") continue
            const gridNum = Math.floor(y / 3) * 3 + Math.floor(x / 3)

            const column = columns[x]
            const row = rows[y]
            const grid = grids[gridNum]
            const num = Number(cell) - 1

            for (let array of [row, column, grid]) {
                if (array[num] === 0) {
                    // if we haven't seen this num before
                    // set the array[num] to 1
                    array[num] = 1
                } else {
                    // if array[num] was 1 already
                    //  it means sudoku is invalid
                    // no doubles!
                    isValid = false
                    // exit loop
                    // once a sudoku is invalid there is
                    // no way to recover
                    break
                }
            }
        }
    }

    return isValid
}


