function solution(str) {
  return str.replace(/\D/g, "");
}

// 다른 풀이

function solution2(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
