function solution(answers) {
  const count = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a1[i % a1.length]) count[0]++;
    if (answers[i] === a2[i % a2.length]) count[1]++;
    if (answers[i] === a3[i % a3.length]) count[2]++;
  }

  const max = Math.max(...count);

  return [1, 2, 3].filter((_, i) => count[i] === max);
}
