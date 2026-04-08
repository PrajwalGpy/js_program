// let name1 = "PRajawal";

// console.log(`MY name is ${name1}`);

// const go = 22 > 21 ? "21 is bigger " : "Samall";
// console.log(go);

// const value = "rajju";

// switch (value) {
//   case "pajju":
//     console.log("its pajju");
//     break;
//   case "rajju":
//     console.log("its rajju");
//     break;
//   default:
//     console.log("ITs nothing");
// }

// let page = [10,20,30,40,50]

// let go = page.forEach((element) => {
//   console.log(element)
// });

// let page = [10,20,30,40,50,21]

// let go = page.map((e) => e*2)
// console.log(go)

// let no = page.filter((e) => {
//   return e % 2 === 0
// })
// console.log(no)

// let page = [20,30,40,10,100,5,3]

// let MaxNumber = page.reduce((min,num) => {
//   if(num < min){
//     return num
//   }
//   else{
//     return min
//   }
// },page[0])
// console.log(MaxNumber)

// const greting = (g_name = "gest", age = 0) => {
//   ` hi ${g_name} you are ${age} old.`;
// };

// console.log(greting("PRajwal", 23));

class car{
    constructor(name,model,color){
      this.name = name
      this.model = model
      this.color = color
    }

    refuel(){
      console.log(this.name + " refuel the fuel")
    }
    carinfo(){
      console.log(`${this.name},${this.model},${this.color}`);
    }
}


class minicar extends car{
  constructor(name,model,color,age){
    super(name,model,color)
    this.age = age
  }

}



let c2 = new minicar('bmw','h3','red',20)

c2.carinfo()