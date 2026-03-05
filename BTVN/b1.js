
let products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 }
];



const renderData = () => {

    const listProduct = document.getElementById("product-list");


    listProduct.innerHTML = "";

    products.forEach((s) => {

        let itemElement = document.createElement("li");

        itemElement.innerText = `ID: ${s.id} Name: ${s.name} Price: ${s.price}`;
        listProduct.appendChild(itemElement);


    });

}


renderData();





