var productList = [];

var name1 = document.getElementById("productName");
var category1 = document.getElementById("productCategory");
var price1 = document.getElementById("productPrice");
var description1 = document.getElementById("productDescription");


if (localStorage.getItem("allproducts") != null) {
    productList = JSON.parse(localStorage.getItem("allproducts"));
    dispalyProducts();
}

function add() {

    var productobj1 = {

        name: name1.value,
        category: category1.value,
        price: price1.value,
        description: description1.value,
    }

    productList.push(productobj1);
    localStorage.setItem('allproducts', JSON.stringify(productList));

    dispalyProducts();


    document.getElementById("productName").value = '';
    document.getElementById("productCategory").value = '';
    document.getElementById("productPrice").value = '';
    document.getElementById("productDescription").value = '';

}

function dispalyProducts() {
    var container1 = ``;

    if (productList.length < 1) {
        container1 += `
    <tr>
      
   </tr> 
    `;
        document.getElementById('myTableo').innerHTML = container1;
    } else {
        for (i = 0; i < productList.length; i++) {
            container1 += `
<tr>
  <td>${i+1}</td>
  <td>${productList[i].name}</td>
  <td>${productList[i].category}</td>   
  <td>${productList[i].price}</td>
  <td>${productList[i].description}</td>
  <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update</button></td>
  <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
</tr> 
`;
            document.getElementById('myTableo').innerHTML = container1;
        }
    }


}



function deleteProduct(indexdelete) {
    if (productList.length > 1) {
        productList.splice(indexdelete, 1);
        localStorage.setItem('allproducts', JSON.stringify(productList));
        dispalyProducts();

    } else {
        productList.length = 0;

        localStorage.setItem('allproducts', JSON.stringify(productList));
        dispalyProducts();

    }
}

var arrayindexoo;

function updateProduct(indexupdate) {

    document.getElementById("productName").value = productList[indexupdate].name;
    document.getElementById("productCategory").value = productList[indexupdate].category;
    document.getElementById("productPrice").value = productList[indexupdate].price;
    document.getElementById("productDescription").value = productList[indexupdate].description;


    document.getElementById("main-btn").setAttribute("onClick", "updateproductafter();");
    document.getElementById("main-btn").innerHTML = "Update";

    window.scrollTo(0, 0);

    var arrayindexupdate = indexupdate;
    arrayindexoo = arrayindexupdate;

}




function updateproductafter() {

    var productobj2 = {

        name: name1.value,
        category: category1.value,
        price: price1.value,
        description: description1.value,
    }



    productList.splice(arrayindexoo, 1, productobj2);


    localStorage.setItem('allproducts', JSON.stringify(productList));

    dispalyProducts();

    document.getElementById("main-btn").setAttribute("onClick", "add();");
    document.getElementById("main-btn").innerHTML = "Add Product";

}






function clearo() {
    productName.value = '';
    productCategory.value = '';
    productPrice.value = '';
    productDescription.value = '';

}






























// function o(){

//     var namee = document.getElementById("productName").value;
//     var category = document.getElementById("productCategory").value;
//     var price = document.getElementById("productPrice").value;
//     var description = document.getElementById("productDescription").value;



//     var t = 0;
//      var product = {indexo:t ,productName:namee, productCategory:category, productPrice:price, productDescription:description};

//     // console.log(product);

//     localStorage.setItem("producto",JSON.stringify(product));

//     var producto2 =JSON.parse(localStorage.getItem('producto'));


//     var index3 = producto2.indexo;
//     var prouctName3 =  producto2.productName;
//     var productCategory3 =  producto2.productCategory;
//     var productPrice3 = producto2.productPrice;
//     var productDescription3 =  producto2.productDescription;

//    var z = `<tr>
//    <td>${index3}</td>
//    <td>${prouctName3}</td>
//    <td>${productCategory3}</td>
//    <td>${productPrice3}</td>
//    <td>${productDescription3}</td>
//    <td><button class="btn btn-outline-warning">Update</button></td>
//    <td><button class="btn btn-outline-danger">Delete</button></td>
//  </tr>`

//  localStorage.setItem("localo",JSON.stringify(z));
//  console.log(localStorage.getItem("localo"));
//   var n = document.getElementById("myTableo").innerHTML += JSON.parse(localStorage.getItem("localo"));

//   localStorage.setItem("localo2",n);
// // console.log(u);
// // localStorage.setItem("save",JSON.stringify(u))

// //  for(i=0;i<=t;i++){
// //     localStorage.setItem("index",i,"producto",JSON.stringify(product));
// //  }