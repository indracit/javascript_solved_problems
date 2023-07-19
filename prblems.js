
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


