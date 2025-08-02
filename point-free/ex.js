"use strict";

function not(fn) {
	return function(...args) {
		return !fn(...args);
	};
}

const output = console.log.bind(console);

function when(fn) {
	return function(predicate){
		return function(...args){
			if (predicate(...args)) {
				return fn(...args);
			}
		};
	};
}

const printIf = when(output);

function isShortEnough(str) {
	return str.length <= 5;
}

const isLongEnough = not(isShortEnough);

const msg1 = "Hello";
const msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World
