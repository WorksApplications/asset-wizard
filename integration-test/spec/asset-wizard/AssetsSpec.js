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

describe('Assets Page', () => {
  it('should return HTML with 404 response code', async (done) => {
    await driver.get('http://frontend/assets');
    const title = await driver.getTitle();
    expect(title).toBe('404 Not Found');
    done();
  });
});
