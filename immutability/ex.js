"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(randomNum, array) {
	if (!array.includes(randomNum)) {
		array = [...array, randomNum]
		array.sort((a, b) => {
			return a - b
		})
	}
	return array
}

var luckyLotteryNumbers = [];
const lotteryNumCount = 6;

while (luckyLotteryNumbers.length < lotteryNumCount) {
	luckyLotteryNumbers = pickNumber(lotteryNum(), luckyLotteryNumbers);
}

console.log(luckyLotteryNumbers);
