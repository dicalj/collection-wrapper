import Fields from '../../../src/fields'

export default class ExampleFields extends Fields {

  fields() {
    return [
      {
        name: 'name',
        type: 'text-field',
        prop: {
          label: 'Name'
        },
      },
      {
        name: 'last_name',
        type: 'text-field',
        prop: {
          label: 'Last name'
        },
      },
    ]
  }

  static toCreate() {
    return this.reduce('name', ['name'])
  }
}
