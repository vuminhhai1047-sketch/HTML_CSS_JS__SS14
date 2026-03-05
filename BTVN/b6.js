const product = [
    {id: 1 , name: "Bánh Chưng" , price: 150000},
    {id: 2 , name: "Giò Lụa" , price: 180000},
    {id: 3 , name: "Cành Đào" , price: 500000},
    {id: 4 , name: "Mứt Tết" , price: 120000},
    {id: 5 , name: "Bao Lì Xì" , price: 25000},
    {id: 6 , name: "Dưa Hấu Tết" , price: 80000}
];


const renderProduct = () => {

    const list = document.getElementById("product-list");
    list.innerHTML = "";

    product.forEach(product => {

        let li = document.createElement("li");

        li.innerText = `
            Tên: ${product.name} - Giá: ${product.price}
            `;

        list.appendChild(li);
    });
};

renderProduct();


document.getElementById("sort-asc").addEventListener("click", () => {

    product.sort((a, b) => a.price - b.price);

    renderProduct(product);

});


document.getElementById("sort-desc").addEventListener("click", () => {

    product.sort((a, b) => b.price - a.price);

    renderProduct(product);

});






