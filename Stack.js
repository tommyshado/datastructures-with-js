function Stack() {
  let head = null;
  let tail = null;

  function push(value) {
    const newNode = Node(value, null);
    if (!head) {
      head = newNode;
      tail = head;
      // Case where we are adding a new node to the tail of the linked list sequence
    } else {
      tail.setNextNode(newNode);
      tail = newNode;
    }
  }

  function pop() {
    if (!(head || tail)) {
      return null;
    }
    let value = tail.getValue();
    // Case where the linked list sequence contains only one element
    if (head === tail) {
      head = null;
      tail = null;
      // Case where the linked list sequence contains more than one element
    } else {
      // create a variable called `currentNode` to store the current node
      let currentNode = head;
      // Loop over the currentNode variable compare each node to find if the next node is not <tail> or node
      while (currentNode.getNextNode() !== tail) {
        // Case where the next node is not the last node in the sequence
        // then reassign the currentNode with the next node
        currentNode = currentNode.getNextNode();
      }
      // Otherwise, set the next node to `null` to make it the <tail> or last node
      currentNode.setNextNode(null);
      // reassign the tail variable with the currentNode variable
      tail = currentNode;
    }
    return value;
  }

  return {
    push,
    pop,
  };
}
