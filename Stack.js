function Stack() {
  let head = null;

  function push(value) {
    const newNode = Node(value, null);
    if (!head) {
      head = newNode;
    } else {
      // Set the next node to be the start node
      newNode.setNextNode(head);
      head = newNode;
    }
  }

  function pop() {
    if (!head) {
      return null;
    }
    // Get the first node head
    let value = head.getValue();
    // Get the next node
    head = head.getNextNode();
    return value;
  }

  return {
    push,
    pop,
  };
}
