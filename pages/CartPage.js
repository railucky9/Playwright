export class CartPage {
    constructor(page) {
        this.page = page;
        this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]'

    }


    async checkProductInCart(productName) {
        const productsInCart = await this.page.$$(this.noOfProducts)

        for (const product of productsInCart) {
            console.log(await product.textContent())
            if (productName === await product.textContent()) {
                return true; // Product found, return true
            }
        }

        return false; // Product not found in the loop, return false
    }

}