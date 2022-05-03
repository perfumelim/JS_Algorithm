function solution(s) {
  return s.toLowerCase() === [...s].reverse().join("").toLowerCase()
    ? "YES"
    : "NO";
}

// 이렇게도 가능

function solution2(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}

let str = "goooG";
console.log(solution(str));
