// setTimeout( () => {
//     console.log("merhaba")
// }, 3000)

// setInterval (() => {
//     console.log("ben her saniye çalışacağım")
// }, 1000)

// const sayHi = (cb) => {
//     cb();
// };

// sayHi(() => {
//     console.log("hello");
// });


fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => {
    console.log(data)
});