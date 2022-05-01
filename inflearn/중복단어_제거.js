function solution(s) {
  let answer;
  answer = s.filter(function (v, i) {
    if (s.indexOf(v) === i) return true;
  });
  return answer;
}

//보다 간결하게 만들기

function solution2(s) {
  let answer;
  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i;
  });
  return answer;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
