function solution(s) {
  let answer = [];
  let sToArr = s.split("");
  const mid = Math.ceil(sToArr.length / 2) - 1;
  if (sToArr.length % 2 === 0) {
    answer.push(sToArr[mid], sToArr[mid + 1]);
  } else {
    answer.push(sToArr[mid]);
  }
  return answer.join("");
}

console.log(solution("study"));
