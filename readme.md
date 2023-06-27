# Linked lists in JavaScript

Learn about data structures implementing a Stack, Queue & finally a LinkedList.

Make these [tests](test/index.html) pass;

Use the `Node` Factory function to create each of the respective data structures:

```js
function Node(value, nextNode) {

	function getValue() {
		return value;
	}

	function getNextNode() {
		return nextNode;
	}

	function setNextNode(node) {
		nextNode = node;
		return nextNode;
	}

	return {
		getValue,
		getNextNode,
		setNextNode
	}

}
```
