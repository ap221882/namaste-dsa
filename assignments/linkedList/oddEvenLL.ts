function oddEvenList(head: ListNode | null): ListNode | null {
  let odd = head;
  let even = head.next;
  let evenStart = even;

  while (odd.next && even.next) {
    // ~> we access the .next.next of odd and even both, so we check for them in while condition
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenStart;

  return head
};


function oddEvenList2(head: ListNode | null): ListNode | null {
  let odd = head;
  let even = head.next;
  let evenStart = even;

  while (even && even.next) {
    // ~> even.next is accessed hence even should not be null
    odd.next = even.next;
    odd = odd.next;
    // ~> here we access odd.next which is equivalent to even.next - hence even.next should not also be null
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenStart;

  return head;
};