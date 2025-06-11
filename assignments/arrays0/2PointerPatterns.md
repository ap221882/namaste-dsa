# Types of 2 pointers

1. Converging pointers

- Pointers move in opposite directions, e.g., palindrome check

2. Parallel pointers

- Both pointers start from same end, usually beginning
- These pointers serve 2 different/complimentary roles
- The second pointer is used to find new information, left pointer tracks progress/ maintain constraints
- e.g., sliding window

3. Trigger based pointers

- We find information independently using first pointer
- Then we move second pointer to find additional information related to the info which first pointer finds out
- e.g. find nth node from the end of the linked list

## When to use it?

- For linear DS - array, strings, linked list
- having a predictable pattern - sorted/palindrome etc.
- if problem ask for explicitly 2 related values, or a result which can be generated from 2 values(sum/multiply etc.)

reference : [YT video](https://youtu.be/QzZ7nmouLTI?si=oH8dvrUkAmjStqrl)
