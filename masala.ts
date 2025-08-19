
// uyga vazifa

// 1-masala


interface user {
    id: number,
    fullName: string,
    isActive: boolean,
    role: "admin" | "user" | "guest"
}

const user1: user = {
    id: 1,
    fullName: "eshamt",
    isActive: true,
    role: "user"
};

const user2: user = {
    id: 2,
    fullName: "ishamt",
    isActive: false,
    role: "admin"
};

const user3: user = {
    id: 3,
    fullName: "beshmat",
    isActive: true,
    role: "user"
};
const user4: user = {
    id: 4,
    fullName: "deshamt",
    isActive: false,
    role: "user"
}

const users: user[] = [user1, user2, user3, user4];
// console.log(users);


// 2-masala



type productName = string;
type productPrice = number;
type productDiscount = number | null;

const product: [productName, productPrice, productDiscount] = ["olma", 2000, null];

// console.log(product);


// 3-masala


type lation = {
    latitude: number,
    longitude: number
};

const Toshkent: lation = {
    latitude: 43.234,
    longitude: 23.234
}


const olmaota: lation = {
    latitude: 43.234,
    longitude: 223.234
}


const qarshi: lation = {
    latitude: 423.234,
    longitude: 231.234
}

const joylashuv: lation[] = [Toshkent, olmaota, qarshi];
// console.log(joylashuv);


// 4-masala

type opration = "+" | "*" | "-" | "/";

function calculator(a: number, b: number, ishora: opration) {
    if (ishora === "*") {
        return a * b
    } else if (ishora === "/") {
        return a / b
    } else if (ishora === "+") {
        return a + b
    } else if (ishora === "-") {
        return a - b
    }
}

// console.log(calculator(2,3,"*"))



// 5-masala



class Animal {
    public name: string;
    protected age: number;
    private type: string;
    constructor(name: string, age: number, type: string) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    get getInfo() {
        return `Name:${this.name},Age:${this.age},type:${this.type}`
    }
};
const sharik = new Animal("sharik", 2, "dog");
// console.log(sharik.getInfo);

class Dog extends Animal {

}

const dogs = new Animal("reks", 2, "kuchk");
// console.log(dogs.getInfo);



// 6-masala


// type shot = "qosh" | "ayir";
class BankAcount {
    shot : "qosh" | "ayir"="qosh";
    readonly accountNumber: number;
    private balance: number;
    static bankName: string = "Asaka bank";
    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    };

    get getINfo() {
        return this.balance;
    };
    
    set setBalance(balance2: number) {
        if (this.shot === "ayir") {
            this.balance  -= balance2;

        }
        if (this.shot === "qosh") {
            this.balance += balance2;
        }
    };
};

// const bank = new BankAcount(1234123412341234, 2000);
// console.log(bank.getINfo);


// bank.shot="qosh";
// bank.setBalance=1000;

// console.log(bank.getINfo);



// // 7-masala


// type statuss="ACTIVE"| "INACTIVE"| "BLOCKED";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED"
}

interface users{
    id:number,
    username:string,
    email:string,
    status:Status
};


const foydalanavchi:users={
    id:2,
    username:"eshamt",
    email:"eshmat@gmail.com",
    status:Status.ACTIVE
}


const foydalanavchi1:users={
    id:3,
    username:"eshamt",
    email:"eshmat@gmail.com",
    status:Status.INACTIVE
}



// 8-masala



function generet<T>(value:T):T[]{
    return [value]
}

// console.log(generet<string>("hello"))




// git init && git remote add origin <remote-repo-url> 
// && git remote -v && git add . && git commit -m 'matn' 
// && git checkout -b 'branch-nomi' && git push -u origin 'branch-nomi'




