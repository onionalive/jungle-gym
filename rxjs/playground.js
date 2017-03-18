import Rx from 'rxjs/Rx';

function createSubscriber(tag) {
	return {
		next(item) { console.log(`${tag}.next ${item}`); },
		error(error) { console.log(`${tag}.error ${error.stack || error }`); },
		complete() { console.log(`${tag}.complete`); }
	};
}

Rx.Observable.interval(1000)
	.merge(Rx.Observable.interval(500))
	.take(5)
	.subscribe(createSubscriber("merge1"));