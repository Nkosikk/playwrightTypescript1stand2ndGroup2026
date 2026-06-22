import { expect, test } from '../src/fixtures/CustomFixtures';
import { sintuUsers, validUsers } from '../src/data/Testdata';
import { readCsv } from '../src/utils/CsvReader';


test.describe('Instructor panel functionality', () => {

    test('Navigate to Instructor Panel', async ({ loginPage, homePage }) => {
        // await loginPage.basePageGoToUrl('/');
        // await loginPage.navigateToLoginPage();
        // await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
        await loginPage.performFullLogin(validUsers.admin.username, validUsers.admin.password);
        await homePage.verifyHomePageIsDisplayed();
        await homePage.navigateToInstructorPage();
    });

    test('Update user profile', async ({ loginPage, homePage, userProfilePage }) => {
        // await loginPage.basePageGoToUrl('/');
        // await loginPage.navigateToLoginPage();
        // await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
        await loginPage.performFullLogin(validUsers.admin.username, validUsers.admin.password);
        await homePage.verifyHomePageIsDisplayed();
        await homePage.navigateToUserProfilePage();
        await userProfilePage.editUserProfile(sintuUsers.charlie.gitUsername);
        await userProfilePage.verifyProfile(sintuUsers.charlie.gitUsername);
    });


});

const users = readCsv('src/data/PlaywrightTests.csv');

for (const user of users) {
    test(`Open user profile page for ${user.Username}`, async ({ loginPage, homePage, page }) => {
        await loginPage.performFullLogin(user.Username, user.Password);
        await homePage.navigateToUserProfilePage();

        // await expect(page.getByRole('heading', )
    }
    )
};
