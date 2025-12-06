function countVowels(str){
    let count =0;
let vowels ='aeiouAEIOU';
for(let char of str){
    if(vowels.includes(char))
        count++;
}
return count;
}
// console.log(countVowels('hello world'));

//5
function longestWord(sentence){
    let words = sentence.split(' ');
    let maxWord ='';
    for(let word of words){
        if(word.length>maxWord.length)
            maxWord=word;
    }
    return maxWord
}
// console.log(longestWord('dude whats up'));

//6
function firstNonRepeating(str){
    for(let i=0; i<str.length; i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) return str[i];
    }
    return null;
}
// console.log(firstNonRepeating('swiss'));

function removeDuplicates(str){
    let result ='';
    for(let char of str){
        if(!result.includes(char))
           result+=char;
    }
    return result;
}
// console.log(removeDuplicates('banana'));

//8
function capitalize(sentence){
    return sentence.split(' ').map(word => word[0].toUpperCase()+ word.slice(1)).join(' ')
}
// console.log(capitalize('hello world'));


//10
function charFrequency(str){
    let freq ={};
    for(let char of str )
       {
         freq[char] =(freq[char] || 0)+1;
       }
       return freq;
}
// console.log(charFrequency('hello'));

//11
function minValue(arr){
    return Math.min(...arr);
}
// console.log(minValue([1,2,3,4,5]));

function secondLargest(arr){
    let unique =[ ...new Set(arr)].sort((a,b)=>b-a);
    return unique[1]

}
console.log(secondLargest([1,2,3,4]));