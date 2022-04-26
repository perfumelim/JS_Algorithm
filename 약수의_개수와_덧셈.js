function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let numOfFac = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) numOfFac.push(j);
    }
    console.log(numOfFac);

    if (numOfFac.length % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}
