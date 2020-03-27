const { Builder } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

async function openWebsites() {
  try {
    await driver.get("https://www.bigdon.ee");
    await driver.get("https://www.addidraws.ee");
    await driver.get("https://www.4teams.ee");
  } catch (error) {
    console.log(error);
  }
}

openWebsites();
