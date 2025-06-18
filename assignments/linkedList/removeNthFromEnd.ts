
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




function removeNthFromEndOnePass(head: ListNode | null, n: number): ListNode | null {
  let sentinelNode = new ListNode();

  sentinelNode.next = head;


  let firstPointer = sentinelNode;
  // second pointer starts from 0 + n steps

  let secondPointer = sentinelNode;

  for (let i = 0; i < n; i++) {
    secondPointer = secondPointer.next;
  }

  while (secondPointer.next) {
    secondPointer = secondPointer.next;
    firstPointer = firstPointer.next;
  }

  firstPointer.next = firstPointer.next && firstPointer.next.next;


  return sentinelNode.next


};