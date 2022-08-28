/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Try 1: Just went for it
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//  var detectCycle = function(head) {
//     if (head === null || head.next === null) return null
//     const anchor = head
//     let maxChecks = 1
//     while (head.next) {
//         let innerList = anchor
//         let checkCounter = 0
//         while (checkCounter < maxChecks) {
//             if (head.next === innerList) return innerList
//             innerList = innerList.next
//             ++checkCounter
//         }
//         head = head.next
//         ++maxChecks
//     }
//     return null
// };

/**
 * Try 2: After I read up on hash tables.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    const collection = new Map();
    if (head === null || head.next === null) return null
    collection.set(head,null)
    while (head.next) {
        if (collection.has(head.next)) return head.next
        collection.set(head.next, null)
        head = head.next
    }
    return null
};