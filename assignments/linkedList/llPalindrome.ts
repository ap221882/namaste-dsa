function isPalindrome(head: ListNode | null): boolean {
  // finding middle
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer !== null && fastPointer?.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  let middleNode = slowPointer;

  // reverse

  let prev = null;
  let current = middleNode;

  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  // compare from x <===> head
  let old = head;
  while (prev !== null) {
    if (prev.val !== old.val) {
      return false;
    }

    prev = prev.next;
    old = old.next;
  }

  return true;
}
