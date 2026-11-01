class Product{
    constructor(page){
     this.page=page
     this.menuBar=page.locator(".bm-burger-button")
     this.cartIcon=page.locator(".shopping_cart_link")
     this.cartBadge=page.locator(".shopping_cart_badge")
     this.LogoutButton=page.locator("#logout_sidebar_link")
     this.title=page.locator(".title")
     this.sortDropdown=page.locator(".product_sort_container")
     this.removeBtn=page.getByRole('button',{name:"Remove"})
     this.AddToCartBtn=page.getByRole("button",{name:"Add to cart"})
     this.ProductItem=page.locator(".inventory_item")
     this.ProductItemName=page.locator(".inventory_item_name ")
     this.ProductItemPrice=page.locator(".inventory_item_price")
    }
    async AddtoCart(){
       await this.AddToCartBtn.first().click()

    }

    



    async RemoveProduct(){
        const item=await this.ProductItem.filter({hasName:"Sauce Labs Backpack"})
        await item.locator('button:has-Text("Remove")').click()
    }

    async SortItem(){
        await this.sortDropdown.selectOption('Name (Z to A)')
    }
    async OpenCart(){
        await this.cartIcon.click()
    }

}

export default Product;