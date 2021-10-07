const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://demoqa.com/login
  await page.goto('https://demoqa.com/login');
  // Click [placeholder="UserName"]
  await page.click('[placeholder="UserName"]');
  // Press CapsLock
  await page.press('[placeholder="UserName"]', 'CapsLock');
  // Fill [placeholder="UserName"]
  await page.fill('[placeholder="UserName"]', 'F');
  // Press CapsLock
  await page.press('[placeholder="UserName"]', 'CapsLock');
  // Fill [placeholder="UserName"]
  await page.fill('[placeholder="UserName"]', 'Fe');
  // Press CapsLock
  await page.press('[placeholder="UserName"]', 'CapsLock');
  // Fill [placeholder="UserName"]
  await page.fill('[placeholder="UserName"]', 'FeC');
  // Press CapsLock
  await page.press('[placeholder="UserName"]', 'CapsLock');
  // Fill [placeholder="UserName"]
  await page.fill('[placeholder="UserName"]', 'FeCademartori');
  // Press Tab
  await page.press('[placeholder="UserName"]', 'Tab');
  // Press CapsLock
  await page.press('[placeholder="Password"]', 'CapsLock');
  // Fill [placeholder="Password"]
  await page.fill('[placeholder="Password"]', 'P');
  // Press CapsLock
  await page.press('[placeholder="Password"]', 'CapsLock');
  // Fill [placeholder="Password"]
  await page.fill('[placeholder="Password"]', 'Password123!');
  // Click button:has-text("Login")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://demoqa.com/profile' }*/),
    page.click('button:has-text("Login")')
  ]);
  // Click :nth-match(:text("Book Store"), 2)
  await page.click(':nth-match(:text("Book Store"), 2)');
  // assert.equal(page.url(), 'https://demoqa.com/books');
  // Click div[role="columnheader"]:has-text("Author")
  await page.click('div[role="columnheader"]:has-text("Author")');
  // Click text=Publisher
  await page.click('text=Publisher');
  // Click text=Title
  await page.click('text=Title');
  // Click [placeholder="Type to search"]
  await page.click('[placeholder="Type to search"]');
  // Fill [placeholder="Type to search"]
  await page.fill('[placeholder="Type to search"]', 'git');
  // Click text=Git Pocket Guide
  await page.click('text=Git Pocket Guide');
  // assert.equal(page.url(), 'https://demoqa.com/books?book=9781449325862');
  // Click text=Add To Your Collection
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('text=Add To Your Collection');
  // Click li:has-text("Profile")
  await page.click('li:has-text("Profile")');
  // assert.equal(page.url(), 'https://demoqa.com/profile');
  // Click #delete-record-undefined
  await page.click('#delete-record-undefined');
  // Click #closeSmallModal-ok
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('#closeSmallModal-ok');
  // Click text=Log out
  await page.click('text=Log out');
  // assert.equal(page.url(), 'https://demoqa.com/login');
  await page.screenshot({ path: 'loginpage.png' });
  // ---------------------
  await context.close();
  await browser.close();
})();