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

    open() {
        return browser.url('/books')
    }

    getRowByIndex(index=0) {
        return this.tableRows[index]
    }

    search(query) {
        $('#searchBox').setValue(query)
        return this
    }
}
