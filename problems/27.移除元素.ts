/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let len = nums.length;
  let lastIndex = 0;
  for (let fastIndex = 0; fastIndex < len; fastIndex++) {
    if (nums[fastIndex] !== val) nums[lastIndex++] = nums[fastIndex];
  }
  return lastIndex;
}
// @lc code=end
