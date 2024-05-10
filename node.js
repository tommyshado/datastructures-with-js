function Node(value, nextNode) {

	function getValue() {
		return value;
	}

	function getNextNode() {
		return nextNode;
	}

	function setNextNode(node) {
		nextNode = node;
	}

	return {
		getValue,
		getNextNode,
		setNextNode
	}

}

