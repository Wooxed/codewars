let findAverage = function (nums) {
  result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result / nums.length;
};
