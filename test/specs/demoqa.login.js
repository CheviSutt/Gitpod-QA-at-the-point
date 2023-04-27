import LoginPage from '../../demoqa/login.page.js'


describe('Login features', () => {
    before(async () => {
        await LoginPage.visit()
    })

    it.only('cannot login with invalid credentials', async () => {
        LoginPage.login('invalid', 'invalid')
        const error = await LoginPage.message.getText()
        expect(error).toBe('Invalid username or password!')
    })

    it('login with valid credentials', async () => {
        // TODO: create user via API to login with
        LoginPage.login('valid', 'creds')
    })
})
