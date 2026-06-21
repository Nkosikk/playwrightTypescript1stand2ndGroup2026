import { Locator} from '@playwright/test';
import { BasePage } from './BasePage';


export class UserProfilePage extends BasePage {

    // copy methods verify user is on Profile page

    async editUserProfile(gitUsername: string) {
        await this.basePageClickElement(this.page.locator('css = button:has-text("Edit Profile")'));  
        // await this.basePageClickElement(this.page.getByRole('button', { name: '👤 My Profile' }));// Using the npx playwright codegen locator again.
        await this.basePageEnterText(this.page.getByPlaceholder('e.g., octocat'), gitUsername);
        await this.basePageClickElement(this.page.locator('css = button:has-text("Save Changes")')); // Using the npx playwright codegen locator instead.
        // await this.basePageClickElement(this.page.getByRole('button', { name: '💾 Save Changes' })); // Using the npx playwright codegen locator again.
    }

    async verifyProfile(gitUsername: string){
        //Homework - please rework the locator
        // const actualGitUsername = await this.basePageGetTextValue(this.page.locator('xpath = //*[@id="app-main-content"]/section/div/div[1]/div[5]/div[2]/div/a')); // Old locator from homework
        const actualGitUsername = await this.basePageGetTextValue(this.page.getByRole('link', { name: `🐙 {gitUsername}` })); // Using the npx playwright codegen locator
        // const actualGitUsername = await this.basePageGetTextValue(this.page.
        console.log(`Actual GitUsername: $(actualGitUsername)`);
        if(actualGitUsername !== gitUsername){
            console.log(`Git username incorrect, expected: ${gitUsername}`);
        }
    }

    // const gitUserName = page.getByRole('link', { name: '🐙 blah-blah' })
    // await page. Locator('a:visible')
}

//   at UserProfilePage.basePageGetTextValue (C:\Users\DELL\dev\playwrightTypescript1stand2ndGroup2026\src\pages\BasePage.ts:24:30)
//     at UserProfilePage.verifyProfile (C:\Users\DELL\dev\playwrightTypescript1stand2ndGroup2026\src\pages\UserProfilePage.ts:17:46)
//     at C:\Users\DELL\dev\playwrightTypescript1stand2ndGroup2026\tests\home.spec.ts:25:31