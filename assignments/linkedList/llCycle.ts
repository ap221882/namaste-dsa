function hasCycle(head: ListNode | null): boolean {
  let acc = new Set();

  let curr = head;

  while (curr) {
    if (acc.has(curr)) {
      return true;
    } else {
      acc.add(curr)
    }
    curr = curr.next;
  }

  return false;
};



// Floyd's algo - slow fast pointers
function hasCycle2(head: ListNode | null): boolean {
  if (head === null) {
    return false;
  }
  let slow = head;
  let fast = head.next;

  while (slow !== fast) {

    if (fast === null || fast.next === null) {
      return false
    }

    slow = slow.next;
    fast = fast.next.next
  }
  return true;
};