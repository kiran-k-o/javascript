//arrow function
const add=(a,b) => a+b;
console.log(add(23,56));

const greet=() => "kiran";
console.log(greet());
const person=(name,age) => ({name,age});
console.log(person('kiran',2223))

//map
const numbers=[2,4,5,6,3,87,8,3]
const c=numbers.map(i=> i*2);
console.log(c)

const books=[
   {id:1,title:"abc",author:"wwwwreet"},
   {id:2,title:"abc",author:"wwwwreet"},
   {id:3,title:"abc",author:"wwwwreet"},
   {id:4,title:"abc",author:"wwwwreet"},
   {id:5,title:"abc",author:"wwwwreet"},

]
const booktitle=books.map(book=>book.title);
console.log(booktitle);


//filter

const ages=[22,44,55,6,64,53]
const adults=ages.filter(ages=> ages  > 30);
console.log(adults)

// even numbers
const enumb=[1,2,3,44,56,7,7,8,8,9,6,54,1]
const evennumbers=enumb.filter(enumb=> enumb%2!=0);
console.log(evennumbers)


//reduce
const numberss=[2323,332];
const x = numberss.reduce(myfunc);
console.log('reduced value',x)

function myfunc(total,num){
   console.log('total:'+total)
   console.log('num:',num)
   return total-num;
}



const n=[1,2,3,4,5,5,63,2,334443,,34,4,445];
const maxn=n.reduce((max,current)=> (current>max? current:max),n[0]);
console.log('max value=',maxn);


const m=[2,3,4,,45,5,554,3,];
const sum = m.reduce((total,num)=> total+num,0);
console.log(sum)