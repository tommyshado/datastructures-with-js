function Stack() {

	let items = [];
	
	function push (value) {
		items.push(value);
	}

	function pop() {
		return items.pop();
	}

	return {
		push,
		pop
	}
}