import puppeteer from "puppeteer";  

 describe('show/hide an event details', () => {
    let browser;
    let page;
    jest.setTimeout(30000);
    beforeAll(async () => {
      
       browser = await puppeteer.launch({
        headless: false,
        slowMo: 250, // slow down by 250ms
       ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
      });
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {   
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .show-details');
    
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .hide-details');
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
      });
}); 

/* describe('filter events by city', () => {
    let browser;
    let page;
    jest.setTimeout(30000);
    beforeAll(async () => {
      
       browser = await puppeteer.launch({
        headless: false,
        slowMo: 250, // slow down by 250ms
       ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
      });
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test("When user hasn’t searched for a city, show upcoming events from all cities", async () => {
        const eventList = await page.$('.EventList');
        expect(eventList).toBe(2);
    });
});*/