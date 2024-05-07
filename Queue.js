function Queue() {

	let items = [];

	function enqueue(value) {
		items.push(value);
	}

	function dequeue() {
		/*
			remove the first item from the queue and return it
		*/
		return items.shift();
	}

	return {
		enqueue,
		dequeue
	}
}