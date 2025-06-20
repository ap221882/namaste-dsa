// my solution
function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let h = head;

  let odd = head;
  let even = head.next;

  while (odd && even) {
    let temp = odd.val;
    odd.val = even.val;
    even.val = temp;

    if (odd.next && even.next) {
      odd = odd.next.next;
      even = even.next.next
    } else {
      break
    }
  }

  return head
};