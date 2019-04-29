# My solution to the Gilded Rose Kata

My answer to the [Gilded Rose Kata by EmilyBache](https://github.com/emilybache/GildedRose-Refactoring-Kata) in Javascript.
(Started off in `/js-mocha`)

## Changes and thoughts
I've done quite some modifications, some of which I have summarized below, with some of my thoughts, so that you understand why I made that change.

- Moved the `Item` class to a seperate file.
> Because that's how it should be in EVERY project that I lead.

- Created a new Product class, which extends/augments the `Item` class .
> I felt like a lot of logic should actually be part of the Item, but since we're not allowed to make any modifications to the `Item` class, I just decided to create a new `Product` class based on the original, unmodified `Item` class.

- Created a `sampleData.json` file in which all the data regarding products/items is stored.
> This could of course be turned into a database of choice.

- Completely removed the whole logic of `updateQuality()`.
> I wanted to do something completely different, so I just removed it all, and completely redesigned the whole logic of aging and updating the quality of Items.

- Added `defaultOptions` as a base configuration for Products.
> The goal here is to have a `Product` to be responsible for its own properties. We'll just pass in some properties and some basic configuration, and let the `Product` class handle the aging based on the specific configuration.
___
> It would be nice if we could just have a shop and call an `age` method on it, and the `Shop` will take care of all the things that need to happen to update the quality of its `Products`.

- Introduced an `age` property on the `Product`. This value represents the number of days that the `Product` has been in the `Shop`.
> By `age++`'ing on every update, we can simulate the aging of `Products`.

- Introduced a `degrationRate`, which will represent the rate at which a `Product` will lose quality over time. Defaults to `-1`.
> I know, it should be degra**da**tionRate, I was just too lazy to refactor it afterwards. 
In production I would totally take the time to find the correct term and refactor if required.
___
> The idea here is to have a per product configurable value, so that the update method in the `Product` class isn't responsible for the way it updates, just **that** it updates. And also it doesn't have to be overly filled with if/else statements that determine how the product should degrade.

- Added a seperate `validate` method, which will ensure that (according to the requirements) the `quality` property is never negative, and never goes above `50`.
> Now that `validate` is a seperate method, we can decide if it should be called, if in the future, there are products that have different "rules".
___
>Hey, what a coincidence, there's this `Backstage Pass to a concert` product, that has different rules!

- Added the ability to configure a different `agingBehaviour` for products that age in a different way.
> Aging behaviour is also a configurable option, and the string value of it will be used to find a file with custom logic that is used as the `doAge` method.
___
> Totally overkill for this one `Backstage Pass to a concert` product, but very future proof if more products are added later.

- Added the option `legendary` which defaults to `false`.
> Legendary `Products` will `age++`, but that will not have any effect on any property of it, because we'll just `break` after this check.

- With all my previous thoughts already implemented, finding a solution for conjured items, is now obsolete. We'll just change the value of `qualityDegrationRate`.
- `Shop` has a property `age` that keeps track of the number of times it has been updated (aged). Just for the sake of printing some stats as result of the test.
- Using [console.table](https://www.npmjs.com/package/console.table) to print a nice summary of the current state of the `Shop` and its `Products`.

## Instructions
To test or run this project:

1. Clone project
1. Run `$ npm install`
1. Run `$ npm test`

I've attached a `log` file, in case you are not able to run the script by yourself.

If you want to create a new `log` file, just run `$ npm test > log`.

## Remarks

Feel free to submit a pull request or post an issue if you have any suggestions or questions.