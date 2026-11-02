import {test} from "@playwright/test"
import Login from "../POM/Login.page.js"
import fs from 'fs'
let userData=fs.readFileSync("C:/Users/DELL/OneDrive/Desktop/SauceDemo/EcommerceFramework/Test-Data/Login.json")
userData=JSON.parse(userData)
let url=userData.url
let username=userData.username
let pass=userData.password

test("login to sauce demo",async({page})=>{
    let login=new Login(page)
     await login.LoginToSauceDemo(url,username,pass)
     await login.LoginToSauceDemo(url,username,pass)
     await login.LoginToSauceDemo(url,username,pass)
})