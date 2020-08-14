import ExampleHeaders from './dummies/headers/example'

describe('ExampleHeaders', () => {

  describe('toList', () => {

    let headers = ExampleHeaders.toList()
  
    it('it should have five item', () => {
      expect(headers).toHaveLength(5)
    })
  
    it('it should have list item definitions', () => {
      expect(headers).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            value: 'id',
            type: 'text',
          }),
          expect.objectContaining({
            value: 'username',
            type: 'date',
          }),
          expect.objectContaining({
            value: 'email',
            type: 'date',
          }),
          expect.objectContaining({
            value: 'created_at',
            type: 'date',
          }),
          expect.objectContaining({
            value: 'updated_at',
            type: 'date',
          })
        ])
      )
    })
  })
})