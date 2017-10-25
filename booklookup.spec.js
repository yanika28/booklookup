test('tsst', () => {
    let test = "test"

    expect(test).toBe("test")

}) 


test ('testbook-lookup',() => {

    const amazonservice = jest.fn('aaaaasssssddd').mockReturnValue({ name: 'javascript-book', cover: 'image.com', ispn:'aaaaasssssddd'})

    let app = new booklookup(amazonservice)
    let ispn = "aaaaasssssddd"
    let result = app.search(ispn)




})