function Stack() {

	let startNode = null;
	let lastNode = null;
	
	function push (value) {
		const newNode = Node(value, null);
		if (!startNode) {
			startNode = newNode;
			lastNode = startNode;
		} else {
			lastNode.setNextNode(newNode);
			lastNode = newNode;
		}
	}

	function pop() {
		if (!lastNode) {
            return null;
        }
        let value = lastNode.getValue();
        if (startNode === lastNode) {
            startNode = null;
            lastNode = null;
        } else {
            let current = startNode;
            while (current.getNextNode() !== lastNode) {
                current = current.getNextNode();
            }
            current.setNextNode(null);
            lastNode = current;
        }
        return value;
	}

	return {
		push,
		pop
	}
}