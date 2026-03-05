let products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 }
];

let currentId = null; 

const renderData = () => {

    const list = document.getElementById("product-list");
    list.innerHTML = "";

    products.forEach(product => {

        let li = document.createElement("li");

        li.innerHTML = `
            ${product.name} - ${product.price} VND
            <button onclick="handleEdit(${product.id})">Sửa</button>
            <button onclick="handleDelete(${product.id})">Xóa</button>
        `;

        list.appendChild(li);
    });
};

renderData();

document.getElementById("product-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("product-name").value.trim();
        let price = document.getElementById("product-price").value.trim();

        if (!name || !price) {
            alert("Nhập đầy đủ thông tin");
            return;
        }

        let newProduct = {
            id: Date.now(),
            name: name,
            price: Number(price)
        };

        products.push(newProduct);

        document.getElementById("product-name").value = "";
        document.getElementById("product-price").value = "";

        renderData();
    });

const handleDelete = (id) => {

    let index = products.findIndex(p => p.id === id);

    if (index !== -1) {
        products.splice(index, 1);
        renderData();
    }
};

const handleEdit = (id) => {

    let product = products.find(p => p.id === id);

    document.getElementById("product-name").value = product.name;
    document.getElementById("product-price").value = product.price;

    currentId = id;
};

document.getElementById("update-btn")
    .addEventListener("click", function() {

        if (currentId === null) {
            alert("Chưa chọn sản phẩm để cập nhật");
            return;
        }

        let name = document.getElementById("product-name").value.trim();
        let price = document.getElementById("product-price").value.trim();

        let product = products.find(p => p.id === currentId);

        product.name = name;
        product.price = Number(price);

        currentId = null;

        document.getElementById("product-name").value = "";
        document.getElementById("product-price").value = "";

        renderData();
});