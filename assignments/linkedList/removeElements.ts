// for removal in LLs, always consider the previous elements

// sentinel node helps us to delete elements from head

//to silence ts
let ListNode: any;



function removeElements(head: ListNode | null, val: number): ListNode | null {
  let sentinel = new ListNode();

  sentinel.next = head;

  let prev = sentinel;
  while (prev) {
    if (prev.next && prev.next.val === val) {
      let temp = prev.next
      prev.next = prev.next.next;
      temp.next = null;

    } else {
      prev = prev.next
    }

  }

  return sentinel.next
};