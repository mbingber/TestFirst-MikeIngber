function createCalculator() {
	var calc = {};
	calc.val = 0;
	calc.value = function() {
		return this.val;
	}
	calc.add = function(num) {
		this.val += num;
		return this.val;
	}
	calc.subtract = function(num) {
		this.val -= num;
		return this.val;
	}
	return calc;
}