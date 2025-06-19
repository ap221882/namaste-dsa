function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let a1 = l1;
  let a2 = l2;
  let carry = 0;
  let sumNode = new ListNode();
  let sumStart = sumNode;

  while (carry > 0 || a1 || a2) {

    let sum = carry + (a1 ? a1.val : 0) + (a2 ? a2.val : 0);

    carry = sum >= 10 ? 1 : 0;

    let digit = sum >= 10 ? (sum - 10) : sum;

    let newNode = new ListNode(digit);

    sumNode.next = newNode;
    sumNode = sumNode.next;

    if (a1) {
      a1 = a1.next;
    }
    if (a2) {
      a2 = a2.next;
    }
  }

  return sumStart.next
};