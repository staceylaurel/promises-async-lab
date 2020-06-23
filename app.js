// Promise.then() Chaining

// slowMath.add(6, 2).then(num => {
//     console.log(num);
//     return slowMath.multiply(num, 2);
// }).then(num => {
//     console.log(num);
//     return slowMath.divide(num,4);
// }).then(num => {
//     console.log(num);
//     return slowMath.subtract(num, 3);
// }).then(num => {
//     console.log(num)
//     return slowMath.add(num, 98);
// }).then(num => {
//     console.log(num)
// return slowMath.divide(num,2);
// }).then(num => {
//     console.log(num)
//     return slowMath.multiply(num, 50);
// }).then(num => {
//     console.log(num)
//     return slowMath.divide(num,40);
// }).then(num =>{
//     console.log(num)
//     return slowMath.add(num, 32);
// }).then(num => {
//     console.log(`The final result is ${num}`)
// }).catch(err => {
//     console.log(err)
// });

////Async/Await
const await = async () => {
try {
    let result = await slowMath.add(1,1);
    console.log(result);
    result = await slowMath.multiply(result, 2)
    console.log(result);
    result = await slowMath.remainder(result, 4);
    console.log(result);
    result = await slowMath.subtract(result, 3);
    console.log(result);
    result = await slowMath.add(result, 98);
    console.log(result);
    result = await slowMath.remainder(result, 2);
    console.log(result);
    result = await slowMath.multiply(result, 50);
    console.log(result);
    result = await slowMath.remainder(result, 40);
    console.log(result);
    result = await slowMath.add(result, 32);
    console.log(`The final result is ${result}`);
} catch (e) {
    console.log(e);
}
}
await();