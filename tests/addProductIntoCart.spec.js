import {test} from "@playwright/test"
import Products from "../POM/Products.page.js"
import Login from "../POM/Login.page.js"


test("add product to cart",async({page})=>{
    let product = new Products(page)
    let login=new Login(page)
    await login.LoginToSauceDemo()
    await product.AddtoCart()
    await product.OpenCart()
})