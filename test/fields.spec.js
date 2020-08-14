import ExampleFields from './dummies/fields/example'

describe('ExampleFields', () => {

  describe('toCreate', () => {

    let fields = ExampleFields.toCreate()
  
    it('it should have one item', () => {
      expect(fields).toHaveLength(1)
    })
  
    it('it should have name field definition', () => {
      expect(fields).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: 'name',
            type: 'text-field',
            prop: {
              label: 'Name'
            },
          })
        ])
      )
    })
  })
})