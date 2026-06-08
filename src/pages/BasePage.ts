import { Page, Locator, expect} from '@playwright/test';

export class BasePage {
    
    constructor(public page: Page) {
        this.page = page;
    }

    async basePageGoToUrl(url: string) {
        await this.page.goto(url);
    }

    async basePageClickElement(element: Locator) {
        await element.click();
    }

    async basePageEnterText(element: Locator, text: string) {
        await element.fill(text);
    }
    
    async basePageVerifyElementIsVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }


}