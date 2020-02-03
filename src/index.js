

exports.cToF = function (c) {
	return Math.round((c * 9/5 + 32)*100)/100;
}

exports.fToC = function (f) {
	return Math.round((f - 32)* 5/9*100)/100;
}

