
// reverse a string

var s = "indrajith";
const reverseString = (s ) => {
    
    let srr = s.split('');
    var farr=[];
    for(let i=srr.length-1; i >=0 ; i--){
        farr.push(srr[i]);
    }
    return farr.join('')
}
console.log(reverseString(s)); // htijardni