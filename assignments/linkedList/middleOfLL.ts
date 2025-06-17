// to silent TS
type ListNode = any;


function middleNode(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer
};