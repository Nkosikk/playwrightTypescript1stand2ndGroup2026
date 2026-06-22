import {expect, test} from '../src/fixtures/CustomFixtures';
import {validUsers, invalidUsers} from '../src/data/Testdata';


test.describe ('Login functionality', () => {

    test('Positive login - Admin', async ({ loginPage, homePage, page }) => {
    await loginPage.basePageGoToUrl('/');
    await loginPage.navigateToLoginPage();
    await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
    //soft assertion
    //await expect.soft(page).toHaveURL(/dashboard123/); //failing the test on purpose so we can test soft assertions
    await expect.soft(page).toHaveURL(/dashboard/); // Restore path to make test pass.

    await homePage.verifyHomePageIsDisplayed();
});

    test.only('Positive login via API - class user', async ({request}) => {
        const response = await request.post('https://www.ndosiautomation.co.za/APIDEV/login', {
        //payload
        data: {
            "email": validUsers.classUser.username,
            "password": validUsers.classUser.password
            }
        });
        const body = await response.json();
        console.log (body);
        expect(response.status()).toBe(200); 

    });

});
