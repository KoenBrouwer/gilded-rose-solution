const Item = require("./Item");

/**
 * Product > Item
 * @extends {Item} Extension of the Item class, that moves various responsibilities from the Shop to the Product.
 */
class Product extends Item {

	constructor(props, options) {
		let {name, sellIn, quality} = props;

		/* Initialize Item */
		super(name, sellIn, quality);

		/* Merge default options with the given options */
		this.configuration = {...this.defaultOptions, ...options};

		/* If the values should be validated initially, do so */
		if(!this.configuration.skipInitialValidation){
			/* Quick check of the passed values */
			this.validate();
		}

		/**
		 * Age of this Product in days
		 * @type {number}
		 */
		this.age = 0;

		// console.log(`New product: ${this.name}.`);
		// console.log(`* Should be sold after ${this.sellIn} days.`);
		// console.log(`* Initial quality: ${this.quality}.`);
		// console.log();
	}

	/** Method that degrades the quality of this Product, based on its configuration. */
	doAge() {
		/* When a day ends:
		[i] Once the sell by date has passed, Quality degrades twice as fast
		[i] The Quality of an item is never negative
		[i] "Aged Brie" actually increases in Quality the older it gets
		[i] The Quality of an item is never more than 50
		[i] "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
		[i] "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches
			[-] Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
			[i] Quality drops to 0 after the concert
		 */

		/* If a custom aging behaviour for this product was passed in the config, return the result of that custom function. */
		if(this.configuration.agingBehaviour){
			const doAge = require("./AgeBehaviours/" + this.configuration.agingBehaviour);

			if(typeof doAge === "function"){
				return doAge(this);
			}
			else{
				console.error(`ERROR: Custom ageBehaviour for Product "${this.name}" is not a valid function. Falling back to the default ageBehaviour.`);
			}
		}

		/* Age this Product by one day */
		this.age++;

		/* Skip legendary Items */
		if(this.configuration.legendary){
			return;
		}

		/* The degration rate of this Product is determined by its age and the "sellIn" number */
		let degrationRate = this.configuration.qualityDegrationRate;

		/* If the current age of this Product is higher than the number of days in which it should be sold */
		if(this.age >= this.sellIn){
			/* Double the degration rate */
			degrationRate *= 2;
		}

		/* Modify the quality by adding the degration rate to it */
		this.quality += degrationRate;

		this.validate();
	}

	/** Method that validates a bunch of values according to the rules as stated in the requirements. */
	validate() {
		/* Ensure that quality doesn't get below 0 */
		this.quality = (this.quality < 0) ? 0 : this.quality;

		/* Ensure that quality doesn't get above 50 */
		this.quality = (this.quality > 50) ? 50 : this.quality;
	}

	/** Method that just returns a bunch of properties as an object, to be stringified later for example */
	summarize() {
		return {
			name: this.name,
			sellInDays: this.sellIn,
			age: this.age,
			daysLeft: this.sellIn - this.age,
			quality: this.quality,
		};
	}

	/** A bunch of default options, that is the same for every base Product */
	get defaultOptions() {
		return {
			qualityDegrationRate: -1,
			legendary: false,
			skipInitialValidation: false,
			agingBehaviour: undefined,
		}
	}

}

module.exports = Product;