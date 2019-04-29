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

	old_updateQuality() {
		for(var i = 0; i < this.items.length; i++){
			if(this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'){
				if(this.items[i].quality > 0){
					if(this.items[i].name != 'Sulfuras, Hand of Ragnaros'){
						this.items[i].quality = this.items[i].quality - 1;
					}
				}
			}
			else{
				if(this.items[i].quality < 50){
					this.items[i].quality = this.items[i].quality + 1;
					if(this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){
						if(this.items[i].sellIn < 11){
							if(this.items[i].quality < 50){
								this.items[i].quality = this.items[i].quality + 1;
							}
						}
						if(this.items[i].sellIn < 6){
							if(this.items[i].quality < 50){
								this.items[i].quality = this.items[i].quality + 1;
							}
						}
					}
				}
			}
			if(this.items[i].name != 'Sulfuras, Hand of Ragnaros'){
				this.items[i].sellIn = this.items[i].sellIn - 1;
			}
			if(this.items[i].sellIn < 0){
				if(this.items[i].name != 'Aged Brie'){
					if(this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'){
						if(this.items[i].quality > 0){
							if(this.items[i].name != 'Sulfuras, Hand of Ragnaros'){
								this.items[i].quality = this.items[i].quality - 1;
							}
						}
					}
					else{
						this.items[i].quality = this.items[i].quality - this.items[i].quality;
					}
				}
				else{
					if(this.items[i].quality < 50){
						this.items[i].quality = this.items[i].quality + 1;
					}
				}
			}
		}

		return this.items;
	}
}

module.exports = Shop;