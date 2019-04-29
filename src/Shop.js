class Shop {
	constructor(items = []) {
		/**
		 * @property {[Product]} items
		 */
		this.items = items;
		this.age = 0;

		console.log("Created new shop.");
		this.summarize();
	}

	/**
	 * Method that ages the shop for {nDays} days.
	 * @param {int} nDays
	 */
	doAge(nDays = 1) {
		console.log(`Aging this Shop for ${nDays} day(s)...`);
		for(let i = 0; i < nDays; i++){
			this.updateQualityOfAllItems();
		}

		this.age += nDays;
	}

	updateQualityOfAllItems() {
		this.items.map(item => item.doAge());
	}

	summarize() {
		const shopStats = {
			age: this.age + " days",
			numberOfItems: this.items.length + " items",
		};

		console.log();
		console.table("== Shop statistics ==", shopStats);

		/* Summarize all items in the Shop */
		const items = this.items.map(item => item.summarize());
		console.table("== Items in shop ==", items);
		console.log();
		console.log();
	}

}

module.exports = Shop;