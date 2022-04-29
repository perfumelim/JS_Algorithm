function solution(s) {
  let answer = [];
  const sToArr = s.split("");
  const mid = Math.floor(sToArr.length / 2);
  if (sToArr.length % 2 === 0) {
    answer.push(sToArr[mid - 1], sToArr[mid]);
  } else {
    answer.push(sToArr[mid]);
  }
  return answer.join("");
}

function solution2(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 == 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  return answer;
}

function solution3(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 == 1) answer = s.substr(mid, 1);
  else answer = s.substr(mid - 1, 2);
  return answer;
}

console.log(solution("study"));
