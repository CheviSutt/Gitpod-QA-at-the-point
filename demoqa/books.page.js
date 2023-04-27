class BooksPage {
    get table() {
        return $('.rt-table')
    }

    get tableRows() {
        return this.table.$$('[role=rowgroup]')
    }

    get tableRowImages() {
        return this.table.$$('[role=rowgroup] img')
    }

    async visit() {
        await browser.url('/books')
    }

    async getRowByIndex(index=0) {
        return this.tableRows[index]
    }

    async search(query) {
        await $('#searchBox').setValue(query)
    }

    async gotoLogin() {
        await $('#login').click()
    }
}

export default new BooksPage();
