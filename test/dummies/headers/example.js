import Headers from '../../../src/headers'

export default class ExampleHeaders extends Headers {

  headers() {
    return [
      {
        value: 'id',
        type: 'text',
      },
      {
        value: 'first_name',
        type: 'date',
      },
      {
        value: 'last_name',
        type: 'date',
      },
      {
        value: 'email',
        type: 'date',
      },
      {
        value: 'username',
        type: 'date',
      },
      {
        value: 'created_at',
        type: 'date',
      },
      {
        value: 'updated_at',
        type: 'date',
      },
    ]
  }

  static toList() {
    return this.reduce('value', [
      'id',
      'username',
      'email',
      'created_at',
      'updated_at',
    ])
  }
}
