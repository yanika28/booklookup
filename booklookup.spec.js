function booklookup(amazonservice){
    this.amazonservice = amazonservice


this.search = (ispn) => {
let value = this.amazonservice(ispn)
return value


}

}

test('tsst', () => {
    let test = "test"

    expect(test).toBe("test")

}) 


test ('testbook-lookup',() => {

    const amazonservice = jest.fn('aaaaasssssddd').mockReturnValue({ name: 'javascript-book', cover: 'image.com', ispn:'aaaaasssssddd'})

    let app = new booklookup(amazonservice)
    let ispn = "aaaaasssssddd"
    let result = app.search(ispn)

    expect(amazonservice).toHaveBeenCalled()
    expect(amazonservice).toHaveBeenCalledWith(isbn)
    expect(result).toEqual({ name: 'javascript-book', cover: 'image.com', ispn:'aaaaasssssddd'})
    expect(result).toHaveProperty('bookname')
    expect(result).toHaveProperty('cover')
    expect(result).toHaveProperty('ispn')
    expect(result.bookname).toBe("javascript-book")
    expect(result.cover).toBe("image.com")
    expect(result.ispn).toBe('aaaaasssssddd')
    expect(result.ispn).toHaveLength(13)


})