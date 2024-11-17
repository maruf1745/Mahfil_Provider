module.exports = {
    Login: async function(browser) {
        browser
        .setValue('xpath', '//*[@id="logmail"]', 'maruf@kahf.co')
        .setPassword('xpath', '//*[@id="logpassword"]', 'kahf@guard')
        .click('xpath', '/html/body/main/div/div/div/div/div[4]/div[1]/button') 
    },
    VideoUploading: async function(browser) {
        browser
        //Click Upload Button
        .click('xpath') 
    },
};