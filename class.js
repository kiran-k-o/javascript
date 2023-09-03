// class myclass{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;

//     }
//     sayhello(){
//         console.log(`Hello,my name is ${this.name},and my age is ${this.age}`);
//     }
// }
// const person1=new myclass("kira",23);
// person1.sayhello();


///area of a circle
class Circle{
    constructor(radius){
        this.radius=radius;
    }
    area(){
        return Math.pi*this.radius*this.radius;
    }

}
const circlearea=new Circle(8);
const areavalue=circlearea.area();
console.log(`the area of the circle is: ${areavalue}`)