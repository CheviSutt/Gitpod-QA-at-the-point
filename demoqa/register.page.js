class RegisterPage {
    get message() {
        return $('#name')
    }

    async visit() {
        await browser.url('/register')
    }

    async register(firstName, lastName, username, password) {
        await $('#firstname').setValue(firstName)
        await $('#lastname').setValue(lastName)
        await $('#userName').setValue(username)
        await $('#password').setValue(password)

        // oh no! a recaptcha!
        // Maybe we can register a new user via the API instead?
        await $('#register').click()
    }
}

export default new RegisterPage();
