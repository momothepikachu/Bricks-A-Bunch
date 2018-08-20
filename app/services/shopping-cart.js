import Ember from 'ember';

export default Ember.Service.extend({
	cart: [],
	addToCart(color, size, price){
		let item = {color: color, size: size, price: price}
		this.get('cart').pushObject(item);
		console.log(this.get('cart'))
	},
	getItems(){
		return this.get('cart');
	}
});
