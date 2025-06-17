

let loading = document.createElement("p")
loading.textContent = "Loading..."
loading.id = "loading"

let body = document.querySelector("body")
body.id = "body"
body.appendChild(loading)




let btnWrapper = document.createElement("div");
btnWrapper.style.textAlign = "center";
btnWrapper.style.margin = "30px 0";

let btn = document.createElement("button");
btn.textContent = "Yana";
btn.id = "btn";
btn.style.display = "none";
btn.style.padding = "10px 20px";
btn.style.fontSize = "16px";
btn.style.cursor = "pointer";

btnWrapper.appendChild(btn);
body.appendChild(btnWrapper);



let allProducts = [];
let currentIndex = 0;
let perPage = 3;



fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(json => {
        allProducts = json.products;
        getElements();
        btn.style.display = "block";
    });


btn.addEventListener("click", () => {
    getElements();
});


async function getElements() {
    try {

        let divQator;
        let slicedProducts = allProducts.slice(currentIndex, currentIndex + perPage);

        slicedProducts.forEach((element, i) => {
            if ((currentIndex + i) % 3 === 0) {
                divQator = document.createElement("div");
                divQator.className = 'divQator';
                body.appendChild(divQator);
            }

            let div = document.createElement("div");
            div.className = "div";
            div.innerHTML = `<img src="${element.images}" alt="">`;

            divQator.appendChild(div);
        });


        currentIndex += perPage;

        if (currentIndex >= allProducts.length) {
            yanaBtn.style.display = "none";
        }

        loading.style.display = "none";

        body.appendChild(btnWrapper);

    } catch (error) {
        console.log('tryda yo  fechta hatolik', error)
    }
    loading.style.display = "none";

}






