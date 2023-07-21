
// How do you reverse a given string in place?

var s = "indrajith";
const reverseString = (str) => {
    if(str===null || str === undefined || str.length === 0){
        return str;
    }
    
    let srr = str.split('');
    
    // using array
    // var farr=[];
    // for(let i=srr.length-1; i >=0 ; i--){
    //     farr.push(srr[i]);
    // }
    // return farr.join('')
    
    
    // without array
    let i = 0;
    let j = str.length - 1;
    
    for( i ; i <  j; i ++){
    let temp = srr[i];
    srr[i] = srr[j];
    srr[j] = temp;
        j--;
    }
    
    return  srr.join('');
}
console.log(reverseString(s));






// How do you print duplicate characters from a string?

var str = "Programming";

const findDuplicates = (str) => {
    
    const result = {};
    let strArr = str.split('');
    
    strArr.forEach((elem) =>{
        if(elem in result){
            console.log(elem)
            result[elem] = ++result[elem];
        }
        else {
            result[elem] = 1;
        }
        
    })
    
    return result;
}

console.log(findDuplicates(str));




//How to check if two String are Anagram?

var str1 = "fill";
var str2 = "fil";

const isAnagram = (str1,str2) => {
	
    let arr = str1.split('');
    
    for(let char of arr){
        
        let index = str2.indexOf(char)
        // console.log(index)
        if(index != -1){
            str2 = str2.slice(0,index)+str2.slice(index+1,str2.length)
        }
        else {
            return false;
        }
        // console.log(str2)
    }
    // console.log(str2)
    return str2.length===0
    
}

console.log(isAnagram(str1,str2));



// How do you find all the permutations of a string?

var s = "123";
 let perm = '';
const permutation = (perm,str) => {
    
    if(str.length === 0) console.log(perm);
    
    for(let i = 0; i < str.length; i++){
        
        permutation(perm + str.charAt(i),str.slice(0,i)+str.slice(i+1,str.length))
    }
    
}
permutation(perm,s)


// How can a given string be reversed using recursion? 

var s = "indrajith" ; 

const reverseString = (str) => {
    
    if ( str.length < 2) {
         return str;
    }


     return reverseString ( str.slice(1))  + str.charAt(0);
    
}
console.log(reverseString(s));


// fibonancci series with memo

function fibonacci(n, memo = {}) {
  if (n <= 1) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}


console.log(fibonacci(6));  

// How do you count a number of vowels and consonants in a given string? 


let str = 'How many vowels in this String';

const countVowels = (str) =>{
    
    const vowelslist = ['a','e','i','o','u'];
    let count = 0;
    let arr = str.split('');
    
    for(char of arr){
        if(vowelslist.includes(char)){
            count++;
            // console.log(char)
        }
    }
    
    return count;
}

console.log(countVowels(str))


// How do you count the occurrence of a given character in a string?


let str = 'Today is Monday';
let char = 'a';
const countChar = (char,str) =>{
    
    let count = 0;
    var arr = str.split('');
    
    for(c of arr){
        if(c===char){
            count ++;
        }
    }
    
    return count;
   
}

console.log(countChar(char,str))

// How do you print the first non-repeated character from a string?

// How do you reverse words in a given sentence without using any library method? 

// How do you check if two strings are a rotation of each other?

// How do you check if a given string is a palindrome?

// How do you find the length of the longest substring without repeating characters?

// Given string str, How do you find the longest palindromic substring in str?

// how to remove the duplicate character from String?

// How to find the maximum occurring character in given String? 

// How do you remove a given character from String? 

// Given an array of strings, find the most frequent word in a given array, I mean, the string that appears the most in the array. In the case of a tie, ​the string that is the smallest (lexicographically) ​is printed. 



