function Queue() {
	let startNode = null;
	let lastNode = null;

	function enqueue(value) {
		const newNode = Node(value, null);
		if (!startNode) {
			startNode = newNode;
			lastNode = startNode;
		} else {
			lastNode.setNextNode(newNode);
			lastNode = newNode;
		}
	}

	function dequeue() {
		if (!startNode) {
			return null;
		}
		let value = startNode.getValue();
		startNode = startNode.getNextNode();
		if (!startNode) {
			lastNode = null;
		}
		return value;
	}

	return {
		enqueue,
		dequeue
	}
}