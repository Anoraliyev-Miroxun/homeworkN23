// 1. prototype bilan obyekt yaratish
// Masala:
// ● Car nomli konstruktor funksiyasini yozing.
// ● U brand, model va year xususiyatlariga ega bo'lsin.
// Car.prototype orqali getInfo metodini qo'shing, u quyidagi stringni qaytarsin:
// "Brand: Toyota, Model: Camry, Year: 2020"
// ● Bir nechta obyektlar yaratib, metodni chaqiring.






// function Moshina(model, brand, yili) {
//     this.model = model;
//     this.brand = brand;
//     this.yili = yili

// }

// Moshina.prototype.getInfo = function () {
//     console.log(`model : ${this.model}, brend : ${this.brand}, yili : ${this.yili}`)
// }

// const moshina2 = new Moshina("mers", "gelik", 2023)
// moshina2.getInfo();


// const moshina3 = new Moshina("gm", "damas", 2024)
// moshina3.getInfo();







// 2. __proto__ orqali prototip merosxo'rlik
// Masala:
// ● Animal degan obyekt yarating, unda makeSound metodi bo'lsin
//     (console.log("Some sound")).
// ● Dog degan yangi obyekt yarating va uning prototipini Animal ga o‘rnatish uchun
// __proto__ dan foydalaning.
// ● Dog obyektiga bark metodini qo‘shing(console.log("Woof!")).
// ● Dog orqali makeSound va bark metodlarini chaqirib ko‘ring.





// let Anima = {
//     name: "Dog",
//     makeSound: function () {
//         console.log("Som sound")
//     }
// }


// let dog = {

// }

// dog.__proto__ = Anima;

// dog.brak = function () {
//     console.log("wooff")
// }
// dog.brak();

// dog.makeSound();





// 3. Massivlar uchun o'z metodingizni qo'shing
// Masala:
// ● Array.prototype ga sum metodini qo‘shing, u massiv ichidagi sonlarni qo‘shib
// qaytarsin.
//     Masalan:
// let numbers = [1, 2, 3, 4, 5];
// ● console.log(numbers.sum()); // 15




// let numbers = [1, 2, 3, 4, 5];

// Array.prototype.sum = function () {
//     console.log(this.reduce((acc, itm) => acc += itm))
// }
// numbers.sum();












// 4. Prototip zanjiri tekshirish
// Masala:
// ● Person nomli konstruktor funksiya yozing, u name xususiyatini
// qabul qilsin.
// ● Person.prototype ga greet metodini qo‘shing(console.log("Hello,
// my name is " + this.name)).
// ● Employee nomli konstruktor funksiya yozing va Person dan meros
// qilib oling.
// ● Employee ning __proto__ orqali Person ning metodlarini ishlata
// olishini tekshiring.




// function person(name) {
//     this.name = name;
// }

// person.prototype.greet = function () {
//     console.log(`Hello my name is ${this.name}`)
// }

// function Employee() {
//     ishlaydi = true
// }

// Employee.greet = person.greet
// Employee.greet();




// 5. Object.create bilan yangi obyekt yaratish
// Masala:
// ● Car nomli obyekt yarating(brand va speed xususiyatlari bilan).
// ● Car ga drive metodini qo'shing (console.log(this.brand + " is
// driving at " + this.speed + " km / h")).
// ● Object.create orqali sportsCar obyektini yarating va speed ni 200
// ga o‘zgartiring.
// ● sportsCar.drive() ni chaqirib natijani tekshiring.
// Bu masalalar o'quvchilarning prototype va __proto__ mavzusini
// tushunishlarini mustahkamlashga yordam beradi! �






// let car = {
//     brand: "gm",
//     model: "damas",
//     speed: 200
// }

// car.drive = function () {
//     console.log(`${this.model} bu moshina ${this.speed} tezlik bilan yuradi`)
// }
// car.drive()

// let sportsCar = Object.create(car)
// sportsCar.speed = 201
// sportsCar.drive()




// + Bonus
// 1. Kitob klassini yaratish
// Masala:
// ● Book nomli class yozing.
// ● U quyidagi xususiyatlarga (property) ega bo‘lsin: title,
// author, year.
// ● getSummary nomli metod qo‘shing, u quyidagi stringni
// qaytarsin:
// "Title: The Alchemist, Author: Paulo Coelho, Year: 1988"
// ● Bir nechta kitob yaratib, metodni chaqiring



// class book {
//     title = "Tasodifga aldanganlar";
//     author = "Talip Nasim";
//     year = 2010;
// }

// book.prototype.getSummary = function () {
//     console.log(`Title: ${this.title}, author: ${this.author}, year: ${this.year}`)
// }

// class book1 extends book {
//     constructor(title, author, year) {
//         super(title, author, year);
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

// }
// const kitob = new book1("otkan kunlar", "Abdulla Qodiriy", 1954)
// kitob.getSummary()





// 2. Telefon klassini yaratish
// Masala:
// ● Phone nomli class yozing
// ● U quyidagi xususiyatlarga ega bo‘lsin: brand, model, price.
// call nomli metod qo‘shing, u console.log orqali quyidagini
// chiqarib bersin:
// "Calling from iPhone 13..."
// ● Phone klassidan obyekt yaratib, metodni chaqiring.
// Bu masalalar classni tushunish va oddiy obyektlar bilan
// ishlashga yordam beradi. �



class phone {
    brand = "samsung";
    model = "A16";
    price = 200
}

phone.prototype.call = function () {
    console.log(`Calling from ${this.model}...`)
}

const tel = new phone
tel.call()



