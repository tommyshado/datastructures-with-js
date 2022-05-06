const Node = require('./node');

module.exports = function LinkedList() {

	let startNode = null;
	let lastNode = null;

	function add(value) {
		// my list empty
		// startNode => Node(value, null)
		if (startNode === null) {
			startNode = Node(value, null);
			lastNode = startNode;
		} else {
			const newNode = Node(value, null);
			// link to the next node
			lastNode.setNextNode(newNode);
			// the new node becomes the last node
			lastNode = newNode;
		}
	}

	function count(){
		let loopNode = startNode;
		let count = 0;
		while (true && loopNode != null) {
			count++;
			// if the next node is null I am at the end of the linked list...
			loopNode = loopNode.getNextNode();
			if (loopNode == null) {
				break;
			}
			// there are more items in the list
			
		}
		return count;
	}

	function clear() {
		startNode = null;
	}

	function contains(value) {
		let loopNode = startNode;
		let count = 0;
		while (true && loopNode != null) {
			if (loopNode.getValue() == value){
				return true;
			}
			// if the next node is null I am at the end of the linked list...
			loopNode = loopNode.getNextNode();
			if (loopNode == null) {
				return false;
			}
		}
	}

	function forEach(fn) {
		let loopNode = startNode;
		while (true && loopNode != null) {
			
			fn(loopNode.getValue());

			// if the next node is null I am at the end of the linked list...
			loopNode = loopNode.getNextNode();
			if (loopNode == null) {
				break;
			}
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
		forEach
	}
}