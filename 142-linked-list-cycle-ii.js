/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if (head === null || head.next === null) return null
    const anchor = head
    let maxChecks = 1
    while (head.next) {
        let innerList = anchor
        let checkCounter = 0
        while (checkCounter < maxChecks) {
            if (head.next === innerList) return innerList
            innerList = innerList.next
            ++checkCounter
        }
        head = head.next
        ++maxChecks
    }
    return null
};