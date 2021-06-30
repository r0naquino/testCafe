import { Selector, t } from 'testcafe';

class ProductPage {
    
    get productFilter () { return Selector('select.product_sort_container')}
    get productName () { return Selector('div.inventory_item_name')}
    get shoppingCart () { return Selector('a.shopping_cart_link')}


    async addToCartAnItem(itemName){
        for (let i = 0; i < itemName.length; i++) {
            await t
            .click(this.productName.withText(itemName[i]).parent('a').parent('div').sibling('div.pricebar').child('button').withText('ADD TO CART'));
            
        }
    }

    async removeButtonExists(itemName){
        var exist = false;
        for (let i = 0; i < itemName.length; i++) {
            exist = await this.productName.withText(itemName[i]).parent('a').parent('div').sibling('div.pricebar').child('button').withText('REMOVE').exists;
            if (exist == false) {
                return exist;
            }
        }
        return exist;
    }
}

module.exports = new ProductPage();