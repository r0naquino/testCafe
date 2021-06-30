import { Selector } from 'testcafe';
const LoginPage = require('../pages/login.page');
const ProductPage = require('../pages/product.page');

fixture `Swag Labs - Product Page`
    .page `https://www.saucedemo.com/`;

    test('Add to cart an item', async t => {
        var item = ["Sauce Labs Backpack"];
        await LoginPage.loginToApplication("standard_user", "secret_sauce");
        await ProductPage.addToCartAnItem(item);
        var exist = await ProductPage.removeButtonExists(item);
        await t
            .expect(ProductPage.shoppingCart.child('span').textContent).eql("1")
            .expect(await exist).ok();
    });

    test('Add to cart multiple items', async t => {
        var item = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];
        await LoginPage.loginToApplication("standard_user", "secret_sauce");
        await ProductPage.addToCartAnItem(item);
        var exist = await ProductPage.removeButtonExists(item);
        await t
            .expect(ProductPage.shoppingCart.child('span').textContent).eql(item.length.toString())
            .expect(await exist).ok();
    });