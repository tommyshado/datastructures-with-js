import Node from "./node.js";

export default function LinkedList() {

	let startNode = null;
	let lastNode = null;

	function add(value) {
		const newNode = Node(value);
		if (!startNode) {
			startNode = newNode;
			lastNode = startNode;
		} else {
			lastNode.setNextNode(value);
			lastNode = newNode;
		}
	}

	function count() {
		let counter = 0;
		let currentNode = startNode;
		while (currentNode.getNextNode() !== null) {
			counter++;
			currentNode = currentNode.getNextNode();
		}
		return counter;
	}

	function clear() {
		startNode = null;
		lastNode = null;
	}

	function contains(value) {
		
	}

	function forEach(fn) {
		
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