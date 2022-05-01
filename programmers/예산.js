function solution(d, budget) {
  let overBudget = [];
  d.sort((a, b) => a - b) //오름차순으로 숫자를 정렬하고
    .slice(0) //밑에서 splice 쓸거라 원본 배열 복사해두고..
    .reduce(function (acc, curr, idx, arr) {
      if (acc + curr > budget) {
        return (overBudget = arr.splice(idx));
      }
      return acc + curr;
    }, 0);

  return d.length - overBudget.length;
}
