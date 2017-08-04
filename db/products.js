/*jshint esversion: 6*/
const inventory = [];

function getAllProducts(){
	console.log('current inventory: ', inventory);
	return inventory;
}

function getProductById(itemId){
  console.log("current inventory: ", inventory);
  for (var i = 0; i < inventory.length; i++) {
    console.log("inventory id:", inventory[i].id, "item id: ", itemId);
    console.log("inventory id:", typeof inventory[i].id, "item id: ", typeof itemId);
    if (inventory[i].id === itemId) {
        console.log("found item: ", inventory[i]);
        return inventory[i];
    }
  }
}

function editById(itemId, newName, newPrice, newCount){
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].id === itemId) {
      console.log("inventory id:", inventory[i].id, "item id: ", itemId);
      console.log("item to edit:", inventory[i]);
        var itemIdx = inventory.indexOf(inventory[i]);
        inventory[itemIdx] = `{name: ${newName}, price: ${newPrice}, inventory: ${newCount}, id: itemId}`;
        console("changes made to inventory:", inventory);
        return inventory;
    }
  }
}

function deleteById(itemId){
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].id === itemId) {
      console.log("inventory id:", inventory[i].id, "item id: ", itemId);
      console.log("item to delete:", inventory[i]);
        var itemIdx = inventory.indexOf(inventory[i]);
        inventory.splice(itemIdx, 1);
        console.log("current inventory:", inventory);
        return inventory;
    }
  }
}

function createNewProduct(product){
	for(var i = 0; i <= inventory.length; i ++){
		product.id = i;
	}

	inventory.push(product);
	console.log('new product added:', product);
	return inventory;

}

module.exports = {

	createNewProduct,
	deleteById,
	getProductById,
	getAllProducts

};





