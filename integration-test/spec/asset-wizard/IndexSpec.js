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

describe('Index Page', () => {
  it('should return HTML with 200 response code', async (done) => {
    await driver.get('http://frontend/');
    const title = await driver.getTitle();
    expect(title).not.toBe('404 Not Found');
    done();
  });
});
