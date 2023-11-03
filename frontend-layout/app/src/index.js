import {
  getProductList,
  getProductDetail,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./api/product.js";

let store = {
  productDetail: null,
};

// SHOW PRODUCT LIST
const renderProductList = async () => {
  const list = await getProductList();
  // console.log('list', list);

  const contentHtml = list
    // .reverse()
    .map(
      (item, index) => `<tr>
    <th scope="row">${item.id}</th>
    <td>${item.name}</td>
    <td>${item.amount}</td>
    <td>${item.price}</td>
    <td>${item.sale}</td>
    <td>
      <button type="button" class="btn btn-outline-danger"
      onclick="handleDelete('${item.id}')"
      >
        Delete
      </button>

      <button
        type="button"
        class="btn btn-outline-info"
        data-toggle="modal"
        data-target="#productModal"
        onclick="handleEdit('${item.id}')"
      >
        Edit
      </button>
    </td>
  </tr>`
    )
    .reduce((sumString, item) => (sumString += item), "");
    
  document.getElementById("tbody").innerHTML = contentHtml;
};
renderProductList();

// EDIT FUNCTION
const handleEdit = async (id) => {
  document.getElementById("title-model").innerHTML = "Edit Product";
  document.getElementById("addProduct").style["display"] = "none";
  document.getElementById("updateProduct").style["display"] = "block";

  const product = await getProductDetail(id);

  document.getElementById("name").value = product.name;
  document.getElementById("amount").value = product.amount;
  document.getElementById("price").value = product.price;
  document.getElementById("sale").value = product.sale;

  store.productDetail = product;
};

window.handleEdit = handleEdit;

// POP UP ADD PRODUCT
document.getElementById("btnPopupModalAdd").addEventListener("click", () => {
  document.getElementById("title-model").innerHTML = "Add Product";
  document.getElementById("addProduct").style["display"] = "block";
  document.getElementById("updateProduct").style["display"] = "none";

  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("price").value = "";
  document.getElementById("sale").value = "";
});

// ADD FUNCTION
document.getElementById("addProduct").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const amount = +document.getElementById("amount").value;
  const price = +document.getElementById("price").value;
  const sale = document.getElementById("sale").value;
  const product = { name, amount, price, sale };

  await createProduct(product);
  await renderProductList();

  $("#modalMessage").modal("show");
  $("#productModal").modal("hide");
});

// UPDATE FUNCTION
document.getElementById("updateProduct").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const amount = +document.getElementById("amount").value;
  const price = +document.getElementById("price").value;
  const sale = document.getElementById("sale").value;
  const product = { name, amount, price, sale };

  const { id } = store.productDetail;
  
  await updateProduct(id, product);

  await renderProductList();
  $("#modalMessage").modal("show");
  $("#productModal").modal("hide");
});

// DELETE FUNCTION
const handleDelete = async (id) => {
  await deleteProduct(id);
  await renderProductList();
  $("#modalMessage").modal("show");
};
window.handleDelete = handleDelete;
