"use strict";

export default {

  /**
   * Validate whether a string matches 'X.X.X.X' or 'X.X.X.X/X'.
   */

  handleFail(xhr, fail) {
    if (fail === undefined) return;
    if (xhr.responseJSON && xhr.responseJSON.message) {
      fail("error." + xhr.responseJSON.message);
    } else {
      fail("error." + xhr.status);
    }
  },

  cloneJSON(json) {
    return JSON.parse(JSON.stringify(json));
  }

};
