describe('Login Flows', () => {
    
    it('Locked Out User cannot login', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('locked_out_user') // returns one elements
        //$$('#user-name') // returns all elements in a list
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        const error = await $('[data-test=error]').getText()
        expect(error).toBe('Epic sadface: Sorry, this user has been locked out.')
    })

})