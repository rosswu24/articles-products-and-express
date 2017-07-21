/*jshint esversion: 6*/
const inventory = [];

function getAllProducts(){
	console.log('current inventory: ', inventory);
	return inventory;
}

function getProductById(itemId){
  inventory.findIndex( x => x.id === itemId);
  console.log('found item id: ' + itemId);
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





