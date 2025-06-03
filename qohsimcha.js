class Bank {
    costomer = new Map();

    auth(userN, parssword = -1) {
        let javob = this.costomer.get(userN)
        return javob ? (javob.parssword == parssword ? "togri2" : true) : false
    }


    register(userName, name, parssword) {
        if (this.auth(userName) != false) return `Bunday foydalanuvchi oldin royhatdan otgan`
        this.costomer.set(userName, { id: this.costomer.size + 1, name, parssword, balans: 0 })
    }


    depozid(userName, parssword, pul) {

    }





    withdrow(userName, parssword, pul) {


    }





    showdata() {
        this.costomer.forEach((v, k) => {
            console.log(k, v)
        })
    }

}

let royhat = new Bank()
royhat.register(`jam`, "doniyor", 1234)
royhat.register(`jam`, "doniyor", 1234)
royhat.register(`jan`, "doniyor", 1234)

royhat.showdata()
console.log("------------------")
console.log(royhat.costomer)

// console.log(Bank.costomer)