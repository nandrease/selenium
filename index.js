const { Builder, By, Key, util } = require("selenium-webdriver");

const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();

options.setPreference("browser.download.dir", "C:\\Users\\Einari\\Downloads");
options.setPreference("browser.download.folderList", 2);
options.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/octet-stream", "application/x-csv");

const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();

driver.get("http://insight.dev.schoolwires.com/HelpAssets/C2Assets/C2Files/C2ImportCalEventSample.csv");

// async function example() {
//   let driver = await new Builder().forBrowser("firefox").build();
//   await driver.get("https://www.facebook.com");
//   await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
// }

// example();
