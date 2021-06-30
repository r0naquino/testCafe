import { Selector, t } from 'testcafe';

class LoginPage {
 
    get userName () { return Selector('#user-name')};
    get passWord () { return Selector('#password')} ;
    get loginButton () {return Selector('#login-button')};
    get errorMessage () { return Selector('h3[data-test = "error"]')};

    async loginToApplication(username, password){
        await t.typeText(await this.userName, username);
        await t.typeText(await this.passWord, password);
        await t.click(await this.loginButton);
    }

    async inputUsername(username){
        await t.typeText(this.userName, username);
    }

    async inputPassword(password){
        await t.typeText(this.passWord, password);
    }

    async clickLoginButton() {
        await t.click(this.loginButton);
    }
}

module.exports = new LoginPage();