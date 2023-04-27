import BooksPage from '../../demoqa/books.page.js'


describe('Guest features', () => {
    before(async () => {
        await BooksPage.visit()
    })

    it('view initial list of books', async () => {
        const rows = await BooksPage.tableRowImages
        expect(rows).toBeElementsArrayOfSize(8) // 8 books exist in initial list
    })

    it('search for books', async () => {
        await BooksPage.search('6')
        const firstRow = await (await BooksPage.getRowByIndex(0)).getText()
        expect(firstRow).toContain('Understanding ECMAScript 6')
    })
})
