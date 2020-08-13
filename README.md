# Collection Wrapper

<p>
   <a href="https://github.com/dicalj/collection-wrapper/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/dicalj/collection-wrapper?style=flat-square"/>
    </a>     
</p>

A basic library to help you create collection variants, for example form fields or table columns.
Establish behavior and manipulate collections in dedicated classes.
Keeping your code clean and comprehensible.

## Install

```bash
yarn add collection-wrapper
```

## Usage

Define a 'ExampleFields' class, and get the defined 'toCreate' variant:
```javascript
// import required module
import { Fields } from 'collection-wrapper'

/**
 * ExampleFields
 * 
 * @class 
 */
export default class ExampleFields extends Fields {

  /**
   * Define the fields options.
   * 
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
   * 
   * @return {Array} collect.js array extend instance.
   */
  static toCreate() {
    return this.reduce('name', ['name'])
  }
}
```

Use the defined 'ExampleFields' class with the 'toCreate' variant:
```javascript
// import required module
import ExampleFields from './example.fields.js'

// a new example fields create variant instance
var fields = ExampleFields.toCreate()
```

The result of 'toCreate' variant is:

```javascript
[
  {
    name: 'name',
    type: 'text-field',
    prop: {
      label: 'Name'
    },
  }
]
```

## Thanks
- Inspiration from [ecrmnn/collect.js](https://github.com/ecrmnn/collect.js).