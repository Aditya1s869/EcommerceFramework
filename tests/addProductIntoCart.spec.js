import {test} from "@playwright/test"
import Products from "../POM/Products.page.js"
import Login from "../POM/Login.page.js"
import fs from "fs"
let userData=fs.readFileSync("C:/Users/DELL/OneDrive/Desktop/SauceDemo/EcommerceFramework/Test-Data/Login.json")
userData=JSON.parse(userData)
let url=userData.url
let username=userData.username
let pass=userData.password
test("add product to cart",async({page})=>{
    let product = new Products(page)
    let login=new Login(page)
    await login.LoginToSauceDemo(url,username,pass)
    await product.addProductToCart('Sauce Labs Backpack')
    await product.OpenCart()
})