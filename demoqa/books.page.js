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

    async open() {
        return browser.url('https://demoqa.com/books')
    }

    async getRowByIndex(index=0) {
        return this.tableRows[index]
    }

    async search(query) {
        await $('#searchBox').setValue(query)
    }
}

export default new BooksPage();
