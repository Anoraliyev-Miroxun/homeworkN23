
const urlUser = "https://684a7d80165d05c5d358eecd.mockapi.io/api/users"

const urlBooks = "https://684a7d80165d05c5d358eecd.mockapi.io/api/books"






class Books {

    constructor(title, tarif) {

        this.createBook(title, tarif)
    }


    async createBook(title, tarif) {
        try {
            let res = await fetch(urlBooks, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    title,
                    tarif
                })
            })
            res = await res.json()
            // console.log(res)

        } catch (error) {
            console.log("Error fechda yoki tryda hatolik", error)
        }

    }





    async getBooks() {
        try {
            let res = await fetch(urlBooks)
            res = await res.json()
            return res
        } catch (error) {
            console.log("Error fechda yoki tryda hatolik", error)
        }
    }


    // bu metod ozi alohida ishlamaydi bu addPoduct uchun ishlaydi
    static async getBookById(id) {
        try {
            let res = await fetch(`${urlBooks}/${id}`)
            return res.ok
        } catch (error) {
            console.log("Error fechda yoki tryda hatolik", error)
            return false
        }
    }


}




class USER {
    constructor(username, password) {
        this.cerateUser(username, password)
    }

    async cerateUser(username, password) {
        try {
            let res = await fetch(urlUser, {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    books: []
                })
            })
            res = await res.json()
            // console.log(res)
        } catch (error) {
            console.log("Fetchdan hato keldi yoki boshqa joydan ", error)
        }
    }






    async addPoduct(idUser, idBook) {
        try {
            let booksGetById = await Books.getBookById(idBook)
            if (booksGetById) {
                let shuUser = await fetch(`${urlUser}/${idUser}`)
                if (shuUser.ok) {
                    shuUser = await shuUser.json()
                    shuUser.books.push(idBook)


                    await fetch(`${urlUser}/${idUser}`, {
                        method: "PUT",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify(shuUser)
                    })

                } else {
                    return ("Foydalanuvchi topilmadi")
                }


            } else {
                return ("bunday iddagi kitob topilmadi")
            }
            // console.log("qoshildi")
        } catch (error) {
            console.log("Bu yerda fetchda yoki try ichida hato bor", error)
            return 0
        }
    }



    async getPoduct(idUser) {
        try {

            let print = await fetch(`${urlUser}/${idUser}`)


            if (print.ok) {
                print = await print.json()
                let kitbolar = await fetch(urlBooks)
                kitbolar = await kitbolar.json()
                console.log("salom")
                for (let i of kitbolar) {
                    if ((print.books).includes(Number(i.id))) {
                        console.log(i)
                    }
                };

            } else {

                return "Bunday foydalanuchi topilmadi"

            }

        } catch (error) {

            console.log("Bu yerda fetchda yoki try ichida hato bor", error)

            return 0

        }
    }


    async getUser() {
        try {
            let res = await fetch(urlUser)
            res = await res.json()
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }



}




let kitob4 = new Books("choqintirgan ota", "boladi chidasa unchalik zor emas eakn")
let foydalanuchi4 = new USER("holmirbek", "1234")


foydalanuchi4.getUser()


// foydalanuchi4.addPoduct(1, 2)
// foydalanuchi4.getPoduct(1)
// kitob4.getBooks().then(console.log)




// let kitob = new Books("Tsaodifga aldanganlar", "Bu kitob hayotimizda tasodifni orni qanchalik katta ekanligin korsatip beradi")
// let foydalanuchi = new USER("Doniyor Nurdillayev", "1234")



// let kitob1 = new Books("otkan kunlar ", "Bu kitob zor")
// let foydalanuchi1 = new USER("zohid", "1234")



// let kitob2 = new Books("ikki shik orasi", "Bu kitob zor  ekan maza qilip oqidim")
// let foydalanuchi2 = new USER("Bunyot", "1234")





// let kitob3 = new Books("if qalasi mahbusi", "Bu kitob zor emas ekanku")
// let foydalanuchi3 = new USER("ozodbek", "1234")






