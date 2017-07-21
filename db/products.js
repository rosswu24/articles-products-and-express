/*jshint esversion: 6*/
const inventory = [];

	
function getAllProducts(){
	console.log('All Products in inventory: ', inventory);
	return inventory;
}

function getProductById(itemId){
  inventory.findIndex(x=> x.id ===itemId);
  

}

function deleteById(id){

}

function createNewProduct(product){
	for(var i = 0; i <= inventory.length; i ++){
		product.id = i;
	}
	inventory.push(product);
	console.log('New Product:', product);
	return inventory;
}

module.exports = {
	createNewProduct: createNewProduct,
	deleteById: deleteById,
	getProductById: getProductById,
	getAllProducts: getAllProducts
};





