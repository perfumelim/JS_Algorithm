function solution(a, b, c) {
  let answer = "Yes",
    max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = "No";
  return answer;
}
