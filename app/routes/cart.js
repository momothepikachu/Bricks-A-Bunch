import Ember from 'ember';

export default Ember.Route.extend({
	cart: Ember.inject.service('shopping-cart'),
	model(){
		return this.get('cart').cart;
	}
});
