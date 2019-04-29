class Item {

	/**
	 * Item
	 * @param {string} name Name of the product
	 * @param {int} sellIn Number of days in which this Item should be sold
	 * @param {int} quality Describes how valuable this Item is
	 */
	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

module.exports = Item;