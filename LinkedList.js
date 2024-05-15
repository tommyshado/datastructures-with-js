function LinkedList() {
  let startNode = null;
  let lastNode = null;
  let length = 0;

  function add(value) {
    const newNode = Node(value, null);
    if (!startNode) {
      startNode = newNode;
      lastNode = startNode;
      length++;
    } else {
      lastNode.setNextNode(newNode);
      lastNode = newNode;
      length++;
    }
  }

  function count() {
    return length;
  }

  function clear() {
    startNode = null;
    lastNode = null;
    length = 0;
  }

  function contains(value) {
    let currentNode = startNode;
    while (currentNode !== null) {
      if (currentNode.getValue() === value) {
        return true;
      }
      currentNode = currentNode.getNextNode();
    }
    return false;
  }

  function forEach(fn) {
	let currentNode = startNode;
    while (currentNode !== null) {
      fn(currentNode.getValue())
      currentNode = currentNode.getNextNode();
    }
  }

  function first() {
    return startNode.getValue();
  }

  function last() {
    return lastNode.getValue();
  }

  return {
    add,
    clear,
    contains,
    count,
    first,
    last,
    forEach,
  };
}
