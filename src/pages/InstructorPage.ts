import { Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class InstructorPage extends BasePage{

    get verifyInstructorPageHeading(): Locator {
        return this.page.getByRole('heading', { name: /Instructor\s*Dashboard/i }); //regex  for case insensitive match and to ignore any whitespace between "Welcome" and "back"
    }

    async verifyHomePageIsDisplayed() {
        await this.basePageVerifyElementIsVisible(this.verifyInstructorPageHeading);    
    }


}
