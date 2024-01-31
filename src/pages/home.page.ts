import { BasePage } from "./base.page";

let phoneName = "";
let vendorName = "";
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get usernameSelector() {
    return $("#username");
  }
  get passwordSelector() {
    return $("#password");
  }
  get submitBtnSelector() {
    return $("#submit");
  }

  get errorSelector() {
    return $("#error");
  }

  async open() {
    await super.open("https://practicetestautomation.com/practice-test-login/");
  }

  async login(username: string, password: string) {
    await this.usernameSelector.waitForDisplayed({ timeout: 30000 });
    await this.usernameSelector.setValue(username);
    await this.passwordSelector.setValue(password);
    await this.submitBtnSelector.click();
  }

  // async clickVendor(vendor: string) {
  //   vendorName = vendor;
  //   await this.vendor.click();
  // }

  // async getAllPrices() {
  //   let prices = [];
  //   for (const price of await this.allPrices) {
  //     var text = await price.getText();
  //     prices.push(parseInt(text));
  //   }
  //   return prices;
  // }

  // async getAllPhones() {
  //   let phoneNames = [];
  //   for (const phone of await this.allPhones) {
  //     var text = await phone.getText();
  //     phoneNames.push(text);
  //   }
  //   return phoneNames;
  // }

  // async waitToLoad() {
  //   await this.loading.waitForDisplayed({ reverse: true });
  // }

  // async clickFavourite(phoneToSelect: string) {
  //   phoneName = phoneToSelect;
  //   await this.addFavourite.click();
  // }

  // async getAllImagesSrcAttribute() {
  //   let imgSrc = [];
  //   for (const img of await this.allImages) {
  //     var src = await img.getAttribute("src");
  //     imgSrc.push(src);
  //   }
  //   return imgSrc;
  // }
}

export default new HomePage();
