// required modules
import Collection from './collection'

/**
 * @description
 * This class describes a collection of fields used for forms or other 
 * situations that require input fields.
 * 
 * @augments Collection
 * @class Fields
 */
class Fields extends Collection {

  /**
   * Get the raw items of class instance.
   * 
   * @returns {Array} raw items.
   */
  items() {
    return this.fields()
  }
  
  /**
   * Get the raw items of fields class instance.
   * 
   * @returns {Array} raw items.
   */
  fields() {
    return []
  }
}

// export module
export default Fields