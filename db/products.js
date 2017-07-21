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

  // inventory.findIndex( x => x.id === itemId);
  // console.log('found item id: ' + itemId);
  // want to return whole obj

}

function deleteById(id){

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





