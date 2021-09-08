# Phantom Tech Test Task

## Description
1. Find endpoints for this website:
    https://www.shopdisney.co.uk/disney-store-disney-princess-costume-collection-for-kids-2841047080168M.html

2. Simulate the add-to-cart function of the site using Java. You should only be using HTTP requests and no browser automation (puppeteer, selenium, etc.). 
    1. find product.
    2. add to cart.

## First Point

Intial URL: https://www.shopdisney.co.uk/on/demandware.store/Sites-shopDisneyEN-Site/en_GB/

|Endpoints|Function|Params|
|------------------|-------------|:---------------:| 
|`/Product-Variation|Grabs product details|`:pid`|
|`/Cart-AddProduct`|Add item to cart|` `|
|`/Cart-RemoveProductLineItem`|Remove item line from cart|` `|
|`/Wishlist-AddProduct`|Add item to wish list|` `|
|`/Wishlist-RemoveProduct`|Remove item from wishlist|` `|
|`/CheckoutAddressServices-PostalCodeLookup`|Check entered location validity|` `|

## Second Point


### To Start API Server

In the project directory, you can run:

#### `npm i`
#### `npm start`

Runs the app in the development mode.\
Open http://localhost:5000 to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Routes
- `/sim/product/:id`
- `/sim/cart/addtocart`