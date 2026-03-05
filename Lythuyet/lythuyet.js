


  console.log(document);
  console.log( {document} );


// element : Các thẻ
// Cách lấy các cái thẻ trong js

// getElementById
// 




let itemElement = document.getElementById("item_01");

console.log(itemElement);

let ulElement = document.getElementById("list");

console.log(ulElement);


let listItemElement = document.getElementsByClassName("item");

console.log(listItemElement);

console.log(Array.from(listItemElement));


Array.from(listItemElement).forEach((element) => {
    console.log(element.innerText);
});


let listDivElement = document.getElementsByTagName("ul"); // chỉ nhận thẻ

console.log(listDivElement);

let firstElement = document.querySelector("#item_01");




let listElement = document.getElementById("list");
console.log(listElement.innerText);
console.log(listElement.innerHTML);
console.log(listElement.textContent);  // không bị ảnh hưởng css

let itemChangeElement = document.getElementById("item_01");
itemChangeItem.innerText = "Xem phim";

itemChangeElement.classList.add("delete");
itemChangeElement.classList.remove("item_v1");
itemChangeElement.classList.contains("delete");


itemChangeElement.style.color = "blue";


 // getAttribute là lấy đường link ra 
 // setAttribute là gán lại giá trị cho đường link 
 // style như css mà làm được 1 cái
 // classList 

