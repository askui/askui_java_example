import { aui } from "./helpers/askui-helper";

describe('jest with askui', () => {
    // First test case for successful purchase flow
    it('Fill the entry form with right user name and order a purchase ', async () => {
        const Standard_username: string = 'standard_user';
        const password: string = 'secret_sauce';

        await aui.execOnShell("start chrome").exec();
        await aui.waitFor(333).exec();
        await aui.type("https://www.saucedemo.com/").exec();
        await aui.waitFor(333).exec();
        await aui.pressKey('enter').exec();  // enter the sauce demo website
        await aui.waitUntil(aui.expect().text('Swag Labs').exists()); 
        await aui.click().text("Username").exec();
        await aui.type(Standard_username).exec() // the username is entered here
        await aui.click().text("Password").exec();
        await aui.type(password).exec();
        await aui.waitFor(333).exec();
        await aui.pressKey('enter').exec();
        await aui.waitFor(333).exec();
        await aui.pressKey('escape').exec();
        await aui.click().text('Sauce Labs Backpack').exec(); // click on the name of the item you wish to purchase
        await aui.waitFor(1000).exec();
        
        // see if add to cart exist
        try {
            if(await aui.expect().text('Add to cart').exists())
                await aui.click().text('Add to cart').exec();
        } catch (error) {
            console.log('Too bad we could not find the add to cart element but it must have been clicked!');
            await aui.click().text('Remove').exec();
            await aui.click().text('Add to cart').exec();
        }

        await aui.click().aiElement('cart1').exec(); // click on the cart icon
        await aui.click();
        await aui.waitUntil(aui.expect().text('checkout').exists());
        await aui.click().text('checkout').exec();
        
        // Enter contact information
        await aui.click().text('First Name').exec();
        await aui.type('John').exec(); // sample firstname
        await aui.click().text('Last Name').exec();
        await aui.type('Doe').exec(); // sample lastname
        await aui.click().text('Zip/Postal Code').exec();
        await aui.type('10000').exec(); // sample postal code
        await aui.pressKey('pagedown').exec();
        await aui.click().text('continue').exec();
        await aui.annotate(); // take the screenshot of the final payment details with itenary which can be found in reports
        await aui.pressKey('pagedown').exec();
        await aui.waitUntil(aui.expect().text('Finish').exists());
        await aui.click().text('Finish').exec();
        await aui.annotate(); // Final screenshot must say Thank you for your order , you can find the screenshots in reports
    });

    // Second test case if the user is locked out while login
    xit('Fill the entry form with right user name and order a purchase ', async () => {
        const { locked_user, password } = globalThis.saucedemo;
        if (!locked_user || !password) {
            throw new Error('USERNAME and  PASSWORD environment variables must be set.');
        }

        await aui.execOnShell("start chrome").exec();
        await aui.waitFor(333).exec();
        await aui.type("https://www.saucedemo.com/").exec(); // enter the sauce demo website
        await aui.pressKey('enter').exec();
        await aui.waitUntil(aui.expect().text('Swag Labs').exists()); 
        await aui.click().text("Username").exec();
        await aui.type(locked_user).exec() // the username is entered here
        await aui.click().text("Password").exec();
        await aui.type(password).exec();
        await aui.waitFor(333).exec();
        await aui.pressKey('enter').exec();
        await aui.waitUntil(aui.expect().text('Epic sadface: Sorry, this user has been locked out.').exists());
        await aui.waitFor(333).exec();
        await aui.annotate(); // screenshot showing user has been locked out
    });

    // Third test case if we are logging into a problem user where the flow can break anytime
    xit('Fill the entry form with right user name and order a purchase', async () => {
        // Destructure the global variables to extract username and password
        const { problem_user, password } = globalThis.saucedemo;

        // Check if the problem_user and password are defined; if not, throw an error
        if (!problem_user || !password) {
            throw new Error('USERNAME and PASSWORD environment variables must be set.');
        }

        // Start a new instance of the Chrome browser
        await aui.execOnShell("start chrome").exec();
        await aui.waitFor(333).exec();
        await aui.type("https://www.saucedemo.com/").exec();
        await aui.pressKey('enter').exec();

        // Check if the "Swag Labs" text exists on the page
        try {
            if (await aui.expect().text('Swag Labs').exists()) {
                await aui.click().text("Username").exec();
            }
        } catch (error) {
            await aui.annotate();
            return;
        }

        await aui.type(problem_user).exec();

        try {
            if (await aui.expect().text("Password").exists()) {
                await aui.click().text("Password").exec();
            }
        } catch (error) {
            await aui.annotate();
            return;
        }

        await aui.type(password).exec();
        await aui.pressKey('enter').exec();
        await aui.waitFor(333).exec();
        await aui.pressKey('escape').exec();

        try {
            if (await aui.expect().text('Sauce Labs Backpack').exists()) {
                await aui.click().text('Sauce Labs Backpack').exec();
            }
        } catch (error) {
            await aui.annotate();
            return;
        }

        // Check if it landed on same page
        try {
            if (await aui.expect().text('Sauce Labs Backpack').exists()) {
                await aui.click().text('Sauce Labs Backpack').exec();
            }
        } catch (error) {
            await aui.annotate();
            return;
        }

        try {
            if (await aui.expect().text('Add to cart').exists()) {
                await aui.click().text('Add to cart').exec();
            }
        } catch (error) {
            await aui.annotate();
            return;
        }

        try {
            if (await aui.expect().aiElement('cart1').exists()) {
                await aui.click().aiElement('cart1').exec();
            }
        } catch (error) {
            await aui.annotate();
            return;
        }

        await aui.click();

        try {
            if (await aui.expect().text('checkout').exists()) {
                await aui.click().text('checkout').exec();
            }
        } catch (error) {
            await aui.annotate();
            return;
        }

        try {
            if (await aui.expect().text('First Name').exists()) {
                await aui.click().text('First Name').exec();
            }
        } catch (error) {
            await aui.annotate();
            return;
        }

        await aui.type('John').exec();

        try {
            if (await aui.expect().text('Last Name').exists()) {
                await aui.click().text('Last Name').exec();
            }
        } catch (error) {
            await aui.annotate();
            return;
        }

        await aui.type('Doe').exec();

        try {
            if (await aui.expect().text('Zip/Postal Code').exists()) {
                await aui.click().text('Zip/Postal Code').exec();
            }
        } catch (error) {
            await aui.annotate();
            return;
        }

        await aui.type('10000').exec();
        await aui.pressKey('pagedown').exec();

        try {
            if (await aui.expect().text('continue').exists()) {
                await aui.click().text('continue').exec();
            }
        } catch (error) {
            await aui.annotate();
            return;
        }

        await aui.annotate();
        await aui.pressKey('pagedown').exec();

        try {
            if (await aui.expect().text('Finish').exists()) {
                await aui.click().text('Finish').exec();
                await aui.annotate();
            }
        } catch (error) {
            await aui.annotate();
            return;
        }
    });
});
