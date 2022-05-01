function solution(n) {
  const ternary = n.toString(3);
  const decimal = parseInt(Array.from(ternary).reverse().join(""), 3);
  return decimal;
}
