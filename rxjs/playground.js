import Rx from 'rxjs/Rx';

// helper func to log info on subscriptions
// uncomment console.logs to get more info 
// on next calls and completion calls
function createSubscriber(tag) {
	return {
		next(item) { 
			// console.log(`${tag}.next ${item}`);
			console.log(`${tag}`); 
		},
		error(error) { console.log(`${tag}.error ${error.stack || error }`); },
		complete() { 
			// console.log(`${tag}.complete`); 
		}
	};
}

Rx.Observable.interval(1000)
	.merge(Rx.Observable.interval(500))
	.take(1)
	.subscribe(createSubscriber("Hello from RxJS, Jungle Gym!"));