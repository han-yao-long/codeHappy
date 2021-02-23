/**
 * 买卖股票
 *
 */
// 贪心算法
// 局部最优累加为全局最优
var maxProfit = function (prices) {
    let ans = 0;
    let n = prices.length;
    for (let i = 1; i < n; ++i) {
        ans += Math.max(0, prices[i] - prices[i - 1]);
    }
    return ans;
};

/**
 *  旋转数组
 *
 *
 */
// 法一
// 普通的方法就是，使用一个 for 循环，将索引 i 的元素放到数组的 (k + i) % length 上
// 间复杂度为 O(n) ，空间复杂度为 O(n)
function rotate(nums: number[], k: number): void {
    const numsCopy = [...nums]
    const length = nums.length
    for (let i = 0; i < nums.length; i++) {
        nums[(k + i) % length] = numsCopy[i]
    }
}


/**
 *  判断数组是否有重复得数字
 *
 *
 */

//  法一
// 1. 排序
// 2. 局部判断是否相同
var containsDuplicate = function (nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};
// 法二
// 注入set然后比较set.Size 与arr.length

function containsDuplicate(nums: number[]): boolean {
    const set = new Set(nums);
    return set.size == nums.length ? false : true
};

/**
 *
 * 只出现一次数字
 */
// 运用位运算中得异或
function singleNumber(nums: number[]): number {
    let ans = 0;
    for (const num of nums) {
        ans ^= num;
    }
    return ans;
};

/**
 *  查找数组中相同得数字
 */
// 法一暴力循环
// 法二
// 排序后、双指针
function intersect(nums1: number[], nums2: number[]): number[] {
    let p1 = 0
    let p2 = 0
    let res = []
    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] == nums2[p2]) {
            res.push(nums1[p1])
            p1++
            p2++
        } else if (nums1[p1] < nums2[p2]) {
            p1++
        } else {
            p2++
        }
    }
    return res

};
// 法三 哈希计数


/**
 * 加一
 *
 */
// 注释类似与移位算法
function plusOne(digits: number[]): number[] {
    const len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] != 0)
            return digits;
    }
    digits = [...Array(len + 1)].map(_ => 0);;
    digits[0] = 1;
    return digits;
};


/**
 * 移动 0
 *
 *
 */
// 1 暴力循环
// 2 采用双指针 如果遇到非0则和1得指针互换
function moveZeroes(nums: number[]): void {
    let length = 0;
    if (nums == null || (length = nums.length) == 0) {
        return;
    }
    let j = 0;
    for (let i = 0; i < length; i++) {
        if (nums[i] != 0) {
            if (i > j) {// #1
                nums[j] = nums[i];
                nums[i] = 0;
            }
            j++;
        }
    }
};
// 3 双指针 一个指针计数如果有一个0则前进1格；最后两个指针差全部转换为0

/**
 * 两数之和
 *
 */
// 法一暴力遍历

// 哈希
function twoSum(nums: number[], target: number): number[] {
    if (!nums.length) {
        return []
    }
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        const t = target - nums[i];
        if (nums.indexOf(t, i + 1) != -1) {
            return arr = [i, nums.indexOf(t, i + 1)]
        };
    }
};