var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const answer = Array(n).fill(0);

  const stack = [];

  temperatures.forEach((nowTemp, nowDay) => {
    while (stack.length > 0 && temperatures[stack.at(-1)] < nowTemp) {
      const prevDay = stack.pop();

      answer[prevDay] = nowDay - prevDay;
    }
    stack.push(nowDay);
  });

  return answer;
};
