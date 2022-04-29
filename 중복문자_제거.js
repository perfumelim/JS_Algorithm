//실패한 방법

// function solution(s) {
//   let answer = s.split("");
//   for (let i = 0; i <= answer.length; i++) {
//     for (let j = 1; j <= answer.length; j++) {
//       if (answer[i] === answer[j]) {
//         answer.splice(answer[j]);
//       }
//     }
//   }
//   return answer.join("");
//   console.log(answer.join());
// }

function solution2(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution("ksekkset"));
