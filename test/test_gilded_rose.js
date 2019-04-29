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
			gildedRose.doAge();
			gildedRose.summarize();
		}
	});

	// it("quality of an item is never negative", () => {
	// 	/* Age the shop by x days */
	// 	gildedRose.doAge(100);
	//
	// 	/* Loop through all items and check if their quality is not lower than 0 */
	// 	for(let item of gildedRose.items){
	// 		expect(item.quality >= 0);
	// 	}
	//
	// 	gildedRose.summarize();
	// });

	// it("quality of an item is never above 50", () => {
	// 	/* Initialize new Shop */
	// 	let gildedRose = initNewShop();
	//
	// 	/* Age the shop by x days */
	// 	gildedRose.doAge(100);
	//
	// 	/* Loop through all items and check if their quality is not lower than 0 */
	// 	for(let item of gildedRose.items){
	// 		expect(item.quality <= 50);
	// 	}
	//
	// 	gildedRose.summarize();
	// });

});