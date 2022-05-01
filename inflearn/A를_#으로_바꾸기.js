function solution(s) {
  let answer = s.replaceAll("A", "#");
  return answer;
}
// 이렇게 for문으로 풀 수도 있음.
// function solution(s) {
//     let answer = "";
//     for (let x of s) {
//       if (x === "A") answer += "#";
//       else answer += x;
//     }
//     return answer;
//   }

let str = "BANANA";
console.log(solution(str));
