function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  for (let p = headA; p !== null; p = p.next) {
    for (let q = headB; q !== null; q = q.next) {
      if (q === p) {
        return p;
      }
    }
  }

  return null
};


function getIntersectionNode2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let map = new Set();
  let temp = headB;
  while (temp) {
    map.add(temp)
    temp = temp.next;
  }

  for (let x = headA; x !== null; x = x.next) {
    if (map.has(x)) {
      return x
    }
  }

  return null;
};


function getIntersectionNode3(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }

  return pA
};