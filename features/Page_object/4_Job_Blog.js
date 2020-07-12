const {By} = require('selenium-webdriver');
const assert = require('assert');
const World = require('../support/world');
let heading;
let imageElement = "//*[@id='main']/div/div/div[1]/ul/li[1]/div/div[1]/a/img";
let innerElement = "innerText";
let tagElementOne = "h1";
let tagElementTwo = "h3";


class CustomJobBlogPage {
    navToJobBlog(job, jobText, link, index){
        World.driver.executeScript("window.scrollBy(0,500)");
        World.driver.findElement(By.css('section[class ="' + job + ' brick"]')).isDisplayed();
        let blog = World.driver.findElement(By.xpath('//*[@id="main"]/div[4]/div/div/div[' + index + ']/section/div/h2/span'));
        World.driver.executeScript('return arguments[0].innerHTML', blog).then(textValue => {
            assert.equal(jobText, textValue);
        });
        World.driver.findElement(By.linkText(link)).click();
    }
    verifyingJobBlogPage(jobTitle){
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.findElement(By.tagName(tagElementOne)).getAttribute(innerElement).then(textValue => {
            assert.equal(jobTitle, textValue);
        });
        World.driver.findElement(By.css('div[class = "grid cf"]')).isDisplayed();
        World.driver.findElement(By.tagName(tagElementTwo)).getAttribute(innerElement).then(textValue => {
            heading = textValue;
        });
        let image1 = World.driver.findElement(By.xpath(imageElement));
        World.driver.executeScript("return arguments[0].complete && typeof arguments[0].naturalWidth != 'undefined' && arguments[0].naturalWidth > 0", image1).then(function (present) {
            assert.equal(present, true, 'Image loaded properly');
        });
    }
    navToArticle(){
        World.driver.findElement(By.xpath(imageElement)).click();
        World.driver.findElement(By.id('main')).isDisplayed();
        World.driver.findElement(By.tagName(tagElementOne)).getAttribute(innerElement).then(text => {
            assert.equal(heading, text);
        });
    }
    verifyingArticlePage(){
        World.driver.findElement(By.tagName('p')).isDisplayed();
        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.css('ul[class ="share-buttons cf"]')).isDisplayed();
        World.driver.findElement(By.linkText('Back to listing')).click();
    }

}


module.exports = new CustomJobBlogPage();
