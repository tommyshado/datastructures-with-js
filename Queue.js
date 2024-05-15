function Queue() {
  let head = null;
  let tail = null;

  function enqueue(value) {
    // create a constant variable to store a new node
    const newNode = Node(value, null);
    // check if the head variable does not exist
    if (!head) {
      // assign the head variable with the new node variable
      head = newNode;
      // assign the tail variable with the head variable
      tail = head;
    } else {
      // otherwise use the tail variable to set a new node
      tail.setNextNode(newNode);
      // then assign the tail variable with the new node variable
      tail = newNode;
    }
  }

  function dequeue() {
    // check if head variable is null
    if (!head) {
      return null;
    }
    // store the value of the head node in the queue
    let nodeValue = head.getValue();
    // create a current node variable to store the head node variable
    let currentNode = head;
    // then reassign the head variable with the current node variable next node
    head = currentNode.getNextNode();
    // the return the value of the head node
    return nodeValue;
  }

  return {
    enqueue,
    dequeue,
  };
}
