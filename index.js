import isEqual from 'lodash.isequal'
import addition from "./Questions/Q1.js";
import minMax from "./Questions/Q2.js";
import redundant from './Questions/Q3.js';
import countTrue from './Questions/Q4.js';
import numOfDigits from './Questions/Q5.js';
import countBoomerangs from './Questions/Q6.js';
import sevenBoom from './Questions/Q7.js';
import generateHashtag from './Questions/Q8.js';

const equals = (input, expected) => {
    console.log(isEqual(input, expected) 
    ? '✅ Pass' 
    : `❌ Fail \n\nExpected:\n${expected}\nGot:\n${input}\n`)
}


console.log('\n')

console.log("Testing Q1")
equals(addition(1,2),3)
equals(addition(1,-2),-1)
equals(addition(-6,-2),-8)

console.log('\n')

console.log("Testing Q2")
equals(minMax([1, 2, 3, 4, 5]),[1, 5])
equals(minMax([2334454, 5]), [5, 2334454])
equals(minMax([1]), [1, 1])

console.log('\n')

console.log("Testing Q3")

const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")

equals(f1(), "apple")
equals(f2(), "pear")
equals(f3(), "")

console.log('\n')

console.log("Testing Q4")
equals(countTrue([true, false, false, true, false]), 2)
equals(countTrue([false, false, false, false]), 0)
equals(countTrue([]), 0)

console.log('\n')

console.log("Testing Q5")
equals(numOfDigits(13124), 5)
equals(numOfDigits(0), 1)
equals(numOfDigits(-12381428), 8)

console.log('\n')

console.log("Testing Q6")
equals(countBoomerangs([9, 5, 9, 5, 1, 1, 1]), 2)
equals(countBoomerangs([5, 6, 6, 7, 6, 3, 9]), 1)
equals(countBoomerangs([4, 4, 4, 9, 9, 9, 9]), 0)

console.log('\n')

console.log("Testing Q7")
equals(sevenBoom([2, 6, 7, 9, 3]),'Boom!')
equals(sevenBoom([86, 48, 100, 66]), "there is no 7 in the array")
equals(sevenBoom([35, 4, 9, 37]), 'Boom!')


console.log('\n')

console.log("Testing Q7")
equals(generateHashtag(""), false)
equals(generateHashtag(" ".repeat(100)), false)
equals(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag")
equals(generateHashtag("e".repeat(140)), false)

