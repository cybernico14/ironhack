

function greet() {
    console.log("Hello world - simple")
}

setTimeout(greet, 3000);
console.log("This message goes first")

console.log(Date())

function showTime() {
    let dateTime = new Date()
    let time = dateTime.toLocaleString()
    console.log(time)

    setTimeout(showTime, 3000)
}

//showTime()

let count = 0;

function increaseCount() {
    count++;
    console.log(count);
}
let id = setTimeout(increaseCount, 3000)

//clearTimeout(id)

function greetWithParameters(name, lastname) {
    console.log("Hello " + name + " " + lastname)
}

setTimeout(greetWithParameters,4000,"nico", "ferronato")


function greetCallBack(name) {
    console.log(`Hello - ${name}`)
}

greetCallBack("nico")

function greetCallBackTwo(name, llamame) {
    console.log(`Hello - ${name}`)
    llamame()
}

function callMe() {
    console.log("Call me to know what happened last night");
}

greetCallBackTwo("Nico", callMe)


function greetCallBackThree() {
    console.log("Hello Homies!")
}

function sayMyName(name) {
    console.log(`Hello ${name}`)
}

setTimeout(greetCallBackThree, 3000)
sayMyName("Nico")

function greetCallBackFour(name, myFunction) {
    console.log(`Hello my students`);
    myFunction(name)
}

function sayName(name) {
    console.log(`Hello there ${name}`);
}

setTimeout(greetCallBackFour, 5000, "Nico", sayName)

let promiseStatus = true

let promise = new Promise((resolve, reject) => {
    if (promiseStatus) {
        resolve("There are Oreos")
    }
    else {
        reject("there are no oreos in the kitchen, go get some...")
    }
})


let countValue = promise
    
console.log(countValue)


let countValue2 = new Promise ((resolve) =>
{
    resolve ("Promise is resolved")
})

.then(function successValue(result) {
    console.log(result)
    
})

.then(function successValue1() {
    console.log("We have achieved our results")
})

let countValue3 = new Promise((resolve, reject) => {
    reject("Nico Promise rejecte")
    
})

countValue3
    .then(function successValue(resolve) {
    console.log(resolve)
    
})

    .catch(function errorValue(reject) {
    console.log(reject)
    })

