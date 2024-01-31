const { Given, When, Then } = require("@cucumber/cucumber");
import HomePage from "../pages/home.page";

Given("I am on the homepage", async () => {
  await HomePage.open();
});

When("I login with the correct credentials", async () => {
  await HomePage.login("student", "Password123");
});

When("I login with the wrong username", async () => {
  await HomePage.login("wrong", "Password123");
});

When("I login with the wrong password", async () => {
  await HomePage.login("student", "Password456");
});

Then("I should be logged in successfully", async () => {
  await expect(await browser.getUrl()).toEqual("https://practicetestautomation.com/logged-in-successfully/");
});

Then("I should see a failed username message", async () => {
  let errorElement = await $("#error");
  await expect(await errorElement.getText()).toEqual("Your username is invalid!");
});

Then("I should see a failed password message", async () => {
  let errorElement = await $("#error");
  await expect(await errorElement.getText()).toEqual("Your password is invalid!");
});
