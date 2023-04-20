import BooksPage from '../../demoqa/books.page.js'


describe('Guest behaviors', () => {
    it('view list of books', async () => {
        await BooksPage.open()
        const rows = await BooksPage.tableRowImages
        expect(rows).toBeElementsArrayOfSize(8) // 8 books exist in initial list
    })

    it('search for books', async () => {
        BooksPage.open()
        BooksPage.search('6')
        const firstRow = BooksPage.getRowByIndex(0)
        expect(firstRow).toHaveTextContaining('Understanding ECMAScript 6')
    })
})
