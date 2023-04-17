import BooksPage from '../../demoqa/pageobjects/books.page.js'


describe('Guest behaviors', () => {
    it('view list of books', async () => {
        // await browser.url('/books')
        await BooksPage.open()
        const rows = await BooksPage.tableRowImages
        await expect(rows).toBeElementsArrayOfSize(8) // 8 books exist in initial list
    })

    it('search for books', async () => {
        // await browser.url('/books')
        await BooksPage.open()
        // await $('#searchBox').setValue('git')
        await BooksPage.search('git')
        // const table = await $('.rt-table')
        // const row = await table.$('[role=rowgroup]')
        const firstRow = await BooksPage.getRowByIndex(0)
        await expect(firstRow).toHaveTextContaining('Git Pocket Guide')
    })
})
