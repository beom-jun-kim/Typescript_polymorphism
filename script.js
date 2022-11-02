// generic:
// call signature를 작성할때 
// 여기 들어올 확실한 타입을 모를때 generic을 사용한다

// type SuperPrint = {
//     (arr: number[]): void
//     (arr: boolean[]): void
//     (arr: string[]): void
// }

// const superPrint: SuperPrint = (arr) => {
//     arr.forEach(i => console.log(i))
// }

// superPrint([1, 2, 3, 4])
// superPrint([true, false, true])
// superPrint(["a","b","c"])

// => 좋지 않은 방식

// type SuperPrint = {
//     <T>(arr: T[]): T
// }

// const superPrint: SuperPrint = (arr) => arr[0]

// const a = superPrint([1, 2, 3, 4])
// const b = superPrint([true, false, true])
// const c = superPrint(["a", "b", "c"])
// const d = superPrint([1, 2, "a", "b", true, false])