# Fields headers wrapper

This is an helper lib with default class to manipulate collections of fields and headers definitions (use collect.js).

## Install

```bash
yarn add https://github.com/dicalj/fields-headers-wrapper.git
```

## Usage

Define the fields class
```javascript
// import required module
import { Fields } from 'fields-headers-wrapper'

// example fields collection class
export default class ExampleFields extends Fields {

  /**
   * Define the fields options.
   * @returns {Array} fields options.
   */
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

  /**
   * Returns the specific collection to create variant.
   * @return {Array} collect.js array extend instance.
   */
  static toCreate() {
    return this.reduce('name', ['name'])
  }
}
```

Use the defined class
```javascript
// import required module
import ExampleFields from './example.fields'

// a new example fields create variant instance
var exampleFields = ExampleFields.toCreate()

// output example fields
console.log(exampleFields)

// output:
//
// [
//  {
//    name: 'name',
//    type: 'text-field',
//    prop: {
//      label: 'Name'
//    },
//  }
// ]
//
```

## License

© dicaljs