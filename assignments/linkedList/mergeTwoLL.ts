function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let sn = new ListNode();
  let snHead = sn;

  let x = l1;
  let y = l2;

  while (x && y) {

    if (x.val >= y.val) {
      sn.next = y;
      y = y.next;
    } else {
      sn.next = x;
      x = x.next;
    }

    sn = sn.next
  }

  if (x) {
    sn.next = x;
  }

  if (y) {
    sn.next = y;
  }

  return snHead.next;
};