import { Selector } from 'testcafe';
const LoginPage = require('../pages/login.page');


fixture `Swag Labs - Login Page`
    .page `https://www.saucedemo.com/`;

    test('Login as standard user', async t => {
        var item = "Sauce Labs Backpack";
        await LoginPage.loginToApplication("standard_user", "secret_sauce");
        await t
            .expect(Selector('div > span.title').textContent).eql('Products');
    });

    test('Login with invalid user', async t => {
        
        await LoginPage.loginToApplication("INVALID", "secret_sauce");
        await t
            .expect(LoginPage.errorMessage.textContent).eql('Epic sadface: Username and password do not match any user in this service');
    });

    test('Login with invalid password', async t => {
        
        await LoginPage.loginToApplication("standard_user", "invalid");
        await t
            .expect(LoginPage.errorMessage.textContent).eql('Epic sadface: Username and password do not match any user in this service');
    });

    test('Login with no password', async t => {
        
        await LoginPage.inputUsername("standard_user");
        await LoginPage.clickLoginButton();
        await t
            .expect(LoginPage.errorMessage.textContent).eql('Epic sadface: Password is required');
    });

    test('Login with no username', async t => {
        
        await LoginPage.inputPassword("password");
        await LoginPage.clickLoginButton();
        await t
            .expect(LoginPage.errorMessage.textContent).eql('Epic sadface: Username is required');
    });

    test('Login with a locked out user', async t => {
        
        await LoginPage.loginToApplication("locked_out_user", "secret_sauce");
        await t
            .expect(LoginPage.errorMessage.textContent).eql('Epic sadface: Sorry, this user has been locked out.');
    });