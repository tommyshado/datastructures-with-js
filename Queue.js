/**
 * Queue data structure implementation.
 * @constructor
 */
function Queue() {
  let head = null;
  let tail = null;
  /**
   * Adds a new node to the end of the queue.
   * @param {any} value - The value to be stored in the new node.
   */
  function enqueue(value) {
    const newNode = Node(value, null);
    if (!head) {
      head = newNode;
      tail = head;
    } else {
      tail.setNextNode(newNode);
      tail = newNode;
    }
  }
  /**
   * Removes and returns the value of the node at the front of the queue.
   * @returns {any} - The value of the removed node, or null if the queue is empty.
   */
  function dequeue() {
    if (!head) {
      return null;
    }
    let nodeValue = head.getValue();
    let currentNode = head;
    head = currentNode.getNextNode();
    return nodeValue;
  }

  return {
    enqueue,
    dequeue,
  };
}
