# Collection Wrapper

<p>
   <a href="https://github.com/dicalj/collection-wrapper/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/dicalj/collection-wrapper?style=flat-square"/>
    </a>     
</p>

A basic library to help you create collection(collect.js) variants, for example form fields or table columns.
Establish behavior and manipulate collections in dedicated classes.
Keeping your code clean and comprehensible.

## Install

```bash
yarn add collection-wrapper
```

## Usage

Define a 'ExampleFields' class, and get the defined 'toCreate' variant:
```javascript
import { Fields } from 'collection-wrapper'

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
```

Use the defined 'ExampleFields' class with the 'toCreate' variant:
```javascript
import ExampleFields from './example.fields.js'

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