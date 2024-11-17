const commonFunctions = require("./commonFunctions");

describe('Upload Video by provider', function() {
    before(browser => browser.navigateTo('https://provider-dev.mahfil.net/'));
  
    it('Video upload', function(browser) {
        commonFunctions.Login(browser);
        browser
        //Click on Upload video button
        .click('xpath', '//*[@id="header-nav"]/div[2]/div[2]/div[1]/a')
        //.waitForElementVisible('body')
       // .pause(10000)
        //Enter video title
        //.setValue('xpath', '//*[@id="videotitle"]', 'Demo Video')
        //Enter video description
        //.setValue('xpath', '/html/body/main/section/div/div/div[1]/div/div[2]/div[2]/div/div[2]/div[1]/p', 'Demo Description')
        //Enter tags

        .waitForElementVisible('input[type="text"]', 1000)  
        .setValue('xpath', '/html/body/main/section/div/div/div[1]/div/div[3]/div[4]/div[1]/div[1]/input', 'islamic gojol') 
        
        //.setValue('xpath', '/html/body/main/section/div/div/div[1]/div/div[3]/div[4]/div[1]/div[1]/input', 'islamic gojol', [browser.Keys.ENTER])
        //.setValue('input[name="fieldName"]', [browser.Keys.ENTER])
        //.pause(5000)
        //.click("//*[contains(text(), 'islamic gojol')]")
        //.click('xpath', '/html/body/main/section/div/div/div[1]/div/div[3]/div[4]/div[1]/div[1]/input')
        
        //.setValue('xpath', '/html/body/main/section/div/div/div[1]/div/div[3]/div[4]/div[1]/div[1]/input', 'test2')
        
        //.setValue('xpath', '/html/body/main/section/div/div/div[1]/div/div[3]/div[4]/div[1]/div[1]/input', 'test3')
       // .waitForElementVisible('xpath','/html/body/main/section/div/div/div[2]/div/div[2]/div[1]/div/div/div/div[2]/div/div[2]/div[1]/button', 1000) 
        //.click('xpath', '/html/body/main/section/div/div/div[2]/div/div[2]/div[1]/div/div/div/div[2]/div/div[2]/div[1]/button')
        //.uploadFile('input[class="uppy-Dashboard-input"]', 'C:/Users/MARUF/Downloads/file_example_MP4_480_1_5MG.mp4') 
        //.pause(5000)
       // .click('xpath', '/html/body/main/section/div/div/div[2]/div/div[2]/div[1]/div/div/div/div[2]/div/div[4]/div[1]/div[2]/button')
       // .uploadFile('input[id="uploadmythumb"]', 'C:/Users/MARUF/Downloads/getty-us-network-map-384x216.jpg') 
      //  .pause(5000)
        
    });
  
    after(browser => browser.pause());
  });
  