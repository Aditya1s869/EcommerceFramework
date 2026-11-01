class Login{
    constructor(page){
        this.page=page
        this.usernameField=page.getByPlaceholder("Username")
        this.passwordField=page.getByPlaceholder("Password")
        this.loginButton=page.getByRole('button',{name:"Login"})
        this.errorMsg=page.locator(".error-message-container.error")
    }
    async goto(){
        await this.page.goto("https://www.saucedemo.com/")
    }
    async LoginToSauceDemo(url,username,pass){
        await this.page.goto(url)
        await this.usernameField.fill(username)
        await this.passwordField.fill(pass)
        await this.loginButton.click()
    }
    async ClickOnLoginBtn(){
        await this.loginButton.click()
    }

    async getErrorMsg(){
        return await this.errorMsg.textContent();
    }
}

export default Login;