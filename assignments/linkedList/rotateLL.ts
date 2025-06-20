function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  //* find length
  let length = 0

  let x = head;
  while (x) {
    length++
    x = x.next
  }

  //* either use slow fast pointers to find OR use the length itself to find elements, i.e., (n - k + 1)th and nth node
  let sp = head;

  let attachHead = head;

  let fpInit = head;

  let modK = k % length;
  if (modK === 0) {
    return head
  }

  for (let i = 0; i < modK; i++) {
    fpInit = fpInit.next;
  }

  let fp = fpInit;

  while (fp.next) {
    sp = sp.next;
    fp = fp.next;
  }

  head = sp.next;
  fp.next = attachHead;

  sp.next = null;


  return head

};
