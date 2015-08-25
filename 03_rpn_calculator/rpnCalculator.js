exception = "rpnCalculator is empty"

var RPNCalculator = function() {
	this.arr = [];
	this.push = function(num) {
		this.arr.push(num);
	}
}

RPNCalculator.prototype.value = function() {
	return this.arr[this.arr.length-1];
}

RPNCalculator.prototype.plus = function() {
	if (this.arr.length <= 1) {
		throw exception;
	} else {
		var secondNum = this.arr.pop();
		var firstNum = this.arr.pop();
		this.push(firstNum + secondNum);
	}
}

RPNCalculator.prototype.minus = function() {
	if (this.arr.length <= 1) {
		throw exception;
	} else {
		var secondNum = this.arr.pop();
		var firstNum = this.arr.pop();
		this.push(firstNum - secondNum);
	}
}

RPNCalculator.prototype.times = function() {
	if (this.arr.length <= 1) {
		throw exception;
	} else {
		var secondNum = this.arr.pop();
		var firstNum = this.arr.pop();
		this.push(firstNum * secondNum);
	}
}

RPNCalculator.prototype.divide = function() {
	if (this.arr.length <= 1) {
		throw exception;
	} else {
		var secondNum = this.arr.pop();
		var firstNum = this.arr.pop();
		this.push(firstNum / secondNum);
	}
}
