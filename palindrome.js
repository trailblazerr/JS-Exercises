// Given the string check if it is a palindrome

function checkPalindrome ( inputString ) {
	for ( var i = 0; i <= inputString.length; i ) {
		if ( inputString.length > 1 ) {
			if ( inputString[0] === inputString[inputString.length-1] ) {
				inputString = inputString.substr(1);
				inputString = inputString.slice(0, -1);
			}
			else {
				return false;
			}
		}
		else {
			return true;
		}
	}
}

// Better approach:
function checkPalindrome ( inputString ) {
	return inputString === inputString.split('').reverse().join('');
}