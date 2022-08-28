const puppeteer = require("puppeteer");
let url = "https://web.whatsapp.com/";

let target = "Jagannath E Shahi"; //Contact Name

const start = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();

  await page.goto(url);
  await page.setDefaultTimeout(0);
  await page.waitForSelector('[data-testid="search"]').then(() =>
    page.click('[data-testid="search"]', {
      delay: 3000,
    })
  );

  await page.type("._13NKt", target);
  await page.keyboard.press("Enter");

  let input = await page.$(
    "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div"
  );

  //Enter your custom messages here.....
  let messages = [
    "Spam",
    "Its a spam attack",
    "Have a great time",
    "💚💚💚",
    "🐱‍🚀🐱‍🚀🐱‍🚀",
    "👾👾👾",
    "🤖🤖🤖",
    "🤡🤡🤡",
  ];

  for (let i = 0; i < 10; i++) {
    let message = messages[Math.floor(Math.random() * messages.length)];
    await input.type(message);
    await page.keyboard.press("Enter");
  }

  // await browser.close()
};
start(url);
