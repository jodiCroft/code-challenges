var reverseList = function (head) {
  //     variables for previous, current and temp. Set previous to null, so we can switch direction of the list. Set current to head to start with first element of list. And temp just declare to use later
  let prev = null;
  let current = head;
  let temp;

  //     While current is not null (meaning it hasn't gotten all the way through the list)
  while (current !== null) {
    //         Set temp (which is kind of like "next"), equal to current.next
    temp = current.next;
    //         Set current.next = prev, so it's now "pointing" at null, meaning the reverse happens here. Can only be done after the above operation becuase would mess up where current.next is
    current.next = prev;
    //         Set prev equal to current to move it along in the list
    prev = current;
    //         Set current = temp to move it along in the list
    current = temp;
  }
  //     Return prev, becuase current will be chilling at null at this point and prev will be the new head!
  return prev;
};
