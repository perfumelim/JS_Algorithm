function solution(n, arr1, arr2) {
  return arr1.map((a, i) => {
    const b = arr2[i];

    return (a | b)
      .toString(2)
      .padStart(n, "0")
      .replace(/1/g, "#")
      .replace(/0/g, " ");
  });
}

// 오늘 알게 된 것: bitwise or(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
