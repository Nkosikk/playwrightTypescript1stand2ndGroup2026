import {expect, test} from '../src/fixtures/CustomFixtures';
import { validUsers } from '../src/data/Testdata';

test.describe('Instructor panel functionality', () => {

    test('Navigate to Instructor Panel', async ({ loginPage, homePage }) => {
        await loginPage.basePageGoToUrl('/');
        await loginPage.navigateToLoginPage();
        await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
        await homePage.verifyHomePageIsDisplayed();
        await homePage.navigateToInstructorPage();
    });

     test.only('Update user profile', async ({ loginPage, homePage, userProfilePage }) => {
        await loginPage.basePageGoToUrl('/');
        await loginPage.navigateToLoginPage();
        await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
        await homePage.verifyHomePageIsDisplayed();
        await homePage.navigateToUserProfilePage();
        await userProfilePage.editUserProfile(validUsers.admin.gitUsername);
        await userProfilePage.verifyProfile(validUsers.admin.gitUsername);
    });


});
