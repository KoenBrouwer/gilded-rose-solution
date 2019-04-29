require("console.table");

const {expect} = require('chai');
const sampleData = require("../src/sampleData");
const {Shop, Item} = require('../src/gildedRose.js');

/**
 * Just a wrapper function that spits out a new Shop with the items from the sampleData.
 * @return {Shop}
 */
const initNewShop = () => {
	let items = sampleData.items.map(item => new Item(item.data, item.options));
	return new Shop(items);
};

describe("Gilded Rose", function() {

	it("shows a log of what happens in 30 days", () => {
		/* Initialize new Shop */
		let gildedRose = initNewShop();

		/* Loop 30 times */
		for(let i = 0; i < 30; i++){
			/* Age the shop by 1 day */
			gildedRose.doAge();

			/* And print a summary of the current state of the shop */
			gildedRose.summarize();
		}
	});

});