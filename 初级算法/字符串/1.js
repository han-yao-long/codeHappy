/**
 * 反转字符串
 *
 */
// 注：利用双指针

function reverseString(s: string[]): void {
    const n = s.length;
    for (let left = 0, right = n - 1; left < right; ++left, --right) {
        [s[left], s[right]] = [s[right], s[left]];
    }
};

/**
 * 整数反转
 *
 */
// 位运算
function reverse(x: number): number {
    let result = 0;
    while (x !== 0) {
        result = result * 10 + x % 10;
        x = (x / 10) | 0;
    }
    return (result | 0) === result ? result : 0;
};

/**
 * 字符串中得唯一字符
 *
 */
let h = new Map, i = s.length
while (i--) h.set(s[i], h.has(s[i]) ? h.get(s[i]) + 1 : 1)
i = -1
while (++i < s.length)
    if (h.get(s[i]) === 1)
        return i
return -1
// 法一
// Object
var firstUniqChar = function (s) {
    let h = Object.create(null), i = s.length
    while (i--) h[s[i]] ? h[s[i]]++ : h[s[i]] = 1
    i = -1
    while (++i < s.length)
        if (h[s[i]] === 1)
            return i
    return -1
};
// Map
var firstUniqChar = function (s) {
    let h = new Map, i = s.length
    while (i--) h.set(s[i], h.has(s[i]) ? h.get(s[i]) + 1 : 1)
    i = -1
    while (++i < s.length)
        if (h.get(s[i]) === 1)
            return i
    return -1
};
// 哈希映射
var firstUniqChar = function (s) {
    let h = new Map, i = -1
    while (++i < s.length) h.set(s[i], h.has(s[i]) ? -1 : i)
    i = -1
    h.forEach((v, _, h) => v !== -1 && (i = v, h.clear()))
    return i
};
// 原生
var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++)
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i]))
            return i
    return -1
};

// 验证回文串
// 采用 正则 + 双指针

function isPalindrome(s: string): boolean {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

    let [left, right] = [0, s.length - 1];
    while (left < right) {
        if (s[left++] !== s[right--]) return false;
    }

    return true;
};

/**
 * 最长公共前缀
 *
 * 可以采用 横向搜索  //纵向收索  //分治    //二分法
 */