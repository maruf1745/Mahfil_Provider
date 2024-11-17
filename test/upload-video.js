const commonFunctions = require("./commonFunctions");

describe('Upload Video by provider', function() {
    before(browser => browser.navigateTo('https://provider-dev.mahfil.net/'));
  
    it('Video upload', function(browser) {
        commonFunctions.Login(browser);
        browser
        .click('xpath', '//*[@id="header-nav"]/div[2]/div[2]/div[1]/a')
        .waitForElementVisible('body')
        //Enter video title
        .setValue('xpath', '//*[@id="videotitle"]', 'Demo Video')
        //Ente video description
        .setValue('xpath', '/html/body/main/section/div/div/div[1]/div/div[2]/div[2]/div/div[2]/div[1]', 'Demo Description')
        //Enter tag
        .setValue('xpath', '/html/body/main/section/div/div/div[1]/div/div[3]/div[4]/div[1]/div[1]/input', 'test1')
        
        //.setValue('xpath', '/html/body/main/section/div/div/div[1]/div/div[3]/div[4]/div[1]/div[1]/input', 'test2')
        
        //.setValue('xpath', '/html/body/main/section/div/div/div[1]/div/div[3]/div[4]/div[1]/div[1]/input', 'test3')
        .waitForElementVisible('xpath','/html/body/main/section/div/div/div[2]/div/div[2]/div[1]/div/div/div/div[2]/div/div[2]/div[1]/button', 1000) 
        .uploadFile('xpath','/html/body/main/section/div/div/div[2]/div/div[2]/div[1]/div/div/div/div[2]/div/div[2]/div[1]/button', 'C:\Users\MARUF\Downloads\file_example_MP4_480_1_5MG.mp4') 
        .pause(1000)
        
        
    });
  
    after(browser => browser.pause());
  });
  