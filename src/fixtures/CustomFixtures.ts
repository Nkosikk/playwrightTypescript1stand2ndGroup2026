import {test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/Loginpage';
import { InstructorPage } from '../pages/InstructorPage';
import { UserProfilePage } from '../pages/UserProfilePage';

type CustomFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    instructorPage: InstructorPage;
    userProfilePage: UserProfilePage;

};

export const test = base.extend<CustomFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    instructorPage: async ({ page }, use) => {
        await use(new InstructorPage(page));
    },

    userProfilePage: async ({ page }, use) => {
        await use(new UserProfilePage(page));
    }

});

export { expect } from '@playwright/test';