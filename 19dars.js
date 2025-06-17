
// 1-masala


// let arr = [1, 2, 3];
// let arr2 = [2, 3, 4];

// function keshiganTop(arr, arr2) {
//     let yangiArr=[]
//     for (let i of arr) {
//         if (arr2.includes(i)) {
//            yangiArr.push(i)
//        }
//    }
//    return yangiArr
// }

// console.log(keshiganTop(arr, arr2))



// 2-masala


// let arr = [1, 1, 2, 2, 2, 3, 3, 4, 5];

// function takrorlanganiTop(arr) {
//     let yangiArr = []

//     for (let i of arr) {
//         let count = 0

//         for (let j of arr) {

//             if (i == j) count++;
//         }

//         if (count > 1) {

//             if (!yangiArr.includes(i)) yangiArr.push(i)

//         }
//     }

//     return yangiArr

// }


// console.log(takrorlanganiTop(arr))



// 3-masala



// let arr = [9, 0, 1, 7, 5, 4, 3, 2, 1, 1]

// function formatla(arr) {
//     let natija = ""
//     if (arr.length == 10) {
//         natija = "(" + arr.slice(0, 3).join("") + ")" + " " + (arr.slice(3, 6).join("")) + "-" + arr.slice(6, 10).join("")
//     } else {
//         return "uzunligi togri kelmadi"
//     }
//     return natija
// }
// console.log(formatla(arr))



// 4-masala


// input: 4567
// output: 4 + 5 + 6 + 7 = 22

// let son = 4567

// function sonlarYigindisiniTop(son) {
//     let natija = 0
//     son = String(son)
//     for (let i of son) {
//         natija += Number(i)
//     }
//     return natija
// }

// console.log(sonlarYigindisiniTop(son))




// 5-masala



// let arr = [1, 2, 2, 3, 4, 4, 5];


// function bitmartaQatnashgan(arr) {
//     arr.forEach((e, i) => {
//         arr.splice(i, 1)
//         arr.includes(e) ? arr.splice(arr.indexOf(e), 1) : arr.push(e)
//     });
//     return arr;
// }

// console.log(bitmartaQatnashgan(arr))



// 6-masala



// let arr = ['olma', 'non', 'kitob', 'alla'];

// function palindromTop(arr) {
//     let natija = []
//     for (let i of arr) {
//         let j = i.split("").reverse().join("")
//         if (i == j) {
//             natija.push(i)
//         }
//     }
//     return natija
// }

// console.log(palindromTop(arr))





// 7-masala


// let input = "National Aeronautics Space Administration";


// function qisqartmaYasa(input) {
//     let natija = ""
//     input = input.split(" ")
//     for (let i of input) {
//         natija += i[0].toUpperCase()

//     }

//     return natija
// }

// console.log(qisqartmaYasa(input))






// 8-masala


// let input = "Men JavaScript o'rganmoqdaman";

// function teskatiQil(input) {
//     input = input.split(" ").reverse().join(" ")
//     return input
// }

// console.log(teskatiQil(input))




// 9-masala


// let input = "121212";


// function harflarniTekshr(input) {
//     input = Number(input)

//     if (isNaN(input)) {
//         return false
//     } else {
//         return true
//     }
// }

// console.log(harflarniTekshr(input))




// 10-masala



// let input = [{ name: "Ali", age: 22 }, { name: "Vali", age: 19 }, { name: "Sami", age: 25 }];


// function yoshBoichaSarala(input) {
//     input = input.sort((a, b) => a.age - b.age)
//     return input
// }

// console.log(yoshBoichaSarala(input))




// 11-masala

// let son = 1;

// function tuplikaTekshir(son) {
//     if (son == 2) return "tup son"
//     let count;
//     for (let i = 2; i < Math.floor(Math.sqrt(son)) + 1; i++) {
//         count = 0
//         if (son % i == 0) {
//             count++
//         }
//     }

//     if (count == 0) {
//         return 'bu son tup son'
//     } else {
//         return "bu son tup son emas"
//     }

// }
// console.log(tuplikaTekshir(son))






// 12-masala



// let inputArr = [3, 5, 7, 2, 8];


// function ikkinchiKattaSon(inputArr) {
//     inputArr = inputArr.sort((a, b) => a - b)
//     inputArr = inputArr.at(-2)
//     return inputArr
// }

// console.log(ikkinchiKattaSon(inputArr))




// 13-masala


// let input = "javascript";


// function engKopHarfniTop(input) {
//     input = input.split("")
//     let natija = []
//     for (let i of input) {
//         let count = 0;
//         for (let j of input) {
//             if (i == j) count++;
//         }
//         natija.push([count, i])
//     }
//     natija = natija.sort((a, b) => a[0] - b[0])
//     natija = natija.at(-1)[0]
//     return natija
// }

// console.log(engKopHarfniTop(input))






// 14-masala


// let arr = [1, 2, 3, 4, 5, 6]


// function juftlatYigindisi(arr) {
//     let natija = 0;
//     for (let i of arr) {
//         if (i % 2 == 0) natija += i
//     }
//     return natija
// }

// console.log(juftlatYigindisi(arr))



// 15-masala



// let input = "salom dunyo";


// function unlilarniAjrat(input) {
//     let unlilar = "aueoi"
//     let natija = ""
//     for (let i of input) {
//         if (unlilar.includes(i)) {
//             natija += i
//         }
//     }
//     return natija

// }

// console.log(unlilarniAjrat(input))






// 16 - masala



// let arr = [1, 2, 3, 4, 5];
// let k = 2;

// function aylantir(arr, k) {
//     let a = arr.splice(arr.length - k, k)
//     arr.unshift(...a)
//     return arr
// }

// console.log(aylantir(arr, k))
