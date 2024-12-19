/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode(0)
    let curr = newList
    while (list1 && list2) {
        if (list1.val >= list2.val) {
            curr.next = list2
            list2 = list2.next
        }
        else {
            curr.next = list1
            list1 = list1.next
        }
        curr = curr.next
    }
    curr.next = list1 || list2
    return newList.next;
};
