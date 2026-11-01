class Checkout{
    constructor(page){
      this.page=page;
      this.first_Name=page.getByPlaceholder("First Name")
      this.last_Name=page.getByPlaceholder("Last Name")
      this.zipcode=page.getByPlaceholder("Zip/Postal Code")
      this.Cancel=page.getByRole('button',{name:"Cancel"})
      this.Continue=page.getByRole('button',{name:"Continue"})
      this.errorMessage=page.locator(".error-message-container.error")
    }

    async fillYourInfo(){
       await this.first_Name.fill("Aditya")
       await this.last_Name.fill("Singh")
       await this.zipcode.fill(485001)
    }

    async clickOnCancelButton(){
        await this.Cancel.click()
    }

    async clickOnContinueButton(){
        await this.Continue.click()
    }

    async fillAndContinue(){
        await this.fillYourInfo()
        await this.clickOnContinueButton()
    }

    async errorMessageOncheckout(){
      return await this.errorMessage.textContent();
    }
}

export default Checkout;