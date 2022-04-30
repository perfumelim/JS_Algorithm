var numJewelsInStones = function (jewels, stones) {
  return stones.split("").filter((char) => jewels.indexOf(char) !== -1).length;
};
