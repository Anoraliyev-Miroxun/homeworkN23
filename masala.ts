// 1-masala

// uyga vaizfalar


abstract class Transport {
    abstract movi(): void;
}

class Car extends Transport {
    movi(): void {
        console.log("moshina yolda yuradi")
    }
};

class Plane extends Transport {
    movi(): void {
        console.log("samalyot osamonda uchadi")
    }
};

class Bike extends Transport {
    movi(): void {
        console.log("bike tez yuradi")
    }
};


const car = new Car();
const plane = new Plane();
const bike = new Bike();

// console.log(car.movi());
// console.log(plane.movi());
// console.log(bike.movi());




// 2-masala



abstract class Shape {
    abstract area(qiyamt: number, qiyamt2?: number): number;
}


class Doira extends Shape {
    area(radus: number): number {
        const maydon = 3.1 * radus;
        return maydon;
    }
}

class Tortburchak extends Shape {
    area(qiyamt: number, qiyamt2: number): number {
        return qiyamt * qiyamt2
    }
}


class Uchburchak extends Shape {
    area(qiyamt: number, qiyamt2: number): number {
        return 0.5 * qiyamt * qiyamt2
    }
}


const shapes: Shape[] = [
    new Doira(),
    new Tortburchak(),
    new Uchburchak()
]

// console.log(shapes[0]?.area(5))
// console.log(shapes[1]?.area(2,4))
// console.log(shapes[2]?.area(2,4))




// 3-masala



abstract class Animals {
    abstract ovoz(): string;
};


class Cow extends Animals {
    ovoz(): string {
        return "Mu mu mu mu"
    }
}

class Dog extends Animals {
    ovoz(): string {
        return "wow wow wow"
    }
}


class Cat extends Animals {
    ovoz(): string {
        return "myov miyov miyov"
    }
}


const animals: Animals[] = [
    new Cow(),
    new Dog(),
    new Cat()
]

// for(let i of animals){
//     console.log(i.ovoz());
// }



// 4-masala


interface user {
    name: string,
    email?: string,
    password?: string,
    age?: number
};


const user1: Required<user> = {
    name: "eshmat",
    email: "eshamt@gmail.com",
    password: "eshamt123!",
    age: 23
};



// 5-masala


function users(user:user,update?:Partial<user>):user{
    return {...user,...update}
};

// console.log(users({ name: "Ali", email: "ali@gmail.com", age: 25 },{age:23}));



// 6-masala


const users33:Pick<user,"name"|"email">={
    name:"eshamt",
    email:"eshamt@gmail.com"
};

// console.log(users33);


const users22:Omit<user,"password">={
    name:"eshamt",
    email:"eshmat@gmail.com",
    age:23
}

// console.log(users22)



// 7-masala



type Status = "pending" | "success" | "failed";

type users44=Exclude<Status,"pending">;

const status:users44="success";


type users55=Extract<Status,"success"|"pending">;

const statusss:users55="pending";



// 8-masala



type Role = "admin" | "editor" | "viewer";


const admin:Record<Role,string[]>={
    admin:["korshi","ochish","ozgartish",],
    editor:["korshi","ozgartrish"],
    viewer:["korish"]
}


// 9-masala



type MaybeName = string | null | undefined;


const data:NonNullable<MaybeName>="data";



// 10-masala



function calculator(a:number,b:number){
return a*b;
}




type funcType=ReturnType<typeof calculator>;

type funcTypeParam=Parameters<typeof calculator>;


const argument:funcTypeParam=[1,3];

const natija:funcType=calculator(...argument);
// console.log(natija);





// git init && git remote add origin <remote-repo-url> && 
// git remote -v && git add . && git commit -m 'matn' &&
//  git checkout -b 'branch-nomi' && git push -u origin 'branch-nomi'
