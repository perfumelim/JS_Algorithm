function solution(progresses, speeds) {
  var answer = [];
  let days = 1;
  let cnt = 0;
  while (progresses[0]) {
    if (progresses[0] + speeds[0] * days >= 100) {
      cnt++;
      progresses.shift();
      speeds.shift();
    } else {
      if (cnt > 0) {
        answer.push(cnt);
      }
      days++;
      cnt = 0;
    }
  }
  answer.push(cnt);

  return answer;
}

function solution2(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
