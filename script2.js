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
console.log(longestWord('dude whats up'));