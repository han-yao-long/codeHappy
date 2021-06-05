          // 排序
// 冒泡排序

function bubleSort(arr) {
    var len = arr.length;
    console.log('outer', len)
    for (let outer = len; outer >= 2; outer--) {
        for (let inner = 0; inner <= outer - 1; inner++) {

            if (arr[inner] > arr[inner + 1]) {
                [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]]
            }
        }
    }
    return arr;
}

// 选择排序
function selectSort(arr) {
    var len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr
}
// 插入排序

// 快速排序(重要)
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;  //递归出口
    }
    var left = [],
        right = [],
        current = arr.splice(0, 1); //注意splice后，数组长度少了一个
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < current) {
            left.push(arr[i])  //放在左边
        } else {
            right.push(arr[i]) //放在右边
        }
    }
    return quickSort(left).concat(current, quickSort(right)); //递归
}

// 插入排序
function insertSort(arr) {
    for(let i = 1; i < arr.length; i++) {  //外循环从1开始，默认arr[0]是有序段
        for(let j = i; j > 0; j--) {  //j = i,将arr[j]依次插入有序段中
            if(arr[j] < arr[j-1]) {
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            } else {
                break;
            }
        }
    }
    return arr;
}