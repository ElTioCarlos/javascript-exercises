let cel = 0
let formulaFaren = (cel * 9/5) + 32 

let far = 40
let formulaCel = (far - 32) * 5/9

let redondeado = Math.ceil(formulaCel * 10) / 10;

console.log(formulaCel, redondeado)  