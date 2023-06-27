
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

