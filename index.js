const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');


scrape({
 urls: ['https://cristianofilho.github.io'],




directory: path.resolve(__dirname, 'pasta-do-site'),




plugins: [ 
    new PuppeteerPlugin({
        launchOptions: { 
            headless: true
        },
        scrollToBottom: {
            timeout: 10000, 
            viewportN: 10 
        }
    })
]
});