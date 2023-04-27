class LoginPage {
    get message() {
        return $('#name')
    }

    async visit() {
        await browser.url('/login')
    }

    async login(username, password) {
        await $('#userName').setValue(username)
        await $('#password').setValue(password)
        await $('#login').click()
    }

    async gotoRegister() {
        await $('#newUser').click()
    }

}

export default new LoginPage();
