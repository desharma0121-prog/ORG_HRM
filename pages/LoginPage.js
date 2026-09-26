class LoginPage {
    constructor(page) {
        this.page = page;

        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');

        this.loginBtn = page.getByRole('button', {
            name: 'Login'
        });

        this.dashboardHeading = page.getByRole('heading', {
            name: 'Dashboard'
        });

        this.userDropdown = page.locator(
            '.oxd-userdropdown-name'
        );

        this.logoutLink = page.getByRole('menuitem', {
            name: 'Logout'
        });
    }

    async open() {
        await this.page.goto('/web/index.php/auth/login');

        await this.username.waitFor({
            state: 'visible',
            timeout: 15000
        });
    }

    async login(username, password) {

        // Enter username
        await this.username.fill(username);

        // Enter password
        await this.password.fill(password);

        // Click Login button
        await this.loginBtn.click();

        // Wait for navigation/loading to complete
        await this.page.waitForLoadState('domcontentloaded');
    }

    async logout() {

        // Open user menu
        await this.userDropdown.click();

        // Click Logout
        await this.logoutLink.click();

        // Wait for login page
        await this.page.waitForURL(
            /auth\/login/,
            { timeout: 15000 }
        );
    }
}

module.exports = { LoginPage };