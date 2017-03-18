export class Functional {
	constructor(base = 2) {
		this.base = base;
	}

	multiply(value = 2) {
		console.log('multiply func');
		this.base = this.base * value;
		return this;
	}

	add(value = this.base, addition = 5) {
		console.log('add func');
		this.base = this.base + value + addition;
		return this;
	}

	log() {
		console.log(this.base);
		return this;
	}

	closures(bar = this.base) {
		let action = null;

		const ACTION_SUBTRACT = 'SUBTRACT';
		const ACTION_SUBTRACT_MORE = 'SUBTRACT_MORE';
		const ACTION_ADD = 'ADD';

		if (bar < 10) action = ACTION_SUBTRACT;
		else if (bar < 20) action = ACTION_SUBTRACT_MORE;
		else action = ACTION_ADD;

		var subtract = () => {
			console.log('closure func subtract');
			this.base = this.base - 2;
			return;
		}

		var subtractMore = () => {
			console.log('closure func subtractMore');
			this.base =  this.base - 10;
			return;
		}

		var addMore = () => {
			console.log('closure func addMore');
			this.base =  this.base + 10;
			return;
		}

		switch(action) {
			case 'SUBTRACT':
				subtract();
				return this;
			case 'SUBTRACT_MORE':
				subtractMore();
				return this;
			default:
				addMore();
				return this;
		}
	}
}

export class FunctionalSubClass extends Functional {
	constructor(base = 2) {
		super(base);
	}
}