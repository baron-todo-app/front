// 動作確認用

import * as React from 'react'
import puppeteer from 'puppeteer';

describe('puppeteer demo', () => {
    it('screen shot', async () => {
      const browser = await puppeteer.launch({headless: false, timeout: 0})
      const page = await browser.newPage()
      await page.goto('http://localhost:3001')
      await page.screenshot({path: 'demo.png', fullPage: true});
      await browser.close()
    });
  },
);
