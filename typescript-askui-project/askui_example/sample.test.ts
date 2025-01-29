import { aui } from "./helpers/askui-helper";

describe('Sauce Demo Purchase Test', () => {
    it('should complete purchase flow successfully', async () => {
        // Test credentials
        const username = 'standard_user';
        const password = 'secret_sauce';

        // Launch browser and navigate
        await aui.execOnShell('start chrome').exec();
        await aui.type('https://www.saucedemo.com/').exec();
        await aui.pressKey('enter').exec();
        
        // Login
        await aui.click().text('Username').exec();
        await aui.type(username).exec();
        await aui.click().text('Password').exec();
        await aui.type(password).exec();
        await aui.pressKey('enter').exec();
        
        // Take screenshot of confirmation that you have logged in
        await aui.annotate();
    });
});
