/**
 * Stack data structure implementation.
 * @constructor
 */
function Stack() {
  let head = null;

  /**
   * Adds a new element to the top of the stack.
   * @param {any} value - The value to be added to the stack.
   */
  function push(value) {
    const newNode = Node(value, null);
    if (!head) {
      head = newNode;
    } else {
      newNode.setNextNode(head);
      head = newNode;
    }
  }

  /**
   * Removes and returns the top element from the stack.
   * @returns {any} The value of the removed element.
   */
  function pop() {
    if (!head) {
      return null;
    }
    let value = head.getValue();
    head = head.getNextNode();
    return value;
  }

  return {
    push,
    pop,
  };
}