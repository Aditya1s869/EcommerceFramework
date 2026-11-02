import test from '@playwright/test'
import fs from 'fs'
import Login from '../POM/Login.page'
let userData=fs.readFileSync("C:/Users/DELL/OneDrive/Desktop/SauceDemo/EcommerceFramework/Test-Data/Login.json")
userData=JSON.parse(userData)
let url=userData.url
let username=userData.username
let pass=userData.password

export async function LoginToApp(page){
    let login=new Login(page)
    await login.LoginToSauceDemo(url,username,pass)

}
