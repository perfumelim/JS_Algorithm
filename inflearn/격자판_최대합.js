function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sumOfLow = (sumOfColumn = 0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sumOfLow += arr[i][j];
      sumOfColumn += arr[j][i];
    }
    answer = Math.max(answer, sumOfLow, sumOfColumn);
  }
  sumOfLow = sumOfColumn = 0;
  for (let i = 0; i < n; i++) {
    sumOfLow += arr[i][i];
    sumOfColumn += arr[i][n - i - 1];
  }
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
