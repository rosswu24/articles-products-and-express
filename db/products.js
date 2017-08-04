/*jshint esversion: 6*/
const inventory = [

  {name: 'pants', price: "$55", inventory: "80", id: "0"},
  {name: 't-shirt', price: "$20", inventory: "100", id: "1"},
  {name: 'socks', price: "$7", inventory: "30", id: "2"},
  {name: 'tie', price: "$14", inventory: "5", id: "3"},

];

function getAllProducts(){
	console.log('current inventory: ', inventory);
	return inventory;
}

function getProductById(itemId){
	console.log("itemid " + itemId);
  for (var i = 0; i < inventory.length; i++) {
	if (inventory[i].id == itemId) {
  	console.log("inventory " + inventory[i].id);
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
		console.log(newName, newPrice, newCount);
		inventory[itemIdx] = {name: newName, price: newPrice, inventory: newCount, id: itemId};
		console.log("changes made to inventory:", inventory);
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
  editById,
	getAllProducts

};





