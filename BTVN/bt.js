// ===== 1. Mảng sản phẩm =====
let products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 }
];

// ===== 2. Lấy ul =====
const productList = document.getElementById("product-list");

// ===== 3. Hàm render danh sách =====
function renderProducts() {

    // Xoá nội dung cũ trước khi render lại
    productList.innerHTML = "";

    products.forEach(function(product) {

        // Tạo li
        const li = document.createElement("li");

        // Tạo div
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        // Nội dung sản phẩm
        productDiv.innerHTML = `
            <p><strong>Tên:</strong> ${product.name}</p>
            <p><strong>Giá:</strong> ${product.price.toLocaleString()} VNĐ</p>
        `;

        // ===== 4. Tạo nút xoá =====
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xoá";
        deleteBtn.style.marginTop = "5px";

        // Sự kiện click xoá
        deleteBtn.addEventListener("click", function() {

            // Lọc ra sản phẩm KHÔNG trùng id
            products = products.filter(function(p) {
                return p.id !== product.id;
            });

            // Render lại sau khi xoá
            renderProducts();
        });

        // Gắn button vào div
        productDiv.appendChild(deleteBtn);

        // Gắn div vào li
        li.appendChild(productDiv);

        // Gắn li vào ul
        productList.appendChild(li);
    });
}

// ===== 5. Gọi hàm lần đầu =====
renderProducts();