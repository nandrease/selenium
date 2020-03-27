const { Builder, By, Key, util } = require("selenium-webdriver");
const proxy = require("selenium-webdriver/proxy");
const firefox = require("selenium-webdriver/firefox");

// https://free-proxy-list.net/
const proxyServer = "36.65.66.148:8080";

const driver = new Builder()
  .forBrowser("firefox")
  .setProxy(
    proxy.manual({
      http: proxyServer,
      https: proxyServer
    })
  )
  .build();

driver.get("https://google.com");
