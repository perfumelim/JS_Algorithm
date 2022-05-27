var findKthLargest = function (nums, k) {
  const sortArr = nums.sort((a, b) => b - a);
  const answer = sortArr.indexOf(k);
  return answer + 1;
};
