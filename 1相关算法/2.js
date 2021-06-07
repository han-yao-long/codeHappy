
let arr = [5, 2, 2, 3, 1, 4, 7]
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    var left = [],
        right = [],
        current = arr.splice(0, 1); //注意splice后，数组长度少了一个
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= current) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat(left, quickSort(right))
}
console.log(quickSort(arr))
