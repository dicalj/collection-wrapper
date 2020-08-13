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
    return this.headers()
  }
  
  /**
   * Get the raw items of headers class instance.
   * 
   * @returns {Array} raw items.
   */
  headers() {
    return []
  }  
}

// export module
export default Headers