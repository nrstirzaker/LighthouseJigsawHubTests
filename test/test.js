const axios = require('axios');



describe('NoCoDB form test', function() {

  let homepage=''  

  before(async function(browser) {

    browser.timeouts('pageLoad',30000)
    await browser.navigateTo('https://lighthouse-jigsaw-hub.net/dashboard/#/nc/form/9fbb06ed-1adc-44cc-b796-9370dc8641a2'); 
    //this.homepage = browser.page.home();

  });

  it('Demo test', async function(browser) {


    browser.waitForElementVisible(by.xpath("//h1[text()='Referrer Form']"))

    browser.waitForElementVisible(by.xpath("//div[data-testid='nc-form-input-cell-Name Of Organisation']"))

    browser.element(by.xpath("//div[data-testid='nc-form-input-cell-Name Of Organisation']/input")).setValue('nrstirzaker.techblog@gmail.com');

    //<div data-v-638ef232="" data-v-397eecbe="" class="nc-cell-singlelinetext h-10 nc-cell w-full h-full relative nc-input truncate nc-form-input-NameOfOrganisation" data-testid="nc-form-input-cell-Name Of Organisation"><input data-v-638ef232="" class="nc-cell-field h-full w-full outline-none py-1 bg-transparent"><!----></div>


    // browser.timeouts('pageLoad',30000)
    // console.log("navigateTo")
    // console.log("wait for sign in page")
    // browser.waitForElementVisible("input[data-testid='nc-form-signin__email']"); 

    // console.log("Add username and password")
    // browser.element("input[data-testid='nc-form-signin__email']").setValue('nrstirzaker.techblog@gmail.com');
    // browser.element("input[data-testid='nc-form-signin__password']").setValue('..59:Catch:Berlin:Perhaps:76..');

    // console.log("Click sign in")
    // browser.element("button[data-testid='nc-form-signin__submit']").click();

    // console.log("Pause")
    // browser.pause(30000)



    // console.log("Wait for 'Tables'")
    // browser.waitForElementVisible(by.xpath("//div[text()='Tables']"))

    // console.log("Xpath to Referrer'")
    // browser.waitForElementVisible(by.xpath("//span[text()='Referrer']"))
    // console.log("CSS to Referrer'")
    // browser.waitForElementVisible("span[data-testid='nc-tbl-title-Referrer']",30000)
    // console.log("Click on Referrer'")
    // browser.element("span[data-testid='nc-tbl-title-Referrer']").click()

    // console.log("Has Referrer expanded")   
    // //browser.expect.element(by.xpath("//span[@data-testid='nc-tbl-title-Referrer']/div[text()='Referrer Form']")).to.be.visible;
    // browser.expect.element(by.xpath("//div[text()='Referrer Form']")).to.be.visible;
    // console.log("Click Referrer Form'")
    // browser.element(by.xpath("//div[text()='Referrer Form']")).click();

    // browser.waitForElementVisible(by.xpath("//textarea[@data-testid='nc-form-heading']",30000))
    // browser.expect.element(by.xpath("//textarea[@data-testid='nc-form-heading']")).to.be.visible;
  
    
  });
  
})