const puppeteer = require('puppeteer');

test('should display Hola Mundo', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file://' + process.cwd() + '/index.html');
    const content = await page.content();
    expect(content).toContain('Hola Mundo');
    await browser.close();
});