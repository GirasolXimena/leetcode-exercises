// function countStudents(students: number[], sandwiches: number[]): number {
//     while (
//         sandwiches.length && students.includes(sandwiches[0])
//     ) {
//         if (sandwiches[0] === students[0]) {
//             sandwiches.shift()
//             students.shift()
//         } else {
//             // student goes back to the line
//             students.push(students.shift() ?? 0)
//         }
//     }
//     return students.length
// };

// function countStudents(students: number[], sandwiches: number[]): number {
//     const labels = {
//         circle: 0,
//         square: 1
//     }
//     // 
//     // const studentPrefs = [0,0]
//     const studentPrefs = {
//         [labels.circle]: 0,
//         [labels.square]: 0
//     }

//     for (let i = 0; i < students.length; i++) {
//         // studentPrefs[students[i]]++
//         if(students[i] === 0){
//             studentPrefs[labels.circle]++
//         } else {
//             studentPrefs[labels.square]++
//         }
//     }
//     // console.log({ studentPrefs })
//     for (let i = 0; i < sandwiches.length; i++) {
//         const sandwich = sandwiches[i]
//         if (sandwich === labels.circle && studentPrefs[labels.circle] === 0) {
//             return studentPrefs[labels.square]
//         }
//         if (sandwich === labels.square && studentPrefs[labels.square] === 0) {
//             return studentPrefs[labels.circle]
//         }
//         if(sandwich === labels.circle) {
//             studentPrefs[labels.circle]--
//         }
//         if(sandwich === labels.square) {
//             studentPrefs[labels.square]--
//         }
//     }
//     return 0
// };

// function countStudents(students: number[], sandwiches: number[]): number {
//     // 
//     // const studentPrefs = [0,0]
//     const studentPrefs = {
//         0: 0,
//         1: 0
//     }

//     for (let i = 0; i < students.length; i++) {
//         // studentPrefs[students[i]]++
//         if(students[i] === 0){
//             studentPrefs[0]++
//         } else {
//             studentPrefs[1]++
//         }
//     }
//     // console.log({ studentPrefs })
//     for (let i = 0; i < sandwiches.length; i++) {
//         const sandwich = sandwiches[i]
//         if (sandwich === 0 && studentPrefs[0] === 0) {
//             return studentPrefs[1]
//         }
//         if (sandwich === 1 && studentPrefs[1] === 0) {
//             return studentPrefs[0]
//         }
//         if(sandwich === 0) {
//             studentPrefs[0]--
//         }
//         if(sandwich === 1) {
//             studentPrefs[1]--
//         }
//     }
//     return 0
// };

export function countStudents(students: number[], sandwiches: number[]): number {
    const studentPreferences: [number, number] = [0, 0]

    for (let i = 0; i < students.length; i++) {
        studentPreferences[students[i]]++
    }

    // always able to flip 0 and 1 by doing
    // 1 - x
    // because 1 - 0 = 1
    // and     1 - 1 = 0
    for (let i = 0; i < sandwiches.length; i++) {
        if (!studentPreferences[sandwiches[i]]) {
            return studentPreferences[1 - sandwiches[i]];
        }
        studentPreferences[sandwiches[i]]--;
    }

    return 0
};