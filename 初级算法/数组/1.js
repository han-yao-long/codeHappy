//  删除排序数组中的重复项(数组去重)
// 法一：
var arr1 = [1, 3, 5, 7, 9, 1, 3, 5, 7];
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    // arr1.indexOf(arr1[i]) == i 会检查出这个元素第一次出现的索引位置
    if (arr1.indexOf(arr1[i]) == i) {
        arr2.push(arr1[i]);
    }
}
console.log(arr2); //[1,3,5,7,9]
// 方法二(indexOf() / splice())：
// 遍历数组
// 用indexOf() 判断循环出来元素下标是否和元素在数组中的索引是否不相等
// 如果不相等（则说明这是一个 的元素），则把该元素从数组中删除
// 删除后数组长度变短，所以索引也要减一
var arr1 = [1, 3, 5, 7, 9, 1, 3, 5, 7];
for (var i = 0; i < arr1.length; i++) {
    if (arr1.indexOf(arr1[i]) != i) {
        arr1.splice(i, 1);
        // 因为每次遇到相同的元素删除后，数组的长度会减一，所以数组的下标也要减一
        i--;
    }
}
console.log(arr1); //[1,3,5,7,9]
// 方法三(splice())：
// 循环两次数组
// 判断每次循环的值是否一样并且下标不一样，找到后截去第二重数组所对应的下标位置的这个元素
// 原数组则会变成去重后的新数组
var arr1 = [1, 3, 5, 7, 9, 1, 3, 5, 7];
for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[i] == arr1[j] && i != j) {
            // splice(j, 1)  两个参数，第一个参数是数组所要截去的索引位置， 第二个参数是截去的长度
            arr1[j].splice(j, 1);
        }
    }
}
console.log(arr1); //[1,3,5,7,9]
// 方法四(ES6写法)：
var arr1 = [1, 3, 5, 7, 9, 1, 3, 5, 7];
var arr2 = new Set(arr1);
console.log([...arr2]); //[1,3,5,7,9]
// 方法五(ES6写法)：
// new Set() Set 结构不会添加重复的值。
// Array.from()转成数组
var arr1 = [1, 3, 5, 7, 9, 1, 3, 5, 7];
var arr2 = new Set(arr1);
// Array.from方法可以将 Set 结构转为数组
console.log(Array.from(arr2)); //[1,3,5,7,9]
// 方法6双指针
function removeDuplicates(nums) {
    if (nums.length == 0)
        return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        const item = nums[j];
        if (nums[i] !== item) {
            nums[++i] = item;
        }
    }
    nums.length = i + 1;
    return nums.length;
}
;
