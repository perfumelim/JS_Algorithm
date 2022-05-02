function solution(price, money, count) {
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    let mul = price * i;
    totalPrice += mul;
  }
  return totalPrice > money ? totalPrice - money : 0;
}

// 가우스 공식을 사용했다면

function solution2(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
