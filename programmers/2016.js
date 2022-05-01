function solution(a, b) {
  var answer = "";
  const targetYear = 2016;
  const date = new Date(`${targetYear}-${a}-${b}`);
  const numericalDay = date.getDay();
  switch (numericalDay) {
    case 0:
      answer = "SUN";
      break;
    case 1:
      answer = "MON";
      break;
    case 2:
      answer = "TUE";
      break;
    case 3:
      answer = "WED";
      break;
    case 4:
      answer = "THU";
      break;
    case 5:
      answer = "FRI";
      break;
    case 6:
      answer = "SAT";
      break;
  }

  return answer;
}

//처음엔 이런 방식으로 풀었는데, 이거보다 더 좋은 방식이 있었다. Data 프로토타입에 있는 toLocaleString 메소드를 쓰면 간단<!DOCTYPE html>

function solution(a, b) {
  return new Date(`2016-${a}-${b}`)
    .toLocaleString("en-us", { weekday: "short" })
    .toUpperCase();
}
