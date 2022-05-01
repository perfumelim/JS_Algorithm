// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 1000 이하의 자연수 N이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 필요한 다스 수를 출력합니다.

// Math.ceil 사용해서 구해보기
function solution2(n) {
  let answer2 = Math.ceil(n / 12);
  return answer2;
}
console.log(solution2(178));

//if문을 써서 나머지 있으면 더 해보는 방법.

function solution1(n) {
  //n 나누기 12를 해서 그 몫을 취한다.
  //만약 나머지가 있으면 + 1
  let answer;

  if (n % 12 !== 0) {
    answer = n / 12 + 1;
  } else {
    answer = n / 12;
  }
  return answer;
}

console.log(solution1(178));
