import Collection from '../../../src/collection'

export default class ExampleCollection extends Collection {

  items() {
    return [
      { 
        type: 'START', 
        data: 'foo' 
      },
      { 
        type: 'START', 
        data: 'baz' 
      },
      { 
        type: 'END', 
        data: 'foo' 
      },
    ]
  }

  static toStart() {
    return this.reduce('type', ['START'])
  }
}
