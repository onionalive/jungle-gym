export default class Example {
	constructor() {
		this.value = 2;
	}

	init() {
		this.log()
			.add(3)
			.log()
			.subtract(1)
			.log()
			.add(5)
			.log()
			.subtract()
			.log();
	}

	add(value = this.value) {
		this.value = this.value + value;
		return this;
	}

	subtract(value = this.value) {
		this.value = this.value - value;
		return this;
	}

	log() {
		console.log(this.value);
		return this;
	}
}