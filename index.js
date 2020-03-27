const { Builder, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

// async function openWebsites() {
//   try {
//     await driver.get("https://www.bigdon.ee");
//     await driver.get("https://www.addidraws.ee");
//     await driver.get("https://www.4teams.ee");
//   } catch (error) {
//     console.log(error);
//   }
// }
// openWebsites();

async function simpleRegistration() {
  try {
    await (await driver).get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
    await driver.findElement(By.name("email")).sendKeys("example@gmail.com");
    await driver.findElement(By.id("password")).sendKeys("asdfg1");
    await (await driver.findElement(By.name("submit"))).click();
  } catch (error) {
    console.log("Error: ", error);
  }
}

simpleRegistration();
