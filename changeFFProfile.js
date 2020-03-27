const { Builder, By, Key, util } = require("selenium-webdriver");

const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();

// 1. create a profile first, add Extensions to Mozilla
// 2. save the profile with name e.g mozillaProfile
// 3. navigate to the profile folder %APPDATA%/Mozilla/Firefox/Profiles
// 4. copy the profile to our project
// 5. rename and use it in our options
options.setProfile("./mozillaProfile");

const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();

driver.get("https://google.com");
