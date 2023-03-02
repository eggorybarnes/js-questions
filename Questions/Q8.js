/*
Hashtag Generator
Create a function that is a Hashtag Generator by using the following rules:

The output must start with a hashtag (#).
Each word in the output must have its first letter capitalized.
If the final result, a single string, is longer than 140 characters, the function should return false.
If either the input (str) or the result is an empty string, the function should return false.


Examples
generateHashtag("    Hello     World   " ) ➞ "#HelloWorld"

generateHashtag("") ➞ false, "Expected an empty string to return false"

generateHashtag("Edabit Is Great") ➞ "#EdabitIsGreat", "Should remove spaces."


*/

function generateHashtag(str) {
	const hash = str.split(' ').map(el => {
        return el.charAt(0).toUpperCase() + el.slice(1)    
    }).join('')    

	if(hash === '' || hash.length >= 140) return false
	return `#${hash}`
}

export default generateHashtag