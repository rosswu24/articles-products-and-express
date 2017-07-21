/*jshint esversion: 6*/
const inventory = [];

	
function getAllProducts(){
	// console.log(inventory);
}

function getProductById(id){

}

function deleteById(id){

}

function createNewProduct(product){
	inventory.push(product);
	console.log('inventory', inventory);
	return inventory;
}

module.exports = {
	createNewProduct: createNewProduct,
	deleteById: deleteById,
	getProductById: getProductById,
	getAllProducts: getAllProducts
};





