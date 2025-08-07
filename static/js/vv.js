
// Sample data (in place of database)
let products = [
 
];

// Function to view all products
function viewProducts() {
  let productList = document.createElement('ul');
  products.forEach((product) => {
    let listItem = document.createElement('li');
    listItem.textContent = `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`;
    productList.appendChild(listItem);
  });
  document.body.appendChild(productList);
}

// Function to add a product
function addProduct() {
  let name = prompt('Enter product name:');
  let price = prompt('Enter product Price:');
  let id = products.length + 1; // Simple ID increment
  products.push({ id, name, price });
  alert('Product added successfully');
}

// Function to update a product
function updateProduct() {
  let productId = prompt('Enter product ID to update:');
  let product = products.find((p) => p.id === parseInt(productId));
  if (product) {
    let newName = prompt('Enter new product name:', product.name);
    let newPrice = prompt('Enter new product price:', product.price);
    product.name = newName;
    product.price = newPrice;
    alert('Product updated successfully');
  } else {
    alert('Product not found');
  }
}

// Function to delete a product
function deleteProduct() {
  let productId = prompt('Enter product ID to delete:');
  let productIndex = products.findIndex((p) => p.id === parseInt(productId));
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    alert('Product deleted successfully');
  } else {
    alert('Product not found');
  }
}
