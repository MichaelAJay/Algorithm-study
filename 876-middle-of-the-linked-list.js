/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    // Determine how many nodes the linked list has
    // If it has an odd number, choose the middle
    // If it has an even number, choose the one to the right of the middle
    
    // Brute force would be to traverse the entirety of the list and count the node
    if (head === null) return null
    let refHead = head
    let count = 1
    while (head.next) {
        count++
        head = head.next
    };
    let targetNodePosition = count % 2 === 0 ? Math.ceil(count / 2) : Math.ceil(count / 2) - 1
    while (targetNodePosition > 0) {
        refHead = refHead.next
        targetNodePosition--
    }
    return refHead
};

/**
 * Things to fix or think about further:
 * Why do I need to subtract one in the odd case only?
 */