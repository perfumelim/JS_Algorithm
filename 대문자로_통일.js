function solution(s) {
  let answer = s.toUpperCase();

  return answer;
}

// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     if (x === x.toLowerCase()) answer += x.toUpperCase();
//     else answer += x;
//   }

//   return answer;
// }

// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     let num = x.charCodeAt();
//     if (nim >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
//     else answer += x;
//   }

//   return answer;
// }

let str = "ItisTimeToStudy";
console.log(solution(str));
