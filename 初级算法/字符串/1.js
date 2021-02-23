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