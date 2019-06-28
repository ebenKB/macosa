import Component from '@ember/component';
import { set } from '@ember/object';
import $ from 'jquery';

export default Component.extend({

	didInsertElement() {
		$('.ui.accordion').accordion({ "exclusive": true});
	},

	options : null,
	init() {
		this._super(...arguments);
		set(this, 'menus', 
			[
				{
					name: 'Macosa',
					submenus: [
						{
							name: 'Add item',
							link: 'item',
						},
						{
							name: 'Review item',
							link: 'Review',
						}
					]
				},
				{
					name: 'Marketing',
					submenus: [
						{
							name: 'New Sales',
							link: 'sales',
						}
					]
				}
			]
		);
	}
});
