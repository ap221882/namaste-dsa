
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let sentinelNode = new ListNode();
  sentinelNode.next = head;

  // find Length

  let length = 0;
  let x = head;

  while (x) {
    length++;
    x = x.next;
  }

  // delete elem

  //* let itemToBeDeleted = length - n + 1;
  let prev = length - n;

  let prevElem = sentinelNode

  for (let i = 0; i < prev; i++) {

    prevElem = prevElem.next
  }

  prevElem.next = prevElem.next && prevElem.next.next;


  return sentinelNode.next;

};