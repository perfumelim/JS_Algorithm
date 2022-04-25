function solution(s) {
  let answer = s.match(/[A-Z]/g).length;
  return answer;
}

// 풀이 2
// function solution(s) {
//   let answer = 0;
//   for (let x of s) {
//     if (x === x.toUpperCase) answer++;
//   }
//   return answer;
// }

// 풀이 3
// function solution(s) {
//     let answer = 0;
//     for (let x of s) {
//       let num = x.charCodeAt();
//       if(num>= 65 && num<=90 ) answer++;
//     }
//     return answer;
//   }

let str = "KoreaTimeGood";
console.log(solution(str));
