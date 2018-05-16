const webdriver = require('selenium-webdriver');
let driver;

beforeEach(() => {
  driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
});

afterEach(() => {
  if (driver) {
    driver.quit();
  }
});

describe('Allocation Page', () => {
  it('should return HTML with 404 response code', async (done) => {
    await driver.get('http://frontend/allocations');
    const title = await driver.getTitle();
    expect(title).toBe('404 Not Found');
    done();
  });
});
