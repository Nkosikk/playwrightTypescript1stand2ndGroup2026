import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';


export class UserProfilePage extends BasePage {

    async editUserProfile(gitUsername: string) {
        await this.basePageClickElement(this.page.locator('css = button:has-text("Edit Profile")'));
        // await this.basePageClickElement(this.page.getByRole('button', { name: '👤 My Profile' }));// Using the npx playwright codegen locator again.
        await this.basePageEnterText(this.page.getByPlaceholder('e.g., octocat'), gitUsername);
        await this.basePageClickElement(this.page.locator('css = button:has-text("Save Changes")')); // Using the npx playwright codegen locator instead.
        // await this.basePageClickElement(this.page.getByRole('button', { name: '💾 Save Changes' })); // Using the npx playwright codegen locator again.
    }

    async verifyProfile(gitUsername: string) {
        //Homework - please rework the locator
        // const actualGitUsername = await this.basePageGetTextValue(this.page.locator('xpath = //*[@id="app-main-content"]/section/div/div[1]/div[5]/div[2]/div/a')); // Old locator from homework
        const actualGitUsername = await this.basePageGetTextContent(this.page.getByRole('link', { name: `🐙 ${gitUsername}` })); // Using the npx playwright codegen locator
        // const actualGitUsername = await this.basePageGetTextValue(this.page.
        console.log(`Actual GitUsername: $(actualGitUsername)`);
        if (actualGitUsername !== gitUsername) {
            console.log(`Git username incorrect, expected: ${gitUsername}`);
        }
    }
}
