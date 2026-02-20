//Write a program to reverse a given number.
let arr = [2,5,8,9,10,1]
let output = ""
for (let i = arr.length-1; i > 0; i--) {
   console.log("value",arr[i])
   output += ""+arr[i]+""
   
}
console.log(output)