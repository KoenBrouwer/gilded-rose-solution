/**
 * Custom aging behaviour function for backstagePass Items.
 * @param item
 */
const doAge = (item) => {

	/* Add a day */
	item.age++;

	const remainingDays = item.sellIn - item.age;

	/* If the age is higher than or equal to the number of sellIn days, quality drops to 0 */
	if(remainingDays <= 0){
		item.quality = 0;
	}
	/* When there are 10 or less remaining days */
	else if(remainingDays > 0 && remainingDays <= 10){
		/* Item quality will increase by 2 */
		item.quality += 2;

		/* When there are 5 or less remaining days */
		if(remainingDays > 0 && remainingDays <= 5){
			/* Item quality will increase by 3 */
			item.quality += 3;
		}
	}
	else{
		item.quality += item.configuration.qualityDegrationRate;
	}


	item.validate();

};

module.exports = doAge;