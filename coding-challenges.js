// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."





var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

const remove1 = (arr) => {
    arr.shift()
    let newArr = []
    if (arr[0] === undefined){
        return ("The array is empty")
    }
    for (let i=0; i<arr.length;i++) {
        let random = Math.floor(Math.random()*arr.length)
        let last = arr.slice(random, random+1)
        better = last[0]
        while (newArr.includes(better)){
            random = Math.floor(Math.random()*arr.length)
            last = arr.slice(random, random+1)
            better = last[0]
        }
        newArr.push(better)
    }


    return newArr
}

console.log(remove1(collections));
console.log(remove1(collections));
console.log(remove1(collections));

// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.





var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const cuber = (array) => {
    let sum = 0
    for (let i=0; i<array.length; i++){
        sum += Math.pow(array[i], 3)
    }
    return (sum)
}

console.log(cuber(cubeAndSum1));
console.log(cuber(cubeAndSum2));

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.





var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

const extra = (arr) => {
    arr.sort((a,b) => a-b)
    let front = arr.shift()
    let end = arr.pop()
    let finalArr = []
    finalArr.push(front)
    finalArr.push(end)
    return finalArr
}
 console.log(extra(nums1));
 console.log(extra(nums2));

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.





var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

const capital = (arr) => {
    let array = arr.split("")
    let finalArr = []
    for (let i=0; i<array.length; i++) {
        if (i % 2 !== 0) {
            let cap = array[i]
            let capper = cap.toUpperCase()
            finalArr.push(capper)
        } else {
            finalArr.push(array[i])
        }
    }
    return (finalArr.join(""))
}

console.log(capital(testString1));
console.log(capital(testString2));

// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.





var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


const noDups = (arr1, arr2) => {
    newArr = []
    for (let i=0; i<arr1.length; i++) {
        if (newArr.includes(arr1[i])){

        } else {
            newArr.push(arr1[i])
        }
    }
    for (let i=0; i<arr2.length; i++) {
        if (newArr.includes(arr2[i])){

        } else {
            newArr.push(arr2[i])
        }
    }
    return (newArr)

}

console.log(noDups(arr1, arr2));
