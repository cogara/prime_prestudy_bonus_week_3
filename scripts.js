console.log("Hey, this works!");


function functionA(a) {
	alert(a += 2);
}

function functionB(b) {
	return b *= 2;
}

function functionC(c) {
	return c /= 1.5;
}

functionA(functionB(functionC(3)));