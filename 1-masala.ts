// 1-masala



const arr: number[] = [23, 23, 53, 2, 67, 3, 6, 7];
function engKichikSon(arr: number[]) {
    let kichik: number = arr[0]
    for (let i of arr) {
        if (kichik > i) {
            kichik = i
        }
    }
    return kichik
}


// console.log(engKichikSon(arr));




// 2-masala

const arr1: string[] = ["hello", "world", "salom", "dunyo"];

const natija = arr1.join(",");
const natija1 = arr1.toString();
// console.log(natija1)
// console.log(natija);




// 3-masala




const login: [string, Date, boolean] = ["eshamtov", new Date(), true];


function otidimi(login: [string, Date, boolean]) {
    if (true === login[2]) {
        return `${login[0]} bu foydalanauvchi royhatdan otgan`
    }
    return `${login[0]} bu foydalanauvchi royhatdan otmagan`
}

// console.log(otidimi(login));


// 4-masala


type phoneModel = {
    brand: string,
    model: string,
    price: number
};

const phone1: phoneModel = {
    brand: 'iphone',
    model: "apple",
    price: 1200
}

const phone2: phoneModel = {
    brand: 'samsung',
    model: "samsung",
    price: 1400
}

const phone3: phoneModel = {
    brand: 'redmi',
    model: "redmi",
    price: 700
}


const phones: phoneModel[] = [phone1, phone2, phone3];


function engQimat(arr: phoneModel[]) {
    let max = arr[0]
    for (let i of arr) {
        if (i.price > max.price) {
            max = i;
        }
    }
    return max
}



// console.log(engQimat(phones));



// 5-masala

type studenModel = {
    name: string,
    age: number,
    isActive: boolean
};


const student1: studenModel = {
    name: "eshamt",
    age: 23,
    isActive: true
}


const student2: studenModel = {
    name: "toshmat",
    age: 23,
    isActive: false
}


const student3: studenModel = {
    name: "ishamt",
    age: 23,
    isActive: true
}


const talabalar: studenModel[] = [student1, student3, student2];



function active(arr: studenModel[]) {
    let natija: object[] = []
    for (let i of arr) {
        if (i.isActive === true) {
            natija.push(i)
        }
    }

    return natija
}


// console.log(active(talabalar));



// 6-masala





function qaytar(qiymat: string | number): number {
    if (typeof qiymat === "string") {
        return parseInt(qiymat);
    } else {
        return qiymat
    }
}


// console.log(qaytar("23423"))




// 7-masala
// const input:any = prompt("Iltimos, biror son kiriting:"); 

const input: any = 234

function tekshir(qiymat: any) {
    if (typeof qiymat === "boolean") {
        return true
    } else if (typeof qiymat === "string") {
        return qiymat.length
    } else {
        return `krtilgan malumot turi hato`
    }
}

// console.log(tekshir(input))



// 8-masala


const yosh: number = 23

function kattami(yosh: number): boolean {
    if (yosh > 18) {
        return true
    }
    return false
}

// console.log(kattami(yosh));


type ismModule = string | null | undefined;

let ism: ismModule = "eshmat";

function bormiIsmi(ism: ismModule) {
    if (typeof ism === "string") {
        return ism
    }

    return 'Mehmon'
}

// console.log(bormiIsmi(ism));




// 9-masala

const nameeee:string="eshmat"

function hushKel(name:string):void{
    console.log(`hush kelipsz ${name} toga`)
}



// hushKel(nameeee)



// 10-masala




function hatobu():never{
    throw new Error("hatobu da hato roy berdi ")
}



// hatobu();




// qoshimcha fibonachi

const chegara:number=5;


function fibonachi(chegara:number){
    const natija:number[]=[]
    let fib1:number=0;
    let fib2:number=1;
    natija.push(fib1,fib2)
    for(;;){
        let fib3:number=fib1+fib2;
        fib1=fib2;
        fib2=fib3
        natija.push(fib3)
        if(chegara==natija.length){
            return natija
        }
    }
}


// console.log(fibonachi(chegara));


// qoshimcha 22222


interface product {
    id:number,
    name:string,
    price:number
}



const product1:product={
    id:1,
    name:"iphone",
    price:1000
}


const product2:product={
    id:1,
    name:"redmi",
    price:10
}

const product3:product={
    id:3,
    name:"samsun",
    price:1000
}

const product4:product={
    id:4,
    name:"honor",
    price:1
}

const arrr:product[]=[product1,product2,product3,product4];


function toppp(arr:product[]){
    const natija:object[]=[]
    for(let i of arr){
        if(i.price>100){
            natija.push(i);
        }
    }

    return natija;
}


// console.log(toppp(arrr));






// git init && git remote add origin <remote-repo-url> 
// && git remote -v && git add . && git commit -m 'matn'
//  && git checkout -b 'branch-nomi' && 
// git push -u origin 'branch-nomi'


