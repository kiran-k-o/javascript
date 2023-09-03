// function palindrome(num){
//      const temp=num;
//      let reversenum=0;

//      while(num>0){
//         const digit=num%10;
//         reversenum=reversenum*10+digit;
//         num=Math.floor(num/10);
//      }
//      return reversenum=== temp;
// }
// const number = parseInt(prompt('enter the number'));
// if (palindrome(number)){
//    console.log(number+"is a palindrome");

// }else{
//    console.log(number+"is not a palindrome")
// }



//factorial of a number

function fact_num(n){
   let result=1;
   for (let i =1; i<=n; i++){
   result*=i;
}
   return result;
}
const nu=5;
const result=fact_num(nu);
console.log(`factorial of ${nu} is ${result}`);

const n=10;
for ( let i =1 ;i<=n;i++){
     console.log('numbers:'+i)
}



//forloop
 cars=['vento','bmqw','jsj','dfj']
 let items=''
 for (let i=0; i<cars.length;i++){
   items+=cars[i]+ '   ';
   console.log(items)
 }