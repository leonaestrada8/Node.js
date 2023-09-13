function canJump(nums) {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return false;
        }
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
}


nums = [2,3,1,1,4] // Output: true / Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

nums2 = [3,2,1,0,4] // Output: false / Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

console.log(canJump(nums))
console.log("------------------------")
console.log(canJump(nums2))
