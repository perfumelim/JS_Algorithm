function solution(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let answer = 0;

  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}
console.log(solution(3, 5));

// 처음에 let answer;라고 선언하고 값을 할당하지 않았더니
// RangeError: Potential infinite loop: exceeded 1500 iterations.
// 라는 에러가 떴다. 참고!
