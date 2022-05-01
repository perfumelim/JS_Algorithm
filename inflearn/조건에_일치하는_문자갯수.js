function findIndex(s) {
  let answer = 0;
  let pos = s.indexOf("k");
  while (pos !== -1) {
    answer++;
    pos = s.indexOf("k", pos + 1);
  }
  return answer;
}
console.log(findIndex("ksekkset"));
