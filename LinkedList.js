function LinkedList() {

	let startNode = null;
	let lastNode = null;

	function add(value) {
		const newNode = Node(value, null);
		if (!startNode) {
			startNode = newNode;
			lastNode = startNode;
		} else {
			lastNode.setNextNode(newNode);
			lastNode = newNode;
		}
	}

	function count() {
		let counter = 0;
		let currentNode = startNode;
		while (currentNode !== null) {
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