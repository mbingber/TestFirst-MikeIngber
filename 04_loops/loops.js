function repeat(base, num) {
	repeatedString = ""
	for (var i = 0; i < num; i++) {
		repeatedString += base;
	}

	return repeatedString
}

function sum(arr) {
	total = 0;
	for(var i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

function gridGenerator(size) {
	result = "";
	for (var line = 0; line < size; line++) {
		for(var column = 0; column < size; column++) {
			if (line%2 === column%2) {
				result += "#";
			} else {
				result += " ";
			}
		}
		result += "\n";
	}
	return result;
}

function largestTriplet(max) {
	for (var c = max; c >= 5; c--) {					
		for (var b = c-1; b > c*Math.sqrt(2)/2; b--) {			//gotta love the trig		
			var a = Math.sqrt(Math.pow(c,2) - Math.pow(b,2));	//pythagorean theorem
			if (a%1 === 0) {									//test for integerness of a
				return [a,b,c];
			}
		}
	}
}

function join(arr, delim) {
	result = "";
	if (typeof delim === "undefined") {
		delim = "";
	}
	for (var i = 0; i < arr.length; i++) {
		result += arr[i];
		if (i < arr.length - 1) {
			result += delim;
		}
	}
	return result
}

function paramify(obj) {
	result = "";
	keys = Object.keys(obj).sort();					//sorted array of keys in obj, not in prototype
	for (var i = 0; i < keys.length; i++) {
		toAdd = keys[i] + "=" + obj[keys[i]] + "&";
		result += toAdd;
	}
	if (result.length > 0) {
		return result.slice(0,result.length - 1);
	} else {
		return result;
	}
}