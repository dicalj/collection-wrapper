import ExampleCollection from './dummies/collections/example'

describe('ExampleCollection', () => {

  describe('toStart', () => {

    let collection = ExampleCollection.toStart()
  
    it('it should have two item', () => {
      expect(collection).toHaveLength(2)
    })
  
    it('it should have start item definitions', () => {
      expect(collection).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ 
            type: 'START',
            data: 'foo' 
          }),
          expect.objectContaining({ 
            type: 'START',
            data: 'baz' 
          })
        ])
      )
    })
  })
})