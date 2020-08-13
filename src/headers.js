// required modules
import Collection from './collection'

/**
 * @description
 * This class describes a collection of headers used for tables or other 
 * situations that require columns headers.
 * 
 * @augments Collection
 * @class Headers
 */
class Headers extends Collection {

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
export default Headers