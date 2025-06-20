function swapPairsRecursive(head: ListNode | null): ListNode | null {

  if (!head || !head.next) {
    return head;
  }

  let h = head;
  let temp = h.val;
  h.val = h.next.val;
  h.next.val = temp;

  let s = head.next.next

  let subHead = swapPairs(s);

  head.next.next = subHead;

  return head
};


function swapPairsRecursiveWithNodeChange(head: ListNode | null): ListNode | null {

  if (!head || !head.next) {
    return head;
  }

  let firstNode = head;
  let secondNode = head.next;

  firstNode.next = swapPairs(secondNode.next);
  secondNode.next = firstNode;

  return secondNode;
};