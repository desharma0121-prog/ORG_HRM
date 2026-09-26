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
            timeout: 30000
            
        });
    }

    async login(username, password) {

        await this.username.fill(username);

        await this.password.fill(password);

        await this.loginBtn.click();

        await this.page.waitForLoadState('domcontentloaded');
    }

    async logout() {

        await this.userDropdown.click();

        await this.logoutLink.click();

        await this.page.waitForURL(
            /auth\/login/,
            { timeout: 15000 }
        );
    }
}

module.exports = { LoginPage };