window.Enciclopedia_local_utils = new Vue({
  data() {
    return {
      
    };
  },
  methods: {
    generateErrorType(errorName, errorMessage, errorMetadata = {}, errorBase = {}) {
      const errorClass = class extends Error {
        constructor(message) {
          super(message);
          this.name = errorName;
        }
      }
      
      const errorObject = new errorClass(errorMessage);
      Object.assign(errorBase, errorObject, errorMetadata);
    }
  },
  watch: {}
});