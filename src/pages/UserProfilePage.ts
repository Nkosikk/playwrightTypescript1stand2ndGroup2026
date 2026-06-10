import { Locator} from '@playwright/test';
import { BasePage } from './BasePage';


export class UserProfilePage extends BasePage {

    // copy methods verify user is on Profile page

    async editUserProfile(gitUsername: string) {
        await this.basePageClickElement(this.page.locator('css = button:has-text("Edit Profile")'));
        await this.basePageEnterText(this.page.getByPlaceholder('e.g., octocat'), gitUsername);
        await this.basePageClickElement(this.page.locator('css = button:has-text("Save Changes")'));
    }

    async verifyProfile(gitUsername: string){
        //Homework - please rework the locator
        const actualGitUsername = await this.basePageGetTextValue(this.page.locator('xpath = //*[@id="app-main-content"]/section/div/div[1]/div[5]/div[2]/div/a'));
        console.log(`Actual GitUsername: $(actualGitUsername)`);
        if(actualGitUsername !== gitUsername){
            console.log(`Git username incorrect, expected: ${gitUsername}`);
        }
    }

}