/**
 * LinkedList class represents a linked list data structure.
 */
function LinkedList() {
  let startNode = null;
  let lastNode = null;
  let length = 0;

  /**
   * Adds a new node with the given value to the end of the list.
   * @param {any} value - The value to be stored in the new node.
   */
  function add(value) {
    const newNode = Node(value, null);
    if (!startNode) {
      startNode = newNode;
      lastNode = startNode;
    } else {
      lastNode.setNextNode(newNode);
      lastNode = newNode;
    }
    length++;
  }

  /**
   * Returns the number of nodes in the list.
   * @returns {number} The number of nodes in the list.
   */
  function count() {
    return length;
  }

  /**
   * Removes all nodes from the list.
   */
  function clear() {
    startNode = null;
    lastNode = null;
    length = 0;
  }

  /**
   * Checks if the list contains a node with the given value.
   * @param {any} value - The value to search for in the list.
   * @returns {boolean} True if the list contains a node with the given value, false otherwise.
   */
  function contains(value) {
    let currentNode = startNode;
    while (currentNode!== null) {
      if (currentNode.getValue() === value) {
        return true;
      }
      currentNode = currentNode.getNextNode();
    }
    return false;
  }

  /**
   * Executes a provided function once for each node in the list.
   * @param {function} fn - The function to execute for each node.
   */
  function forEach(fn) {
    let currentNode = startNode;
    while (currentNode!== null) {
      fn(currentNode.getValue())
      currentNode = currentNode.getNextNode();
    }
  }

  /**
   * Returns the value of the first node in the list.
   * @returns {any} The value of the first node in the list.
   */
  function first() {
    if (!startNode) return null;
    else return startNode.getValue();
  }

  /**
   * Returns the value of the last node in the list.
   * @returns {any} The value of the last node in the list.
   */
  function last() {
    if (!lastNode) return null;
    else return lastNode.getValue();
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
