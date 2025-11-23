//1
function reverseString(str){
    return str.split('').reverse().join('');

}
// console.log(reverseString('what'));

//2
function isPalindrome(str){
    return str === str.split('').reverse().join('')
}
// console.log(isPalindrome('madam'));

//3
function countVowels(str){
    let count =0;
    let vowels ='aeiouAEIOU';
    for(let char of str){
        if(vowels.includes(char)){
            count =count+1;
        }
    }
    return count;
}
// console.log(countVowels('good'));

//4
function coutConsonants(str){
    let count =0;
    let vowels ='aeiouAEIOU';
for(let char of str){
    if(!vowels.includes(char))
        count++;
}
return count;
}
// console.log(coutConsonants('hello'));

//5

function longestWord(sentence){
    let words = sentence.split(' ')
    let maxWord = '';
    for(let word of words){
        if(word.length> maxWord.length)
            maxWord=word;
    }
    return maxWord;
}
// console.log(longestWord('I love programming'));

//6

function firstNonRepeating(str){
    for(let i=0; i<str.length; i++){
        if(str.indexOf(str[i])=== str.lastIndexOf(str[i]))
            return str[i]
    }
    return null;
}
// console.log(firstNonRepeating('swiss'));

//7
function isAnagram(s1,s2){
    let sorted1 =s1.split('').sort().join('');
    let sorted2 =s2.split('').sort().join('');
    return sorted1 === sorted2;
}
// console.log(isAnagram('listen','silent'));

//8
function removeDuplicates(str){
    let result ='';
    for(let char of str){
        if(!result.includes(char))
            result+=char;
    }
    return result;
}
// console.log(removeDuplicates('banana'));

//9

function capitalize(sentence){
    return sentence.split(' ').map(word => word[0].toUpperCase()+ word.slice(1)).join(' ');
}
// console.log(capitalize("hello world good"));

//10
// 10. Character frequency
function charFrequency(str) {
    let freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}
// console.log(charFrequency("hello"));\

//11

 function maxValue(arr){
    return Math.max(...arr)
 }
//  console.log(maxValue([1,4,5,6]));

//12

function minValue(arr){
    return Math.min(arr)
}
//  console.log(minValue([1,4,4,3]));

//13
function secondLargest(arr){
    let unique =[...new Set(arr)].sort((a,b)=>b-a);
    return unique[1];
}
// console.log(secondLargest([1,2,4,5,6]));

//14
function reverseArray(arr){
    return arr.reverse();
}
// console.log(reverseArray([1,3,5,6,9]));

//15

function sumArray(arr){
    return arr.reduce((a,b)=>a+b,0)
}
// console.log(sumArray([1,2,3,4]));

//16
function removeDuplicates (arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,3,5,6,6,2]));