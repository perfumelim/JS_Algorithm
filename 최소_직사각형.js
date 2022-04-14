function solution(sizes) {
  return sizes
    .map((x) => [Math.min(x[0], x[1]), Math.max(x[0], x[1])])
    .reduce((a, b) => [Math.max(a[0], b[0]), Math.max(a[1], b[1])])
    .reduce((a, b) => a * b);
}

//리듀서 함수는 (A,B) => A, ((A의 타입과 B의 타입이 같을 때는 initialValue가 필요없다.))
