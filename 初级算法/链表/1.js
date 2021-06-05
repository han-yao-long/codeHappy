/**
 * 删除链表节点
 */
// 将后位链表赋值
function deleteNode(root: ListNode | null): void {
    root.val = root.next.val;
    root.next = root.next.next;
};