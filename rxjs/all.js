import Rx from 'rxjs/Rx';

function createSubscriber(tag) {
	return {
		next(item) { console.log(`${tag}.next ${item}`); },
		error(error) { console.log(`${tag}.error ${error.stack || error }`); },
		complete() { console.log(`${tag}.complete`); }
	};
}

// Rx.Observable.interval(500)
// 	.take(5)
// 	.subscribe(createSubscriber("interval"));

// Rx.Observable.timer(1000, 500)
// 	.take(3)
// 	.subscribe(createSubscriber("timer"));

// Rx.Observable.of("Hello world!", 42, "whoaaa")
// 	.subscribe(createSubscriber("of"));

// Rx.Observable.from(["Hello world!", 42, "whoa"])
// 	.subscribe(createSubscriber("from"));

// Rx.Observable.from(test())
// 	.subscribe(createSubscriber("from"));

// const arr = [1, 3, 5, 7];
// Rx.Observable.from(arr)
// 	.map(i => i*5)
// 	.subscribe(createSubscriber("from"));

// it can also take in a generator function!

// function* test() {
// 	yield 1;
// 	yield 5;
// 	yield "HEY";
// }

// Error

// Rx.Observable.throw(new Error("Hey"))
// 	.subscribe(createSubscriber("error"));

// Empty
// Rx.Observable.empty()
// 	.subscribe(createSubscriber("empty"));

// let sideEffect = 0;
// const defer = Rx.Observable.defer(() => {
// 	sideEffect++;
// 	return Rx.Observable.of(sideEffect);
// });

// defer.subscribe(createSubscriber("defer.one"));
// defer.subscribe(createSubscriber("defer.two"));
// defer.subscribe(createSubscriber("defer.three"));

// Rx.Observable.never()
// 	.subscribe(createSubscriber("never"));

// Rx.Observable.range(10, 30)
// 	.subscribe(createSubscriber("range"));

// const ex1 = function(one, two) {
// 	return one - two;
// }

// const ex2 = function(one, two) {
// 	return one * two;
// }

// const ex3 = function(one, two) {
// 	return one / two;
// }

// const arr = [1,3,4,5]

// function linearAl(arr, funcA, funcB) {
// 	const a = funcB(arr[0], arr[3]);
// 	const b = funcB(arr[1], arr[2]);
// 	const res = funcA(a, b);
// 	console.log(res);

// 	return res;
// }

// linearAl(arr, ex1, ex2);
// linearAl(arr, ex3, ex2);
// linearAl(arr, ex1, ex3);

// function *gen() {
// 	const value = 100;
// 	return (yield) * (yield);
// }

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(40);
// 	}, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(20);
// 	}, 5000);
// });

// const example = gen();

// example.next();
// promise.then(item => {
// 	const here = example.next(item);
// 	console.log('here');
// 	console.log(here);
// });

// promise2.then(item => {
// 	const here = example.next(item);
// 	console.log('here');
// 	console.log(here);
// });
// 

// Hot/Cold Observables

// const interval = Rx.Observable.interval(1000)
// 	.take(10)

// setTimeout(() => {
// 	interval.subscribe(createSubscriber("one"));
// }, 1200);

// setTimeout(() => {
// 	interval.subscribe(createSubscriber("two"));
// }, 3200);

// HOT 
// connectable observable

// const interval = Rx.Observable.interval(1000)
// 	.take(10)
// 	.publish();

// interval.connect();

// setTimeout(() => {
// 	interval.subscribe(createSubscriber("one"));
// }, 500);

// setTimeout(() => {
// 	interval.subscribe(createSubscriber("two"));
// }, 3200);

// double subscription example 

// const socket = { on: () => {} };
// const chatMessage = new Rx.Observable(observable => {
// 	console.log("subscribed");
// 	socket.on("chat:message", message => observer.next(message));
// });

// chatMessage.subscribe(createSubscriber("one"));
// chatMessage.subscribe(createSubscriber("two"));
// 

// using refCount()
// const simple = new Rx.Observable(observer => {
// 	observer.next("one");
// 	observer.next("two");
// 	observer.next("three");
// 	observer.complete();
	
// 	return () => console.log("Disposed");
// });

// // always returns the last value
// const published = simple.publishLast();

// // even if we subscribe before connect, both will get the last value
// // to dispose without running complete, we need to disconnect by unsubscribing 
// const sub1 = published.subscribe(createSubscriber("one"));
// const sub2 = published.subscribe(createSubscriber("two"));
// let connection = published.connect();
// // const sub3 = published.subscribe(createSubscriber("three"));

// sub1.unsubscribe();
// sub2.unsubscribe();
// // sub3.unsubscribe();

// connection.unsubscribe();

// Rx.Observable.range(1, 10)
// 	.map(a => a * a)
// 	.subscribe(createSubscriber("simple"));

// Rx.Observable.range(1, 10)
// 	.do(a => console.log(`From do ${a}`))
// 	.map(a => a * a)
// 	.subscribe(createSubscriber("simple"));
// 	
// Rx.Observable.range(1, 10)
// 	.finally(() => console.log(`From finally`))
// 	.map(a => a * 2)
// 	.subscribe(createSubscriber("finally"));

// Rx.Observable.range(1, 10)
// 	.filter(a => a < 5)
// 	.map(a => a * 2)
// 	.subscribe(createSubscriber("filter"));

// Rx.Observable.interval(1000)
// 	.startWith(-1)
// 	.subscribe(createSubscriber("interval"));

Rx.Observable.interval(1000)
	.merge(Rx.Observable.interval(500))
	.take(5)
	.subscribe(createSubscriber("merge1"));