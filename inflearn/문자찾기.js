function solution(s, t) {
  let answer = s.split("").filter((item) => item === t).length;
  return answer;
}

// 방법 2
// function solution(s, t) {
//   let answer = s.split(t).length;
//   return answer - 1;
// }

// 방법 3
// function solution(s, t) {
//     let answer = 0;
//     for(let x of s) {
//         if(x===t) answer ++;
//     }
//     return answer;
//   }

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
