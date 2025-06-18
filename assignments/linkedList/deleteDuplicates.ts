// two pointer approach
// one pointer tracking current value, one traversing the LL

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return head;
  }

  let sentinelNode = new ListNode();

  sentinelNode.next = head;

  let prev = sentinelNode;

  let x = -101;

  while (prev.next) {
    if (prev.next.val > x) {
      x = prev.next.val;
      prev = prev.next;
    } else {
      prev.next = prev.next.next;
    }
  }

  return sentinelNode.next
};


function deleteDuplicatesWithOnePointer(head: ListNode | null): ListNode | null {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next;
    }
  }

  return head;
};