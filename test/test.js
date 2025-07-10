const axios = require('axios');



describe('NoCoDB form test', function() {

  let homepage=''  

  before(async function(browser) {

    browser.timeouts('pageLoad',30000)
    await browser.navigateTo('https://lighthouse-jigsaw-hub.net/'); 
    //this.homepage = browser.page.home();

  });

  it('Demo test', async function(browser) {

    browser.timeouts('pageLoad',30000)
    console.log("navigateTo")
    console.log("wait for sign in page")
    browser.waitForElementVisible("input[data-testid='nc-form-signin__email']"); 

    console.log("Add username and password")
    browser.element("input[data-testid='nc-form-signin__email']").setValue('nrstirzaker.techblog@gmail.com');
    browser.element("input[data-testid='nc-form-signin__password']").setValue('..59:Catch:Berlin:Perhaps:76..');

    console.log("Click sign in")
    browser.element("button[data-testid='nc-form-signin__submit']").click();

    console.log("Pause")
    browser.pause(30000)

    // console.log("Wait for side bar")
    // browser.waitForElementVisible("div[data-testid='nc-sidebar-project-btn'",30000)
    // console.log("Click 'Main' button")
    // browser.element("div[data-testid='nc-sidebar-project-btn'").click()
    // browser.pause(30000)

    console.log("Wait for 'Tables'")
    browser.waitForElementVisible(by.xpath("//div[text()='Tables']"))

    console.log("Xpath to Referrer'")
    browser.waitForElementVisible(by.xpath("//span[text()='Referrer']"))
    console.log("CSS to Referrer'")
    browser.waitForElementVisible("span[data-testid='nc-tbl-title-Referrer']",30000)
    console.log("Click on Referrer'")
    browser.element("span[data-testid='nc-tbl-title-Referrer']").click()

    console.log("Has Referrer expanded")   
    browser.expect.element(by.xpath("//span[@data-testid='nc-tbl-title-Referrer']/div[text()='Form']")).to.be.visible;
    console.log("Click Referrer Form'")
    browser.element(by.xpath("//span[@data-testid='nc-tbl-title-Referrer']/div[text()='Form']")).click();

    browser.waitForElementVisible(by.xpath("//textarea[@data-testid='nc-form-heading']",30000))
    browser.expect.element(by.xpath("//textarea[@data-testid='nc-form-heading']")).to.be.visible;
  
    
  });
  
})