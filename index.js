let x=Math.random() * 100
x=Number.parseInt(x)
let y=prompt("Guess A Number Between 1-100")
y=Number.parseInt(y)
let score=100
while(y!=x){
  if(y>x){
    console.log("The Number is Lesser than this")
    score--
  }
  else{
    console.log("The Number is greater than this")
    score--
  }
  y=prompt("Please Guess Again")
}
console.log("You Guess Right, The Number is ",x)
console.log("Your Score: ",score)
